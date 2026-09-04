# NanoClaw documentation style guide

Help readers act with confidence. Introduce technical detail when it helps their task.

This is the editorial standard for public NanoClaw documentation and the shared reference for human contributors and editing agents. Apply it to new pages and the portions of existing pages you change; do not turn a small correction into an unrequested rewrite. Repository source-verification and authorization rules still apply.

## Start with the reader

Before a substantial audit or edit, name the audience, their assumed knowledge, the page's purpose, and its observable outcome. Choose a [page pattern](page-patterns.md) that fits. Use the [review template](review-template.md) to record decisions when a rewrite needs an audit trail.

| Audience | What the page can assume | What it should explain |
| --- | --- | --- |
| New user | Familiarity with ordinary apps | Where to act, unfamiliar tools, choices, expected results, and recovery |
| Operator | A working installation | Conditions, consequences, safe recovery, and how to verify a change |
| Contributor | Relevant development experience | Exact interfaces, invariants, compatibility, and source evidence |

A page may serve more than one audience, but give it one primary purpose. An expert reference should remain precise and easy to scan. A beginner tutorial should not require readers to study the architecture first.

## Voice and tone

Write as a patient colleague who knows the product and respects the reader.

- Address the reader as **you**. Use active voice and familiar words.
- Lead with the goal, then the action and the explanation needed to perform it.
- Use sentence case headings that describe a task or answer a real question.
- Keep one instruction per sentence. A milestone can contain several short instructions when they belong together.
- Be honest about effort. Avoid “just,” “simply,” “obviously,” and unsupported speed promises. If time varies, say why; publish estimates only with evidence and conditions.
- When something fails, name the symptom and the next action. Avoid blame or reassurance that hides a real problem.
- Prefer concrete examples to promotional claims. Do not promise universal success or safety.

| Less helpful | More helpful | Why |
| --- | --- | --- |
| Clone and run | Download NanoClaw and start setup | Names the task before the mechanism |
| Choose your agent runtime | Choose the AI service your assistant will use | Explains the decision in everyday terms |
| The wizard wires your first agent | Setup connects your assistant to your messaging app | Explains the result; verify which assistant is connected |
| Simply paste your credential | Choose the sign-in option that matches your AI account | Does not assume knowledge of tokens or keys |
| It should work now | Send a message. You should see a reply beneath it. | Gives a check the reader can perform |

These are editorial examples, not verified instructions for every product version. Preserve exact interface labels when telling readers what to select.

## Terminology without loss of accuracy

Use one term for a concept within a page and its neighbors. Explain a technical term at first use when the intended reader may not know it. Then use it consistently.

| Term | Beginner introduction | Precision boundary |
| --- | --- | --- |
| Agent | Your AI assistant | Do not imply all channels or sessions use the same agent |
| Channel | A way to message an assistant, such as Telegram or Slack | Keep adapter, platform, chat, and routing distinctions in technical reference |
| Provider | The AI service or runtime an agent uses | Distinguish provider, model, account, and subscription where the choice matters |
| Sandbox | The separate workspace where an assistant runs | Explain actual access limits; do not imply complete security or confidentiality |
| Template | A prebuilt starting point for an assistant | Explain what is copied, preserved, or replaced when applying or updating it |
| Credential | The sign-in information that connects an account | Use the exact kind—subscription sign-in, API key, or token—when required |

Give every fenced code block an appropriate language tag. Explain placeholders before readers copy a command.

Use exact spellings in commands, paths, environment variables, output, and UI labels. Explain a label beside it instead of renaming it inside a quote or code block. A technical term is not a defect when the audience needs its exact meaning.

## Instructions that readers can follow

For a procedural step, give the reader:

1. **An action:** where to click or type, and which choice applies to their situation.
2. **A reason, when needed:** enough context to make the action understandable.
3. **An expected result:** an observable screen, reply, file, or state. Distinguish sample output from exact output.
4. **A recovery route, where useful:** what to do if the expected result does not appear.

Scale this to the task. Do not add four headings or a callout to every small instruction.

Before a command, establish the application, working folder, and prerequisites. Explain placeholders and whether to run commands separately. Account for a new terminal session when installing tools or relying on a particular folder. Never present a shell command as something to send in chat.

Put prerequisites, costs, permissions, and consequences before the action they affect. Keep the main path coherent: choose a recommendation appropriate to the audience, then repeat important exceptions at the point of choice. Do not silently change the requested operating system, provider, or installation method to match an example.

## Page structure and optional detail

Open with the outcome or question the page serves. Give readers a clear next action. Use headings and short paragraphs to make the page scannable; avoid both dense inventories and excessive fragments.

- Use steps for a sequence, tabs for mutually exclusive environments, and accordions for optional depth.
- Keep required actions, costs, destructive consequences, and essential caveats visible. Do not hide them in a collapsed section.
- Put implementation internals in the relevant explanation or reference unless they help the reader make the current decision.
- Preserve needed edge cases through links or optional sections. Do not remove them merely to shorten a page.
- Match titles to content. A manual CLI construction tutorial should not present itself as the universal first step.
- Keep existing useful URLs and anchors, or provide redirects and update callers when changes are authorized.

Use native Mintlify components before custom presentation. For current component syntax, consult the repository Mintlify skill and official documentation.

## Visuals that teach

Add a visual when it helps readers recognize a screen, make a choice, follow a transition, understand a relationship, or check success. There is no image quota.

| Reader's question | Useful visual |
| --- | --- |
| What do I select? | A real, focused screenshot with a caption naming the selection |
| Did it work? | A real success screen or clearly labeled sample result |
| Where do I go next? | A short captioned recording of the application transition |
| How do these parts relate? | A small diagram tied to the explanation |
| What could I ask? | A labeled example conversation, in selectable text where practical |

Use real captures for product UI. Do not pass off generated or reconstructed screens as real screenshots. Label illustrations and example conversations. Do not invent replies and describe them as an observed test.

For each new or reused visual, record provenance in an adjacent MDX comment or the review record: asset path, capture date if known, relevant version/commit if known, scenario, and what was verified. Say “unknown” for missing capture metadata. A source-review date is not a capture date. Recheck a visual when the depicted screen or behavior changes; a recent screenshot is not automatically accurate.

Remove visible secrets and unnecessary personal details before publication. Keep screenshots readable on a phone. Use captions to explain the action or result, and descriptive alt text to communicate the relevant content. Explain required information in text as well. Do not encode meaning only through color.

Videos need captions and a transcript or equivalent complete written instructions. Animation needs a learning purpose, playback control, and a static or reduced-motion alternative. Avoid autoplay distractions. Use the established diagram system when changing existing diagrams; keep labels, descriptions, and source claims in sync.

If a real capture is unavailable, complete the useful text and prepare a precise capture brief with an owner. Report the missing asset; do not claim a screenshot, installation test, or user test happened.

## Evidence and review

Verify changed behavior against current upstream implementation, including setup scripts and the relevant registry branch. Older prose and the style examples are not product authority. Preserve existing verification stamps for untouched claims; add a scoped stamp when only part of a page was checked.

Use the [review template](review-template.md) to record unresolved questions and dispositions. Run `mint validate` for content/config changes, and `mint broken-links` when links, anchors, or navigation change. Inspect affected layouts with `mint dev`; check narrow screens and interactive components for visual or structural changes. Review meaningful rewrites independently when available under the repository workflow.

Build and link checks can catch mechanical errors. They cannot prove a page is approachable. Periodically observe a reader from the intended audience performing the task without coaching. Record wrong turns, requests for help, and misunderstood terms. Distinguish editorial/source review, browser inspection, installation testing, and reader testing in the result.

## Adoption and maintenance

Use the [quickstart worked example](quickstart-example.md) to understand the decisions, not as a universal layout. The first conversation, terminal path, six milestones, Claude default, and screenshot count belong to that particular pilot.

Contributors use this guide directly. Agents can use the repository [docs-editor skill](../../.agents/skills/docs-editor/SKILL.md). Keep editorial policy here; skills, contributor instructions, and PR checklists should point here rather than maintain competing versions.

Record a deliberate exception in the review when a page's audience or purpose needs one. Incorporate demonstrated lessons from reviews and reader tests into this guide. Do not treat every one-off failure as a new universal rule.
