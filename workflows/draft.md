# Blog draft workflow

This is the provider-neutral canonical workflow for capturing a private Blog
draft. Repository-relative paths below resolve from the repository root.

Read `AGENTS.md` and `editor.md` before acting. Follow the Editor doctrine,
especially authorship, privacy, and language policy.

1. Take the working title and one-line idea from the invocation. Ask only when
   either is missing. Ask who is drafting and require one explicit choice:
   `felix-draft`, `ai-draft`, or `mixed`. If authorship is not supplied, return
   `DECISION_REQUIRED` and stop without creating or modifying a draft. Never
   infer or default authorship.
2. Create `drafts/<slug>.md` (kebab-case, without a date). Never place a draft
   in `src/content/blog/`; drafts must remain invisible to the build. If the
   owner provides raw material, preserve it under an
   `<!-- source material -->` comment.
3. Use frontmatter matching `src/content.config.ts`:

   ```yaml
   ---
   title: "..."
   description: "TODO"
   pubDate: "TODO-set-at-publish"
   tags: []
   ---
   ```

4. Record the explicit authorship choice inside a private HTML comment below
   the frontmatter.
5. For `felix-draft`, create only an outline and preserve source material; the
   body remains the owner's. For `ai-draft` or `mixed`, the Editor may write
   the body but must keep a private source trace naming its own inference or
   wording and every uncorroborated claim. The trace must travel to the
   canonical publish workflow and must never enter public frontmatter or prose.
6. Any language is acceptable during capture. The single-language rule is a
   publish gate.
7. Do not modify `src/` and do not run the site build. End by listing the open
   TODOs in the draft.
