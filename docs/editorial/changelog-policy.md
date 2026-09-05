# Changelog policy

Use **Docs updates** (`changelog/docs-updates.mdx`) for meaningful documentation changes: new or revised instructions, navigation, teaching visuals, and contributor guidance. Use **Releases** (`changelog/index.mdx`) for verified product changes. A docs edit does not require a product-release entry. Do not invent a release or advance a product verification stamp to describe editorial work.

## Write the entry in the same PR

Add a dated `<Update>` entry near the top of Docs updates, or update the relevant entry for the same change. Describe the reader impact in plain language and link affected public pages where useful. Keep internal contributor links out of the public portal. Use the date the entry is prepared; do not describe an open PR as already deployed. Preserve older history rather than rewriting unrelated entries to satisfy a check.

For release notes, distinguish verified unreleased behavior from a numbered release. Check the actual product version before naming one. Source-verification rules in `CLAUDE.md` still apply.

## Release presentation

Use [Keep a Changelog 1.1.0](https://keepachangelog.com/en/1.1.0/) as the release-structure guide: dated, linkable versions in reverse chronological order, a clearly separate Unreleased section, and notable changes grouped as Added, Changed, Deprecated, Removed, Fixed, or Security where those categories apply. Do not create empty categories. Preserve actual upstream version numbers; do not imply Semantic Versioning guarantees that have not been verified.

For the docs portal, add this reader-facing layer:

1. **What changed:** a short outcome-focused headline and a few highlights.
2. **Why it matters:** describe what readers can now do or which problem they will stop encountering. Explain technical terms when they are needed.
3. **What to do:** keep affected audiences, breaking changes, costs, removals, and required update actions visible before any collapsed detail. Link the supported upgrade path. Do not use “no action needed” without evidence.
4. **Visual explanation:** include a focused screenshot, before/after example, or labeled conceptual illustration when it teaches the change. Follow the style guide's provenance and accessibility rules; decorative imagery is optional and never a substitute for explanation.
5. **Technical details:** preserve migration commands, compatibility limits, source links, and the full notable-change record in expandable notes. Group by the applicable Keep a Changelog categories; retaining historical wording during a layout-only pass is acceptable when explicitly recorded.

Keep the release number, date, and existing anchors stable. Preserve older history and distinguish layout preservation from fresh source verification. Docs-only maintenance belongs in Docs updates, not the product highlights.

Mintlify `Update` components omit components and HTML from automatically generated RSS content. When a release uses cards, illustrations, or collapsed notes, supply an explicit `rss` title and description with the main benefit, required action, and a pointer to full notes. Check both the page and feed output when changing release structure.

The current Releases page demonstrates this pattern for Unreleased and v2.3.0. Earlier entries retain their detailed historical format; migrate them only with appropriate source review.

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
