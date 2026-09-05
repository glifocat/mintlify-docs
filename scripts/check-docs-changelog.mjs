#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const changelog = 'changelog/docs-updates.mdx';

export function needsEntry(path) {
  return path === 'docs.json' || path === 'CONTRIBUTING.md' ||
    path.startsWith('images/') || path.startsWith('docs/editorial/') ||
    (path.endsWith('.mdx') && !path.startsWith('.') &&
      !path.startsWith('docs/') && !path.startsWith('drafts/') &&
      !path.endsWith('.draft.mdx') && !path.startsWith('changelog/'));
}

function entries(text) {
  const withoutComments = text.replace(/\{\/\*[\s\S]*?\*\/\}|<!--[\s\S]*?-->/g, '');
  return [...withoutComments.matchAll(/<Update\b([^>]*)>([\s\S]*?)<\/Update>/g)]
    .filter(([, attrs]) => /\bdescription="\d{4}-\d{2}-\d{2}"/.test(attrs))
    .map(([, , body]) => body.replace(/\s+/g, ' ').trim())
    .filter(Boolean);
}

export function assess(paths, before, after, body = '') {
  if (!paths.some(needsEntry)) return { ok: true, reason: 'No covered documentation changes.' };
  const previous = new Set(entries(before));
  if (paths.includes(changelog) && entries(after).some(entry => !previous.has(entry))) {
    return { ok: true, reason: 'Dated Docs updates entry added or updated; reviewer must check its accuracy.' };
  }
  // A visible standalone line; commented template instructions do not count.
  const visible = body.replace(/<!--[\s\S]*?-->/g, '');
  const exemption = visible.match(/^Docs changelog exception: (typo|formatting|verification-only) — (\S[^\r\n]*)$/m);
  if (exemption) return { ok: true, reason: `Declared ${exemption[1]} exception: ${exemption[2]}. Reviewer confirmation required.` };
  return { ok: false, reason: 'Add or update a dated entry in changelog/docs-updates.mdx, or declare a justified typo, formatting, or verification-only exception in the PR body. See docs/editorial/changelog-policy.md.' };
}

function git(...args) {
  return execFileSync('git', args, { encoding: 'utf8' });
}

export function checkEvent(event) {
  const pr = event.pull_request;
  if (!pr) throw new Error('Expected a pull_request event.');
  for (const sha of [pr.base?.sha, pr.head?.sha]) {
    if (!/^[a-f0-9]{40}$/.test(sha ?? '')) throw new Error('Missing or invalid PR commit SHA.');
  }
  const base = git('merge-base', pr.base.sha, pr.head.sha).trim();
  const paths = git('diff', '--name-only', '--no-renames', '-z', base, pr.head.sha).split('\0').filter(Boolean);
  function content(ref) {
    const exists = git('ls-tree', '--name-only', ref, '--', changelog).trim();
    return exists ? git('show', `${ref}:${changelog}`) : '';
  }
  return assess(paths, content(base), content(pr.head.sha), pr.body ?? '');
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const result = checkEvent(JSON.parse(readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8')));
    console.log(result.reason);
    process.exitCode = result.ok ? 0 : 1;
  } catch (error) {
    console.error(`Changelog check failed: ${error.message}`);
    process.exitCode = 1;
  }
}
