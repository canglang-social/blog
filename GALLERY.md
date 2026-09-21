# Maintaining the work exhibition

The homepage and project index use the existing `projects` collection. Each Markdown file's `gallery` field owns its bilingual cover text, current status, milestones and related article slugs. Existing case-study Markdown bodies remain at their original English URLs. Chinese summaries link to the full English case study.

## Update a work

1. Edit the corresponding file in `src/content/projects/`. Public content only: never add private logs, paths, task identifiers or source notes.
2. Set the owner-confirmed status and `statusCheckedAt`. Paused work needs `pauseReason` in both languages. Unknown status is an explicit option.
3. Give each meaningful milestone a stable ID. Update that milestone rather than appending a duplicate. Preserve the actual date, or use null if undated.
4. Reference existing article slugs in `relatedSlugs`. Builds reject missing translations. Add new artwork in `src/assets/gallery/` and register its mount color, alt text and origin in `src/lib/gallery.ts`; Astro produces responsive WebP variants.
5. Run `pnpm test`, `pnpm astro check`, `pnpm build`, and `git diff --check`. Review `/zh/`, `/zh/projects/`, and the changed detail page. Publication/deployment remains a separate release action.

## Usage snapshots

The private collector owns counting and source attribution. Import its sanitized output with:

```sh
node scripts/import-work-usage.mjs /path/to/sanitized-public-usage.json
```

The importer writes only approved aggregate fields into the same project record and is idempotent for repeated snapshots. Unknown totals are null, never fabricated zero. Partial records are labeled explicitly; only complete coverage may show zero. Details show the fixed 30-day window, observation cutoff and cache breakdown. The site is static: the window is measured at the displayed snapshot time, not refreshed on every page visit. Rebuild after importing a new snapshot.

## Release scope

English and Chinese galleries each support Chinese landscape and Japanese yokai art themes. Language follows the route; art choice is independently saved and can be linked with `?art=landscape` or `?art=yokai`. The yokai gallery gives each of the five cards a distinct character portrait. Landscape cards retain their original paintings/screenshots; real project screenshots remain in both versions of the detail pages. Both controls preserve the work, filters and section context. New-tab language links include current query/hash, and browser Back restores the selected art preference. The gallery's permanent destinations are `/` and `/zh/`; project links remain `/projects/<id>/` with translated summaries at `/zh/projects/<id>/`.

Retain prior deployment/commit as rollback reference. A successful local build does not establish public deployment or social-profile changes.

## Shared site presentation

Header, Footer and SiteBehavior serve both reading pages and the work gallery. BaseHead applies the same saved art choice before paint. Article related-work links are derived from gallery.relatedSlugs; About omits article-only dates and back links.

The owner-generated public Atlas files remain the content source. After Astro builds, scripts/integrate-atlas-shell.mjs composes their dist copies with the shared rendered navigation, footer and theme behavior. Use pnpm build and pnpm preview when reviewing Atlas integration; do not manually edit dist or copy the shared navigation into the source Atlas HTML.

## Public tags

Work `topics` use the same lowercase identifiers as blog tags and existing Logseq subject tags: for example `ai`, `english`, `workflow`, `rag`, `science`, and `machine-learning`. Display the identifiers unchanged in both locales; do not translate them into a second vocabulary. `learning` follows the blog topic; Logseq `learn` is a capture/workflow type, not an automatic rename target. Private routing markers (`inbox`, `card`, etc.) are not public topics. Logseq itself is not modified or synchronized by website builds.

Card/detail tags link to `/projects/?tag=<id>` and blog tags to `/blog/?tag=<id>`, with locale and art preference retained. Gallery filters accept legacy `topic` URLs; new links use `tag`. Keep tag links outside whole-card links so clicks and keyboard navigation reach the filter instead of the detail page.
