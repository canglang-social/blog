---
name: blog-publish
description: Publish a refined private Blog draft into the repository content collection after editorial, provenance, disclosure, schema, and build gates pass. Use only when the owner asks to publish a specific refined draft. Never deploy the website or post externally.
---

# Blog publish

Read `AGENTS.md`, `editor.md`, and `src/content.config.ts` before acting. The
input must be a specific file under `drafts/`; ask which one when absent.
Refuse to publish a draft that has not completed `$blog-refine` or still mixes
languages. Holding a post is a valid outcome.

Publishing here means moving approved content into this repository's public
collection. It does not authorize deployment, website publication, social
posting, platform copy, or work in any other repository.

1. Give the Editor verdict: decide whether the post is worth a slot on the
   hiring-manager-visible surface. Stop on `hold`.
2. Finalize frontmatter. Set `pubDate` to today's `YYYY-MM-DD` only at this
   authorized publish step and validate every field against the live schema.
3. Before moving or deleting anything, assemble a paste-ready provenance block
   for the private `## Used` ledger on `[[Writing/Seeds]]`:
   - source seed(s) and trigger;
   - `authorship:: felix-draft | ai-draft | mixed`; if missing, ask and stop;
   - for `ai-draft` or `mixed`, the full source trace, explicitly naming the
     Editor's inference or wording and every uncorroborated claim;
   - the `<!-- source material -->` block or a pointer to material already
     stored elsewhere.

   Put the authorship property at the end of the Logseq block, indented on its
   own property line, never at block start and never bolded or backticked:

   ```text
   - **Authorship and disclosure.** ...
     authorship:: ai-draft
   ```

   This repository contains no vault integration and this skill must not infer
   a vault path, read another repository, or write outside Blog. Output the
   paste-ready block and stop before any move or deletion. Continue only after
   the owner explicitly confirms that the provenance has been saved durably.
4. Ask the owner whether AI authorship should be disclosed in the public post.
   This is a separate per-post decision; do not infer it from the private
   authorship record or any earlier post.
5. Move the approved file to
   `src/content/blog/en/YYYY-MM-DD-<slug>.md` for English or the matching
   `src/content/blog/zh/` path for Chinese. Matching locale filenames create
   the language switch. Strip private authorship, source material comments,
   source trace, and other private editorial notes from the public file. Use
   `../../../assets/...` for relative post assets.
6. Run `pnpm astro check` and `pnpm build`. If either fails, fix the repository
   or move the file back to `drafts/`; never leave a broken collection. Show
   the final URL and diff summary.
7. Output a one-line recommendation for the owner to consider a Brand Coach
   PRESENT session, naming the post and languages. Do not access another
   repository, initiate a session, select a platform, write platform copy,
   deploy, or post externally.
