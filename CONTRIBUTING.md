# Contributing to NanoClaw docs

This repository powers the [NanoClaw docs portal](https://docs.nanoclaw.dev), built with Mintlify.

## Writing guidelines

The [documentation style guide](docs/editorial/style-guide.md) is the editorial standard for every public page. Start with the reader's goal and choose the appropriate [page pattern](docs/editorial/page-patterns.md). The [quickstart worked example](docs/editorial/quickstart-example.md) explains the decisions behind the beginner pilot; it is not a required layout for every page.

For a substantial rewrite, use the [page review record](docs/editorial/review-template.md) to capture findings, source evidence, visual needs, and verification. Small corrections do not need a full audit. Apply the standard to what you change rather than rewriting unrelated pages.

Agents can use the repository [docs-editor skill](.agents/skills/docs-editor/SKILL.md). For example, ask: “Use the docs-editor skill to audit `templates/getting-started.mdx` for a new user. Return findings and a visual plan without editing.” For implementation, explicitly request a rewrite and specify the audience or constraints that matter.

## Quick edits

1. Open the page's source file on GitHub.
2. Select the pencil icon to edit it.
3. Make the correction and describe its purpose in the pull request.

If the change describes product behavior, verify it against the upstream NanoClaw implementation. Existing docs can be stale. Keep exact commands and interface labels; update only the verification stamps for claims you actually checked. See [source and drift guidance](CLAUDE.md#nanoclaw-architecture-context).

## Local development

1. Fork and clone this repository.
2. Install the Mintlify CLI with `npm i -g mint`.
3. Create a task branch or worktree, following your applicable repository workflow.
4. Run `mint dev` from the directory containing `docs.json` and open `http://localhost:3000`.
5. Edit the requested pages and run the checks below before submitting a PR.

## Validation and review

- Run `mint validate` for content or configuration changes.
- Run `mint broken-links` when changing links, anchors, navigation, or redirects.
- Inspect affected pages with `mint dev` for visual or structural changes. Check a narrow screen, image readability, tabs, accordions, and other affected interactions.
- Record the source revision for changed behavior, the scope of testing, and unresolved gaps. Use the [style guide's evidence rules](docs/editorial/style-guide.md#evidence-and-review).
- Include preview screenshots for layout or component changes. Label illustrative material and preserve real-capture provenance.

Build checks do not establish that a beginner can follow a guide. Use independent review and intended-reader testing where appropriate, and state whether installation or reader testing was actually performed.

## Project structure

| Location | Purpose |
| --- | --- |
| Root `.mdx` pages | Introduction, quickstart, installation, and migration |
| `channels/`, `operate/`, `guides/`, `templates/`, `extend/`, `concepts/` | Public topic pages |
| `reference/` | Technical reference |
| `changelog/` | Product releases and documentation updates |
| `images/` | Public visual assets |
| `docs.json` | Site configuration, navigation, and redirects |
| `docs/editorial/` | Contributor style guide, page patterns, review records, and examples |
| `.agents/skills/` | Repository editing skills |

The `docs/` directory is excluded from the portal by `.mintignore`. Contributor instructions and review records belong outside public navigation. Do not add editorial files to `docs.json`.

## Adding a public page

1. Create a kebab-case `.mdx` file in the appropriate topic directory.
2. Include frontmatter with at least `title` and `description`; follow the repository's new-page tag convention.
3. Add its extensionless path to the correct `docs.json` navigation group.
4. Use root-relative, extensionless links for other public pages. Use repository-relative Markdown links in contributor documents.
5. Run the applicable validation and review above.

## Product contributions and help

For product code, use the [NanoClaw source repository](https://github.com/nanocoai/nanoclaw). For documentation questions, use [Discord](https://discord.gg/VDdww8qS42).
