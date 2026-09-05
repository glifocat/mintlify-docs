# Changelog policy

Use **Docs updates** (`changelog/docs-updates.mdx`) for meaningful documentation changes: new or revised instructions, navigation, teaching visuals, and contributor guidance. Use **Releases** (`changelog/index.mdx`) for verified product changes. A docs edit does not require a product-release entry. Do not invent a release or advance a product verification stamp to describe editorial work.

## Write the entry in the same PR

Add a dated `<Update>` entry near the top of Docs updates, or update the relevant entry for the same change. Describe the reader impact in plain language and link affected public pages where useful. Keep internal contributor links out of the public portal. Use the date the entry is prepared; do not describe an open PR as already deployed. Preserve older history rather than rewriting unrelated entries to satisfy a check.

For release notes, distinguish verified unreleased behavior from a numbered release. Check the actual product version before naming one. Source-verification rules in `CLAUDE.md` still apply.

## Small-change exceptions

Typos, formatting-only changes, and verification-stamp-only updates can omit a Docs updates entry. Explain the exception with one visible standalone line in the PR description, for example:

```text
Docs changelog exception: typo — Corrected a misspelled heading; instructions are unchanged.
```

Allowed categories are `typo`, `formatting`, and `verification-only`. Do not use an exception for behavior corrections, new instructions, or mixed substantive edits. The reviewer confirms whether it applies. The script checks the declaration, not the truth of that justification.

## Automated check

The `Docs changelog` job compares the PR head with its merge base against the actual target branch, so stacked PRs are checked for their own changes. It covers public MDX outside changelogs/drafts, `docs.json`, `images/`, `docs/editorial/`, and `CONTRIBUTING.md`. Deleted and renamed paths are included. Release-only changes and code-only changes are outside this check, although maintainers can still write a useful docs entry.

A covered change needs new or changed nonempty text in a dated Docs updates `<Update>` block, or a valid exception declaration. Reordering entries, changing only whitespace or comments, and deleting entries do not satisfy it. The check does not establish that prose is accurate, dates are appropriate, links work, or the exception is justified; those remain review duties.

PR-description edits rerun the check so an exception can be corrected without a new commit. The workflow reads event data as JSON; PR text is never inserted into shell commands. Run its focused tests locally with `node --test scripts/check-docs-changelog.test.mjs`.
