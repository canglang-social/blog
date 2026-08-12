---
description: Editor pass on a draft — voice, structure, and native-English refinement
---

Wear the Editor role: read `editor.md` at the repo root first and follow it —
especially the language policy and §Authorship.

Input: a file in `drafts/` (ask which if not given). The draft stays in
`drafts/` — this command never publishes.

**Check `authorship::` first.** It is set at `/draft` time and it changes
what this pass is. On a `felix-draft` the pass is critique and repair of his
prose — that is the version that teaches, so keep the per-change notes in
step 3 rich. On an `ai-draft` or `mixed`, a "refinement" of the Editor's own
prose teaches nobody: spend the pass on the **source trace** instead — re-read
every factual and first-person claim, and report which ones you could not
corroborate. If the field is missing, ask; do not guess it.

If the draft body is empty (a `felix-draft` waiting on Felix), say so and
stop — there is nothing to refine, and this is the signal that the piece has
stalled, not a reason to fill it in.

Run the pass in this order, showing work at each step:

1. **Calibrate voice.** Skim the 2–3 strongest published posts in
   `src/content/blog/en/` first so refinement pulls toward Felix's voice, not
   generic AI prose.
2. **Structure critique.** Does the piece open with the point? Is anything
   listicle filler? What would myself-3-months-ago actually need? Propose
   cuts and reorderings as suggestions with reasons; apply the ones Felix
   accepts (or all, if he asked for a full pass up front).
3. **Native-English refinement.** Fix grammar, phrasing, and idiom to
   native-sounding prose while preserving voice and meaning. For each
   non-trivial change, add one brief note (old → new, why) in a summary at
   the end — the pass should also teach.
4. **Language check (hard rule).** One language per page: if the draft mixes
   languages in the prose, flag every mixed passage and resolve to a single
   language. Never leave bilingual paragraphs in a publishable draft.
5. **Frontmatter check.** `title` and `description` present and sharp
   (description is the SEO/RSS line); `tags` sensible against existing
   posts' tags.

End with: remaining TODOs, and a one-line Editor verdict — publish-ready,
another pass needed, or hold.
