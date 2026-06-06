# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Use `pnpm` (lockfile is `pnpm-lock.yaml`). Requires Node >= 22.12.0.

| Command        | Action                                      |
| -------------- | ------------------------------------------- |
| `pnpm dev`     | Dev server at `localhost:4321`              |
| `pnpm build`   | Production build to `./dist/`               |
| `pnpm preview` | Serve the built site locally                |
| `pnpm astro check` | Type-check `.astro` files and content schemas |

There is no test or lint setup. `astro check` is the closest thing to a validation step.

## Architecture

Astro 6 static blog. Tailwind CSS v4 is wired in through the Vite plugin (`@tailwindcss/vite` in `astro.config.mjs`), not an Astro integration — there is no `tailwind.config`; global styles live in `src/styles/global.css`.

**Content flow.** Posts are a content collection defined in `src/content.config.ts`: a `glob` loader pulls `**/*.{md,mdx}` from `src/content/blog/`. Frontmatter is validated by a Zod schema (`title`, `description`, `pubDate`, optional `updatedDate`, optional `heroImage` as an Astro asset). The post's `id` (its filename slug) is the URL.

- `src/pages/blog/index.astro` — lists posts, sorted by `pubDate` descending.
- `src/pages/blog/[...slug].astro` — `getStaticPaths` generates one route per collection entry and renders `<Content />` inside `src/layouts/BlogPost.astro`.
- `src/pages/rss.xml.js` — RSS feed built from the same collection.

**Important:** collection posts are always rendered through `BlogPost.astro` via the `[...slug]` route. A `layout:` key in a post's own frontmatter (some existing posts have one) is ignored, as are fields not in the schema (e.g. `tags`). To support such fields, add them to the schema in `src/content.config.ts` first or `astro check` / the build will fail.

**Routing.** `astro.config.mjs` redirects `/` → `/blog`, so the blog index is the home page. `site` is set to `https://canglang.netlify.app` (deploy target; used for canonical URLs, sitemap, and RSS).

**Shared bits.** `src/consts.ts` holds `SITE_TITLE` / `SITE_DESCRIPTION` (imported by pages and the RSS feed). `src/components/BaseHead.astro` centralizes `<head>` (SEO, Open Graph). Static assets that need processing go in `src/assets/`; pass-through files go in `public/`.
