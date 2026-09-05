# Visual production plan

Apply the [style guide's visual rules](../style-guide.md#visuals-that-teach). This is a capture queue, not a claim that assets or recordings exist. The current source inventory finds no active video/iframe embeds. Existing visuals include diagrams, reused sign-in screens, and labeled conversation illustrations; diagram counts do not establish screenshot coverage.

| Brief | Reader question / target | Capture sequence | Deliverable and acceptance | Proposed owner / status |
| --- | --- | --- | --- | --- |
| V01 | Which setup choice do I select? Quickstart and template start | Fresh supported install: show Standard setup, general/template choice, selected template name, and created-assistant confirmation | Focused real screenshots, exact UI captions, readable at 390px; selected assistant can be traced into connection | Setup editor / capture pending |
| V02 | Where do I type this? Channel guide added after setup | Open Terminal in installation folder, open the supported coding assistant, invoke the verified install skill, then switch to messaging app | Short user-controlled captioned clip; complete written steps/static captures remain usable without playback | Channel editor / capture pending |
| V03 | Did the right assistant connect? Telegram pilot, then other apps | Create bot, supply token privately, pair chat, select existing assistant where prompted, receive first real reply | Focused screenshots of non-secret screens and reply; redact bot/account identifiers, tokens, QR/pair codes, notifications; never publish reusable secrets | Channel editor / capture pending |
| V04 | How do I manage a reminder? Scheduled tasks | Request a low-impact reminder, confirm timezone and destination, observe one delivery, pause or cancel and verify state | Real conversation capture or selectable transcript labeled with actual observation; no invented success. Clean up only the test task with recorded authorization | Task-guide editor / capture pending |
| V05 | What changed after I edited a preference? Customization | Use the already connected assistant, request a harmless style preference, inspect a subsequent response and persistence under a verified new session | Selectable example plus optional real capture; distinguish a suggested prompt from an observed persistent change | Customization editor / capture pending |
| V06 | How do I resume using it? Daily-use route | Per-platform return from sleep/login or service restart, check status, obtain reply | Static decision diagram first; OS-specific capture only after observed behavior is known | Operator editor / scenario verification pending |

## Asset record

Place public files under `images/walkthroughs/<topic>/` only when ready to use. Prefer descriptive stable names such as `template-choice.png`; keep the capture revision in metadata rather than requiring every page URL to change. Use the existing diagram system for diagrams. Do not create empty asset directories or placeholder media.

Record beside each embed or in its review:

- Asset path, source owner, capture date, product/registry revision, OS, provider, viewport, and scenario.
- The precise reader question it answers and what was actually observed.
- Redactions/crops and retained unedited-source location when appropriate; do not retain secrets unnecessarily.
- Caption, alt text, transcript/equivalent written steps, and playback/static alternatives.
- Reviewed page references and the UI/source changes that require recapture. Unknown metadata stays unknown.

Recheck existing sign-in assets before broader reuse; their capture date/version is unknown. Source verification does not date a screenshot. For new recordings use controlled playback, no required autoplay, captions, and static alternatives. Use a repository-approved hosting location if a video exceeds reasonable repository size; choose the destination before publishing.

## Maintenance

The page editor owns the asset check in each related PR. If a changed screen invalidates a visual, replace it, remove it with a complete text alternative, or explicitly track the gap. Do not preserve a misleading screenshot just to meet a visual quota. Validate both the page layout and whether the asset teaches the intended action.
