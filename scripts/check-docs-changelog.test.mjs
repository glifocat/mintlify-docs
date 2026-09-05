import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assess, needsEntry } from './check-docs-changelog.mjs';
const entry = text => `<Update label="Docs" description="2026-09-05">${text}</Update>`;

test('public, navigation, visuals and editorial changes require an entry', () => {
  for (const path of ['quickstart.mdx','channels/telegram.mdx','docs.json','images/new.png','docs/editorial/style-guide.md','CONTRIBUTING.md']) {
    assert.equal(needsEntry(path), true);
    assert.equal(assess([path], '', '').ok, false);
  }
});
test('code, drafts and release-only changes are outside the gate', () => {
  for (const path of ['scripts/tool.mjs','.github/workflows/check.yml','docs/spec.mdx','drafts/page.mdx','page.draft.mdx','changelog/index.mdx']) {
    assert.equal(assess([path], '', '').ok, true);
  }
});
test('new and updated dated entries pass, whitespace and deletion do not', () => {
  const paths=['quickstart.mdx','changelog/docs-updates.mdx'];
  assert.equal(assess(paths, '', entry('Explains setup.')).ok, true);
  assert.equal(assess(paths, entry('Old.'), entry('New.')).ok, true);
  assert.equal(assess(paths, entry('Two words'), entry('Two\n words')).ok, false);
  assert.equal(assess(paths, entry('Old.'), '').ok, false);
  assert.equal(assess(paths, '', '<Update label="Undated">New</Update>').ok, false);
  assert.equal(assess(paths, '', `{/* ${entry('Comment only')} */}`).ok, false);
});
test('explicit visible limited exceptions require a reason', () => {
  for (const category of ['typo','formatting','verification-only']) {
    assert.equal(assess(['quickstart.mdx'], '', '', `Docs changelog exception: ${category} — Corrected metadata only.`).ok, true);
  }
  for (const body of ['Docs changelog exception: typo — ', 'Docs changelog exception: feature — New setup.', '<!-- Docs changelog exception: typo — Example -->']) {
    assert.equal(assess(['quickstart.mdx'], '', '', body).ok, false);
  }
});

test('real Git history checks only this stack layer and handles deletion', async () => {
  const { mkdtempSync, writeFileSync, mkdirSync, rmSync } = await import('node:fs');
  const { tmpdir } = await import('node:os');
  const { join } = await import('node:path');
  const { execFileSync } = await import('node:child_process');
  const { checkEvent } = await import('./check-docs-changelog.mjs');
  const folder = mkdtempSync(join(tmpdir(), 'docs-changelog-test-'));
  const original = process.cwd();
  const git = (...args) => execFileSync('git', ['-c','core.hooksPath=/dev/null','-c','commit.gpgsign=false','-c','user.name=Fixture','-c','user.email=fixture@example.invalid',...args], {encoding:'utf8'}).trim();
  try {
    process.chdir(folder);
    git('init','-q');
    mkdirSync('changelog');
    writeFileSync('quickstart.mdx','Original');
    writeFileSync('changelog/docs-updates.mdx',entry('Lower layer entry.'));
    git('add','.'); git('commit','-qm','Lower layer');
    const base = git('rev-parse','HEAD');
    writeFileSync('quickstart.mdx','Upper layer change');
    git('add','.'); git('commit','-qm','Upper layer');
    let head = git('rev-parse','HEAD');
    const event = body => ({pull_request:{base:{sha:base},head:{sha:head},body}});
    assert.equal(checkEvent(event('')).ok,false, 'Inherited entry must not pass');
    assert.equal(checkEvent(event('Docs changelog exception: typo — Corrected spelling.')).ok,true);
    writeFileSync('changelog/docs-updates.mdx',entry('Upper layer entry.')+'\n'+entry('Lower layer entry.'));
    git('add','.'); git('commit','-qm','Entry'); head=git('rev-parse','HEAD');
    assert.equal(checkEvent(event('')).ok,true);
    const renameBase=head;
    git('mv','quickstart.mdx','notes.txt');git('commit','-qm','Rename out of docs');head=git('rev-parse','HEAD');
    assert.equal(checkEvent({pull_request:{base:{sha:renameBase},head:{sha:head},body:''}}).ok,false);
    git('mv','notes.txt','quickstart.mdx');git('commit','-qm','Restore guide');head=git('rev-parse','HEAD');
    const nextBase=head;
    git('rm','-q','quickstart.mdx');git('commit','-qm','Remove guide');head=git('rev-parse','HEAD');
    assert.equal(checkEvent({pull_request:{base:{sha:nextBase},head:{sha:head},body:''}}).ok,false);
    assert.throws(()=>checkEvent({pull_request:{base:{sha:'--help'},head:{sha:head}}}),/invalid PR commit SHA/);
  } finally {
    process.chdir(original);
    rmSync(folder,{recursive:true,force:true});
  }
});
