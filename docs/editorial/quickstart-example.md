# Worked example: the quickstart pilot

The [quickstart](../../quickstart.mdx) pilot illustrates the [style guide](style-guide.md). The reviewed implementation is commit `65307bce250812a5baa5c6aaa182f8d2fde7fc46`; it is a worked example, not a claim that the pilot has been merged or tested with nontechnical readers.

## Reader and outcome

Audience: someone familiar with ordinary apps who may not have used a terminal. Outcome: install NanoClaw, receive a first reply, finish setup, and send another message later. Pattern: tutorial. The route uses a terminal conversation first, with messaging-app setup optional.

| Before | After | Decision |
| --- | --- | --- |
| A “one-command” promise followed by commands and many choices | Explain Terminal, check Git, establish the folder, then run commands separately | Show prerequisites and effort honestly |
| One wizard step listing twelve stages | Six milestones with expected results | Make progress observable; six is not a rule for other pages |
| Several account and token options mixed together | A Claude subscription path, with Codex/API alternatives repeated at the affected choices | Keep the path coherent without removing alternatives |
| Download sign-in and AI sign-in explained among infrastructure details | Explain the two different accounts at the point of use | Prevent readers from confusing a download account with their AI account |
| One large screenshot of branding/build output | Two existing sign-in captures plus a labeled example conversation | Show a useful transition and result; do not fabricate UI evidence |
| Terminal chat after a skipped channel treated as universally ready | Explicitly choose the source-verified pause-and-chat option | A prose simplification must preserve the behavior needed for success |
| Follow-up command assumes the original shell sees new tools | Add new-Terminal recovery and the installation folder | Cover a real environment boundary |
| Technical administration as the immediate next step | Messaging and personalization as next actions | Match the beginner's next goal |

## Visual provenance

| Asset | Capture date / version | Review |
| --- | --- | --- |
| `images/echo/hardened-runtime/signin-02-sign-in.png` | Unknown; reused existing repository capture | Visually inspected for sign-in options, account-free content, and caption alignment |
| `images/echo/hardened-runtime/signin-04-success.png` | Unknown; reused existing repository capture | Visually inspected for completion message and return-to-terminal caption |
| Conversation in `quickstart.mdx` | Authored illustration in pilot commit | Labeled example; not a screenshot or an observed transcript |

The reused images were not recaptured during the pilot. Source correctness was checked against upstream `b76fcb3db0236b36a4d50bed02e89eff472d0e67`. That revision does not establish when the browser images were captured.

## Review and limits

Mintlify build and link validation passed. Chromium checks at 1440 × 1000 and 390 × 844 found loaded images, functioning tabs/accordions, and no horizontal overflow. Independent source/editorial review found two issues—fresh-shell recovery and Codex reminders—which were resolved before the commit.

No fresh-machine installation, real-account sign-in test, video capture, or nontechnical-reader test was performed. Approval of the page's design is not evidence that a new reader can complete installation unaided.

## What to test next

Ask a willing reader to use the guide to install NanoClaw and request help planning a weekend. Observe where they hesitate, switch to the wrong app, confuse the two sign-ins, or ask for help. Check that they can send another message from a new Terminal window. Separate download waiting time from time spent understanding instructions.

The docs maintainer owns arranging this test and obtaining permission to contact participants or record sessions. Use the results to adjust the guide before extending the same decisions to every onboarding page.

For checks of the workflow on orientation, template tutorial, and expert reference pages, see [Workflow checks](workflow-checks.md).
