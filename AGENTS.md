# Blog repository guidance

This file is the provider-neutral entry point for agents working in this
repository. `editor.md` is the canonical doctrine for editorial judgment,
privacy, authorship, language, and owner boundaries. Read it before drafting,
refining, or publishing.

## Repository commands

Use `pnpm` with Node.js 22.12.0 or newer.

- `pnpm install --frozen-lockfile` installs the locked dependencies.
- `pnpm dev` starts the local development server on port 4321.
- `pnpm test` runs the focused editorial-adapter contract tests.
- `pnpm astro check` validates Astro files and content schemas.
- `pnpm build` builds the static site into `dist/`.
- `pnpm preview` serves the built site locally.

There is no separate lint or format command. Run `pnpm test`,
`pnpm astro check`, `pnpm build`, and `git diff --check` for repository
changes.

## Architecture

This is an Astro 6 static blog using Tailwind CSS 4 through the Vite plugin.
Posts are loaded from `src/content/blog/` using the schema in
`src/content.config.ts`.

English posts live in `src/content/blog/en/` and publish at `/blog/<slug>/`.
Chinese posts live in `src/content/blog/zh/` and publish at
`/zh/blog/<slug>/`. Matching locale filenames create language-switch pairs.
A published page contains one language only. Collection posts render through
the locale `[...slug].astro` routes and `src/layouts/BlogPost.astro`; a
post-level `layout` field is ignored. Processed assets belong in `src/assets/`
and pass-through assets in `public/`.

## Editorial workflows

Codex discovers the repository skills below from `.agents/skills/`. Invoke
them directly in a fresh Codex task:

- `$blog-draft` (`.agents/skills/blog-draft/SKILL.md`) loads the canonical
  `workflows/draft.md` contract for a schema-ready private draft.
- `$blog-refine` (`.agents/skills/blog-refine/SKILL.md`) loads the canonical
  `workflows/refine.md` contract for the Editor pass without publishing.
- `$blog-publish` (`.agents/skills/blog-publish/SKILL.md`) loads the canonical
  `workflows/publish.md` contract for moving an approved draft into the public
  collection after provenance, disclosure, schema, and build gates pass.

Codex skills and Claude slash commands in `.claude/commands/` are thin adapters
to the same provider-neutral workflows. Do not maintain a second workflow
implementation in either adapter.

## Safety and ownership boundaries

- Work only in this Blog repository unless the owner separately authorizes a
  different repository or private store.
- Do not expose unpublished drafts, private authorship markers, source traces,
  or editorial notes. Inspect content bodies only when the requested editorial
  workflow requires it; use synthetic fixtures for tests.
- `drafts/` is private, gitignored, and outside the Astro content collection.
- Never infer authorship, disclosure approval, factual claims, dates, vault
  paths, or external handoff destinations.
- Publishing into this repository is not website deployment or external
  distribution. Do not deploy, post, or initiate a Brand Coach session.
- If required provenance cannot be durably saved without leaving this
  repository, fail closed before moving or deleting the draft: output a
  paste-ready record and wait for the owner to confirm that it is saved.
- No repository-specific subagent definitions, hooks, MCP servers, loaders,
  installers, or custom runtime scripts currently exist. Do not claim or
  invent parity for them.
