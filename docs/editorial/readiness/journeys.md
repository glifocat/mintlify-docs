# Reader journeys

These are proposed task paths, grounded in existing page links at `62c5a5a`. They are not observed user behavior or new navigation. The goal is continuity without requiring a reader to learn the implementation before using it.

| Reader's goal | Existing path | Handoff problem | Completion signal | Backlog |
| --- | --- | --- | --- | --- |
| Decide whether NanoClaw fits | Introduction → quickstart, or template getting started | Entry pages improved; real-reader comprehension remains untested | Reader explains computer/account requirements and chooses a path | R01 |
| Reach a first conversation | Quickstart → Terminal setup → first reply | Browser/source checks are not a fresh-machine installation | Reader gets a reply without coaching; document environment and wrong turns | R01 |
| Start with a prebuilt assistant | Template getting started → using/updating templates | Creation, connection, and later restamping are distinct; the deeper pages need matching framing | Reader identifies the intended assistant, connects it, and leaves routines paused until reviewed | R02, R06 |
| Connect a messaging app | Quickstart/template guide → channels overview → app guide | Overview leads with architecture; later-install entry assumes coding-assistant knowledge | Reader chooses an eligible app and gets a reply from the existing assistant | R03, R04 |
| Make the assistant useful | Quickstart/template guide → customize an agent | Destination assumes Scout and a manual CLI tutorial | Reader changes a preference in their existing conversation and verifies it | R05 |
| Set up recurring work | Introduction → scheduled tasks | Database and scheduler detail precedes the everyday reminder lifecycle | Reader confirms time/destination, observes delivery, and pauses or cancels it | R07 |
| Return tomorrow / recover | Entry pages → troubleshooting; installation contains service details | No clear beginner route for closing Terminal, sleep, login, stopping, and restarting | Reader finds the right platform procedure and restores a reply | R08, R09 |
| Operate or extend safely | Configuration / credentials / upgrading / hardening → reference | Existing depth is useful; do not flatten it into beginner tutorials | Operator finds exact constraints, consequences, and verification | R10 |
| Contribute a template or adapter | Template building/submitting or contributing → format/interface reference | Different audience; not a first-use journey | Contributor can validate the artifact and identify the correct upstream repo | R11 |

## Page boundaries

Keep the installation page as the technical companion; its opening already points first-time users to quickstart. Rework its signposting before considering a split. Keep the manual agent-construction tutorial, but make its title match that purpose. A daily-use section can initially link the existing service procedures; add a separate page only if a reviewed outline establishes a distinct task.

The channel chooser should help with accounts, permissions, platform constraints, and the setup route. It should not rank channels by popularity without evidence. Preserve advanced adapter and webhook information at existing anchors or update callers deliberately.

## Reader session brief

Recruit through an approved channel when ready; this plan does not contact anyone. Ask a person with ordinary app experience to choose between a general and template assistant, explain what accounts are needed, follow the appropriate path, connect an app, change a preference, and find recovery help. Use a clean supported environment with consent for any recording. Do not coach silently: record each intervention, wrong turn, unclear term, and failed checkpoint. Report the number of readers and their environments; do not generalize one session into a usability score.
