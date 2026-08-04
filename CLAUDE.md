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

**Content flow.** Posts are a content collection defined in `src/content.config.ts`: a `glob` loader pulls `**/*.{md,mdx}` from `src/content/blog/`. Frontmatter is validated by a Zod schema (`title`, `description`, `pubDate`, optional `updatedDate`, optional `heroImage` as an Astro asset, `tags` defaulting to `[]`).

**i18n.** The site is bilingual behind a language switch (never mixed on one page). Posts live in per-locale folders — `src/content/blog/en/` and `src/content/blog/zh/` — so a post's collection `id` is `en/<slug>` or `zh/<slug>`. The locale folder is stripped from URLs: English posts publish at `/blog/<slug>/`, Chinese at `/zh/blog/<slug>/`. A Chinese version is optional; when both exist under the same slug, the post pages cross-link via the header language switch and `hreflang` alternates. Locale helpers (`localeFromId`, `slugFromId`, `localeUrl`) and the UI-string dictionary live in `src/i18n/ui.ts`; a post file with no locale folder is treated as English. Note: relative asset paths inside posts are one level deeper than before (`../../../assets/...`).

- `src/pages/blog/index.astro` + `src/pages/zh/blog/index.astro` — thin wrappers around `src/components/BlogIndexPage.astro`, which lists one locale's posts sorted by `pubDate` descending.
- `src/pages/blog/[...slug].astro` + `src/pages/zh/blog/[...slug].astro` — `getStaticPaths` generates one route per post in that locale and renders `<Content />` inside `src/layouts/BlogPost.astro`, passing `lang` and (when the twin exists) `translationUrl`.
- `src/pages/rss.xml.js` (English) and `src/pages/zh/rss.xml.js` (Chinese) — RSS feeds built from the same collection.

**Important:** collection posts are always rendered through `BlogPost.astro` via the `[...slug]` routes. A `layout:` key in a post's own frontmatter (some existing posts have one) is ignored, as are fields not in the schema. To support a new field, add it to the schema in `src/content.config.ts` first or `astro check` / the build will fail.

**Routing.** `astro.config.mjs` redirects `/` → `/blog`, so the blog index is the home page, and declares `i18n` locales `en` (default, unprefixed) and `zh`. `site` is set to `https://felixhan.dev` (custom apex domain, Cloudflare DNS → Netlify; used for canonical URLs, sitemap, and RSS — `canglang.netlify.app` remains the underlying Netlify deploy target).

**Shared bits.** `src/consts.ts` holds `SITE_TITLE` / `SITE_DESCRIPTION` (imported by pages and the RSS feed). `src/components/BaseHead.astro` centralizes `<head>` (SEO, Open Graph). Static assets that need processing go in `src/assets/`; pass-through files go in `public/`.

## Editorial workflow

Public writing is owned by the **Editor** role — read `editor.md` at the repo root before drafting, refining, or publishing anything. Drafts live in `drafts/` (repo root, outside the content glob, so the build never sees them); the pipeline is `/draft` → `/refine` → `/publish` (`.claude/commands/`). Hard rule from `editor.md`: one language per published page, and every post gets a native-English refinement pass. The loop is inventoried as `publishing-loop` in ai-chief-of-staff.
