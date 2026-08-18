---
name: blog-refine
description: Refine an existing private Blog draft for structure, voice, native English, source trace, and single-language compliance without publishing it. Use when the owner asks for an Editor pass or refinement. Do not use to create or publish a post.
---

# Blog refine

Read `AGENTS.md` and `editor.md` at the repository root before acting. The input
must be a specific file under `drafts/`; ask which one when it is not supplied.
The draft stays in `drafts/`, and this skill never publishes.

Check the private `authorship::` field first. If it is missing, ask the owner;
never guess.

- For `felix-draft`, critique and repair the owner's prose and keep rich notes
  for non-trivial changes so the pass teaches.
- For `ai-draft` or `mixed`, prioritize the source trace: re-check every factual
  and first-person claim and name anything that cannot be corroborated.
- If a `felix-draft` body is empty, stop and report that there is nothing to
  refine. Do not fill it in.

Run the pass in this order:

1. Calibrate voice against two or three strong published English posts. Read
   only the minimum published content needed for this authorized editorial
   task; tests must use synthetic fixtures instead.
2. Critique structure: opening, filler, usefulness, cuts, and ordering. Explain
   suggested changes and apply them only when the owner requested a full pass
   or accepts them.
3. Refine English grammar, phrasing, and idiom without changing voice or
   meaning. Summarize every non-trivial change as `old -> new` with a brief
   reason.
4. Enforce one language per published page. Identify and resolve every mixed
   prose passage before declaring the draft publishable.
5. Check `title`, `description`, and `tags` against `src/content.config.ts` and
   the existing tag vocabulary.

End with remaining TODOs and one Editor verdict: `publish-ready`,
`another pass needed`, or `hold`.
