---
description: Publish a refined draft — schema check, astro check, build, move into the collection
---

Wear the Editor role: read `editor.md` at the repo root first and follow it.

Input: a file in `drafts/` (ask which if not given). Refuse politely if the
draft has never had a `/refine` pass or still violates the
one-language-per-page rule — publishing enforces doctrine, it does not
bypass it.

1. **Editor verdict.** Is this post worth a slot on a hiring-manager-visible
   surface? If it is filler, say so and stop — holding is a valid outcome.
2. **Frontmatter finalize.** Set `pubDate` to today (YYYY-MM-DD). Validate
   every field against the Zod schema in `src/content.config.ts` — schema
   drift fails the build, so check the schema file itself, not memory.
3. **Move** the file to `src/content/blog/YYYY-MM-DD-<slug>.md` (matching
   the existing filename convention) and delete it from `drafts/`.
4. **Verify:** `pnpm astro check` then `pnpm build`. Both must pass; on
   failure, fix or move the file back to `drafts/` and report — never leave
   a broken collection.
5. Show the final URL path (`/blog/<id>/`) and a diff summary. Committing
   and pushing stay Felix's call unless he already said to ship.
