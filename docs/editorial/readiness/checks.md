# Contribution checks and known limits

## Baseline and change

At `62c5a5a`, the repo had no GitHub Actions workflows. Its three `.mintlify/workflows/` files generate/audit documentation from upstream changes; they are not build gates. PR #382's Mintlify deployment check was skipped at audit time. This does not establish the dashboard's configuration or branch protection.

This preparation adds [Docs checks](../../../.github/workflows/docs-checks.yml) on every pull request (including stacked bases), pushes to main, and manual dispatch. It uses Node 22 and the locally tested `mint@4.2.874`. Dependencies are development tooling only. The top-level package is pinned; npm transitive resolution is not fully locked. Change the pin deliberately after local checks. The workflow has read-only repository permissions, no secrets, and does not retain checkout credentials or use `pull_request_target`.

| Check | What it establishes | What it does not establish |
| --- | --- | --- |
| `mint validate` | MDX/config can build | Product instructions are true or usable |
| `mint broken-links` | CLI finds no broken internal page links | All external URLs, rendered anchors, navbar/global hrefs or deployed routing work |
| `mint a11y --skip-contrast` | Media-alt scan finds no missing attributes in supported markup | Useful alt wording, keyboard access, actual contrast, caption quality, or a WCAG conformance audit |
| Local browser review | Affected layouts/interactions work at checked sizes | Installation or intended-reader success |
| Source review | Scoped claims agree with the inspected revision | Fresh-machine behavior or all future revisions |

Full `mint a11y` currently reports palette failures against light backgrounds while returning exit 0 after its media scan. `docs.json` is strict dark; these palette comparisons are a reason to inspect actual rendered colors, not proof of a defect in every displayed element. Track that work as R12. Do not use this command's exit status to claim complete accessibility.

## Local procedure

From the repository root, with Node 22 and the pinned CLI installed:

```bash
mint validate
mint broken-links
mint a11y --skip-contrast
python3 scripts/docs-inventory.py > docs/editorial/readiness/inventory.md
```

The inventory script needs Python 3 and Git, uses no third-party packages, and reads tracked public MDX. It is an on-demand planning snapshot, not a new mandatory gate for every typo. It handles this repo's simple ignore rules and metadata; it does not replace the Mintlify parser. Refresh after a page batch, and review the suggested audience/priority before assigning work.

After an approved PR exists, inspect the first Actions run on GitHub, including a PR targeting another stack branch. Repository administrators may choose to require the `Docs checks / docs` check after it runs successfully. This preparation does not enable branch protection or merge the existing stack.

Official references: [Mintlify CLI commands](https://www.mintlify.com/docs/cli/commands) and [GitHub workflow events](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows). Local command behavior, including the contrast exit-code limitation, was checked separately from the documentation.
