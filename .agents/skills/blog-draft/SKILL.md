---
name: blog-draft
description: Capture a new private Blog post draft with schema-ready frontmatter and authorship provenance. Use when the owner asks to draft, capture, outline, or start a Blog post. Do not use to refine or publish an existing draft.
---

# Blog draft

Read `AGENTS.md` and `editor.md` at the repository root before acting. Follow
the Editor doctrine, especially authorship, privacy, and language policy.

Create a new file at `drafts/<slug>.md` (kebab-case, without a date). Never
place a draft in `src/content/blog/`; drafts must remain invisible to the
build.

1. Take the working title and one-line idea from the invocation. Ask only when
   either is missing. If the owner provides raw material, preserve it under an
   `<!-- source material -->` comment.
2. Use frontmatter matching `src/content.config.ts`:

   ```yaml
   ---
   title: "..."
   description: "TODO"
   pubDate: "TODO-set-at-publish"
   tags: []
   ---
   ```

3. Ask who is drafting and record `authorship:: felix-draft`, `ai-draft`, or
   `mixed` inside a private HTML comment below the frontmatter. If the owner
   does not answer, use `felix-draft` and explicitly record that it was a
   default, not an owner choice. Never infer authorship from prose.
4. For `felix-draft`, create only an outline and preserve source material; the
   body remains the owner's. For `ai-draft` or `mixed`, the Editor may write
   the body but must keep a private source trace naming its own inference or
   wording and every uncorroborated claim. The trace must travel to
   `$blog-publish` and must never enter public frontmatter or prose.
5. Any language is acceptable during capture. The single-language rule is a
   publish gate.
6. Do not modify `src/` and do not run the site build. End by listing the open
   TODOs in the draft.
