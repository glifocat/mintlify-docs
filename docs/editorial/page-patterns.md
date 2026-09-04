# Documentation page patterns

These are starting structures, not mandatory headings or page lengths. Apply the shared [style guide](style-guide.md) and choose the pattern that matches the reader's purpose. A mixed page can combine patterns if its main purpose remains clear.

| Pattern | Reader's question | Structure to start from | Visual opportunity |
| --- | --- | --- | --- |
| Orientation | Is this for me, and where do I start? | Plain-language purpose → concrete use case → relevant prerequisites/limits → recommended next page → optional depth | A real outcome or labeled example |
| Tutorial | Can I do this for the first time? | Outcome → prerequisites → guided path → checkpoints/recovery → useful result → next action | Choice screens, app transitions, first success |
| How-to | How do I complete this task on my existing install? | Goal/assumptions → required choices/consequences → steps → verification → related recovery | A difficult decision or state change |
| Explanation | Why does it work this way? | Question → mental model → relationships/tradeoffs → worked example → limits/related tasks | A diagram that explains the relationship |
| Reference | What are the exact options and behavior? | Scope/version → organized fields or commands → types/defaults/constraints → minimal examples → errors/related tasks | Often none; a table may be enough |
| Troubleshooting | What caused this symptom and what can I do? | Observable symptom → checks → likely causes → corrective actions → expected recovery → escalation information | Distinguishing error/success states |
| Changelog | What changed, and does it affect me? | Confirmed release/date/scope → user impact → required action → relevant guide | Only if a changed interface needs showing |

## Tutorial and how-to outline

- Promise a concrete result, scoped to the supported environment.
- Establish accounts, tools, working location, and prior work.
- Group steps into meaningful milestones. Show the action and expected result at the point of use.
- Keep required consequences visible; place optional alternatives where readers need them.
- Give a recovery route for likely failures.
- End with a useful verification and the most relevant next task.

## Explanation and reference outline

Begin with the reader's question, not a source-file inventory. Retain exact technical detail the audience came for. Define unfamiliar terms without repeating beginner instructions at every entry. Separate concepts that have different defaults, lifetimes, or security boundaries.

Do not add a setup wizard, example chat, or screenshots to an environment-variable reference unless they help its actual purpose. Tables, minimal commands, and cross-links often communicate more clearly.

## Troubleshooting outline

Use the language the reader sees in the error or symptom. State where to run each diagnostic and how to interpret its output. Distinguish observed cause from a hypothesis. Put any risk of data loss or interruption before the corrective command. Say what information is useful when asking for help, without requesting credentials.

## Before changing page boundaries

Check navigation and incoming links. Propose a split or rename when it materially helps the intended task, but respect the requested scope. For an audit-only request, record the proposal without moving pages. Existing anchors may be linked from outside the repository even when no local caller appears.
