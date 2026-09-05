---
name: docs-editor
description: Audit, rewrite, or create NanoClaw documentation pages using the repository's audience-aware style guide, page patterns, and source-verification workflow. Use for page approachability, voice, structure, examples, and instructional visuals.
---

# Edit NanoClaw documentation

Use the repository [style guide](../../../docs/editorial/style-guide.md) as the editorial authority. Read it first. Read [page patterns](../../../docs/editorial/page-patterns.md) to choose the form the task needs; load the [quickstart example](../../../docs/editorial/quickstart-example.md) only when an example helps. Resolve these paths relative to this skill, not the shell's current directory.

## Set the scope

Determine whether the request is an audit, rewrite, or new page. Keep audit-only work read-only. For a rewrite, preserve the user's target audience, platform, provider, and constraints; do not silently substitute the quickstart's terminal/Claude path. Treat a small correction proportionally.

For a substantial audit or change, record the audience, assumed knowledge, reader goal, page pattern, and success criterion using the [review template](../../../docs/editorial/review-template.md). Infer these from the request and page where reasonable; ask only if the answer would materially change the work.

Read the page, its incoming links/navigation, and relevant neighboring pages. Identify actual barriers with locations and reader impact. Separate behavior defects, editorial judgments, and missing evidence. Do not assign invented readability scores.

## Verify and edit

Verify changed product behavior against upstream implementation and the relevant registry revision before rewriting. Follow `CLAUDE.md` for source authority and verification stamps. If source access is unavailable, continue useful editorial work but identify the unverified claims; do not invent missing behavior or advance verification stamps.

Choose the appropriate pattern. Keep exact UI labels, commands, defaults, constraints, and meaningful alternatives. Explain unfamiliar terms where the audience needs them. Preserve required consequences and source-supported limits. Existing incoming URLs/anchors are part of the compatibility surface.

Give procedural readers actions, expected results, and useful recovery routes. Give reference readers precise, scannable facts. Do not force a tutorial format, command sequence, illustration, or screenshot quota onto every page.

For visuals, identify the question each asset answers. Prefer current real captures for UI and selectable text for examples. Record provenance and uncertainty; label illustrations. If a capture is unavailable, write a concrete capture brief and report the gap without fabricating a screenshot or test result. Use the repository Mintlify skill for component implementation when needed.

## Verify and hand off

Run the checks required for the actual change: Mintlify build/link validation and browser inspection for changed layouts or interactions. Request independent review for substantial changes under the repository workflow. Resolve accepted findings and record other dispositions. Tests and reviewers must examine the final candidate, not an earlier draft.

Keep review evidence out of public navigation. Report what changed, why, what was checked, unresolved gaps, and delivery state. Distinguish editorial/source review, browser inspection, real installation tests, and intended-reader testing. The skill does not authorize external publication, PR creation, merges, or contacting participants; follow the user's existing permissions.
