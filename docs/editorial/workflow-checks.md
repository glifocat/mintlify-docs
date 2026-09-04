# Editing workflow checks

These checks exercise the [docs-editor skill](../../.agents/skills/docs-editor/SKILL.md) on different audiences. They are independent agent audits, not tests with human readers and not completed page rewrites.

## Inputs and scope

The page inputs were based on docs commit `65307bce250812a5baa5c6aaa182f8d2fde7fc46`. Targeted product checks used upstream `b76fcb3db0236b36a4d50bed02e89eff472d0e67`. Evaluators received the skill, its referenced guidance, the target pages, and audit-only requests. They were not given an expected finding list. They wrote reports outside the repository and made no page edits.

| Request | Observed workflow result | Limit |
| --- | --- | --- |
| Audit the introduction for a nontechnical newcomer | Chose orientation; proposed a clear next action and one outcome visual; did not turn it into another installer | Source of product claims was not re-verified in this case |
| Audit the template getting-started guide for someone seeking a prebuilt assistant | Preserved the template goal and alternatives; identified missing prerequisites and conditional success/recovery | Targeted source checks only; no template installation or capture |
| Audit the environment-variable reference for an experienced operator | Retained exact grouped tables; identified value/provenance gaps; recommended no screenshots | Not a complete variable inventory or full-page verification |

The evaluators could resolve the skill's relative reference links. Neither imposed the quickstart's terminal/Claude route or a fixed media count. Both reported a minor ambiguity about whether the review-record instruction applied to audit-only work; the skill and template now explicitly include substantial audits.

## Findings used or queued

These are scoped editorial/source findings, not observed user failures. The guide's author reviewed the audit outputs before recording these dispositions.

| Finding | Evidence at the input revision | Disposition / owner |
| --- | --- | --- |
| Introduction promises quickstart examples for every listed capability | `introduction.mdx` link sentence versus the pilot's three everyday examples | Accepted and resolved in this style-guide change; existing anchor preserved |
| Introduction starts explaining implementation before orienting the reader | Opening/glossary and “Under the hood” section | Deferred to docs maintainer for the introduction rewrite; verify access/safety claims first |
| Introduction's planned real chat image is absent | Existing hero-chat TODO; no matching asset | Deferred to docs maintainer; capture a real exchange or label an illustration |
| Template guide assumes Terminal/Git/placeholder knowledge | Installation commands and paused-task activation instructions | Deferred to docs maintainer for the template tutorial rewrite |
| Template guide promises a welcome for every connected channel and has a stale existing-install picker row | `templates/getting-started.mdx`; upstream `setup/auto.ts` pending-first-DM branch and existing-install template prompt | Deferred to docs maintainer for source-verified correction; selected-template terminal routing also needs verification |
| Template guide presents unsupported timing and late account-cost information | Opening estimate, template choice, and later paid-service warning | Deferred to docs maintainer; move consequential requirements before selection and measure or qualify estimates |
| Image-label bypass row omits the exact enabling value | `reference/environment-variables.mdx`; upstream `container/pull.sh` compares with literal `true` | Deferred to docs maintainer for a narrow reference correction |
| Reference mixes revision scopes and inconsistent accepted-value detail | Source footer/scoped stamps; `src/config.ts` boolean comparisons | Deferred to docs maintainer; retain precision and existing parser exceptions |

No recorded audit result authorizes a rewrite, publication, or contact with a participant. Use the [review template](review-template.md) to carry the relevant evidence into the next authorized task.
