# NanoClaw v1 Documentation (archived)

This branch is a frozen snapshot of the NanoClaw documentation for **v1.x**. It is kept available as a reference for forks still running v1 while they migrate.

**No new content is added to this branch.** If you find an issue here, it will not be fixed.

## Looking for current documentation?

NanoClaw **v2.0.0** shipped on 2026-04-22 as a ground-up architectural rewrite. For the current documentation, including new v2 concepts (two-database session model, entity model, Bun-based agent runner, OneCLI-only credentials), go to:

- **https://docs.nanoclaw.dev**

## Migrating from v1 to v2?

v2 is not backward compatible with v1. To migrate an existing v1 fork, use the official migration skill from upstream NanoClaw:

- `/migrate-nanoclaw` — clean-base replay of your customizations on top of v2
- `/update-nanoclaw` — selective cherry-pick

See the current docs for the migration guide and the v2 release notes.

## What's in this branch

- `introduction.mdx`, `quickstart.mdx`, `installation.mdx` — v1 getting started
- `concepts/` — v1 architecture, containers, groups, security, tasks
- `features/` — v1 messaging, scheduled tasks, customization
- `integrations/` — v1 channel integrations (WhatsApp, Telegram, Discord, Slack, Gmail) and skills system
- `advanced/` — v1 container runtime, IPC system, security model
- `api/` — v1 configuration, message routing, task scheduling, group management
- `changelog/` — entries up to and including v1.2.53

## Source of truth

NanoClaw upstream: **https://github.com/qwibitai/nanoclaw**

The exact commit this archive was taken from is also preserved as the `v1-docs-final` tag in this repository.
