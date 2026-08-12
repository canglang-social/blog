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

4. **Ask who is drafting, and record it.** Below the frontmatter, inside the
   HTML comment block, write `authorship:: felix-draft | ai-draft | mixed`
   (editor.md §Authorship, v0.2 — the never-ghostwrite ban was retired
   2026-08-12). Never assume: a piece the Editor could write is still
   Felix's to claim, and the learning cost of delegating is his to weigh.
   If he does not say, default to `felix-draft` and note that it was a
   default rather than a choice.
   - `felix-draft` → outline and source material only; the body is his.
   - `ai-draft` / `mixed` → the Editor may write the body, and must keep a
     running **source trace**: which sentences are its own inference or
     wording, and which claims it could not corroborate. That list travels
     to `/publish`; it is not for the reader.
   - The mark is PRIVATE — never in published frontmatter, never in the
     post body. `/publish` moves it to the vault before deleting the draft.

   Any language is fine at the draft stage — the one-language-per-page rule
   applies at publish, not capture.
5. Do not touch `src/`; do not run the build. End by listing the open TODOs
   in the draft.
