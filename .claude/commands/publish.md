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
3. **SAVE THE PROVENANCE BEFORE ANYTHING IS DELETED.** `drafts/` is
   gitignored with no history, so everything in the draft that is not the
   post dies at step 4 — this already happened once (2026-08-10), and the
   only surviving record had to be reconstructed afterwards. Assemble one
   block for the `## Used` ledger on `[[Writing/Seeds]]` in the vault:
   - the seed(s) it came from and which trigger fired;
   - **`authorship::`** — `felix-draft` / `ai-draft` / `mixed`
     (editor.md §Authorship). If the field is missing from the draft, ASK
     before publishing; do not infer it from the prose;
   - for `ai-draft` / `mixed`, the **source trace**: which sentences are
     the Editor's own wording or inference, and every claim that could not
     be corroborated, named. Say these out loud to Felix here — an
     uncorroborated claim is cheaper to cut now than to correct in public;
   - the `<!-- source material -->` block, or a pointer if the material is
     already synced in the vault or another repo (do not copy hundreds of
     lines of already-synced text back onto the page).

   **Ask Felix whether to disclose AI authorship in the published post.**
   It is a separate call from recording it, and it is his (2026-08-10:
   *"no, not say it"* — asked per post, never assumed either way).

   Vault-write safety: `pgrep -x Logseq` first — running → output the block
   as paste-ready text and stop for him to paste; closed → write it.
4. **Move** the file to `src/content/blog/en/YYYY-MM-DD-<slug>.md` (English
   is the default locale; a Chinese version, if one exists, goes to
   `src/content/blog/zh/` under the SAME filename so the language switch
   links them). Relative asset paths from a post are `../../../assets/...`.
   Strip the private `authorship::` mark and the source trace — they never
   go public. Delete the draft from `drafts/`.
5. **Verify:** `pnpm astro check` then `pnpm build`. Both must pass; on
   failure, fix or move the file back to `drafts/` and report — never leave
   a broken collection.
6. Show the final URL path (`/blog/<id>/`) and a diff summary. Committing
   and pushing stay Felix's call unless he already said to ship.
7. **Hand the shipped post to the Brand Coach.** A published post is an
   INPUT to distribution, not the end of the line:
   `workflows.md` declares `publishing-loop → personal-brand: published
   posts → distribution`, and `brand-coach.md` job 2 (PRESENT) owns how a
   post becomes platform-native. Until 2026-08-12 that edge existed only on
   the diagram — the 2026-08-10 en+zh post never reached `brand-records.md`
   at all, in a month whose `fte-channel-gate` sat at 2/5 with a deadline.
   So, in one line: name the post, its languages, and the live gates it
   could count toward, and offer a PRESENT session
   (`ai-chief-of-staff/brand-coach.md`, records in `brand-records.md`).
   **Recommend, never post** — the Brand Coach may well answer "no
   distribution for this one", and that is a valid PRESENT output that
   should be recorded rather than skipped. The Editor does not choose the
   platform, write the platform copy, or open the session uninvited.
