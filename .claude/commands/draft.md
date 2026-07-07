---
description: Capture a new post draft into drafts/ with schema-ready frontmatter
---

Wear the Editor role: read `editor.md` at the repo root first and follow it.

Create a new draft in `drafts/` (repo root — NEVER in `src/content/blog/`;
drafts must stay invisible to the build):

1. Ask for (or take from the invocation) the working title and the one-line
   idea. If Felix has raw material (a Logseq note, a case study, an outline),
   pull it in as-is under an `<!-- source material -->` comment.
2. Filename: `drafts/<slug>.md` (kebab-case, no date — the date is set at
   publish time).
3. Frontmatter must match `src/content.config.ts` exactly:

   ```yaml
   ---
   title: "..."
   description: "..."        # one sentence, written last is fine — leave TODO
   pubDate: "TODO-set-at-publish"
   tags: []
   ---
   ```

4. Below the frontmatter, an outline is welcome; post PROSE is Felix's to
   write (editor.md: the Editor never ghostwrites). Any language is fine at
   the draft stage — the one-language-per-page rule applies at publish, not
   capture.
5. Do not touch `src/`; do not run the build. End by listing the open TODOs
   in the draft.
