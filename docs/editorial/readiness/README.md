# Documentation readiness

This is the work plan for extending the [editorial standard](../style-guide.md) across the portal. Start with the [reader journeys](journeys.md), select a bounded item from the [backlog](backlog.md), then use the [review template](../review-template.md). The [inventory](inventory.md) covers every public MDX page; the [visual plan](visual-plan.md) describes the captures that would help readers.

## Audit boundary

Snapshot: 2026-09-05, based on documentation commit `62c5a5a` (the three unmerged onboarding PRs #380–#382). All 56 public MDX files appear in navigation. This is coverage, not evidence that every page is complete or correct. The generator inventories all pages; agent editorial review focused on the onboarding transitions named in the backlog. Other pages remain unassessed beyond metadata and structure.

The three pilot pages have source/editorial and local browser review; none has an intended-reader test. This audit does not advance product verification stamps or claim a full upstream drift sweep. Existing comments can contain several source revisions for separately checked claims.

At audit time the only other open PR was #375, the issue-triage playbook; there were no open issues. Do not duplicate that pending page. Main had not received this stack. The local preview reflects the candidate, not the deployed portal.

## How to use this plan

1. Pick one reader outcome from the backlog and claim it in the PR description. Owners below are proposed roles, not assignments to people.
2. Read the relevant pages and current implementation. Verify flagged behavior before changing instructions.
3. Rewrite the smallest complete journey segment, retain compatible URLs, and capture only useful visuals.
4. Run [the checks](checks.md), record findings, and observe an intended reader where the acceptance criterion calls for it.
5. Update the backlog disposition and regenerate the inventory. A passed build does not close a usability item.

Keep this plan internal to the repository; `docs/` is already excluded from the portal. Do not create a second style guide here. This preparation changes no public navigation or product instructions.

## Ready for a wider rollout means

- Every public page is accounted for and has a plausible reader/purpose; high-priority journey gaps have explicit acceptance criteria.
- Entry pages lead to usable follow-on tasks and recovery paths, with assumptions made visible.
- Visuals have a learning purpose, provenance, accessible alternatives, and a maintenance trigger.
- Build and link checks run on PRs; known accessibility and testing limits remain visible.
- New audits report whether they checked source, rendering, installation, or reader success.

The plan is ready to use; the portal has not yet met every criterion above. P1 backlog items remain open.
