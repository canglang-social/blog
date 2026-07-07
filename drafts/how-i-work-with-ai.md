---
title: "How I Work with AI"
description: "TODO — one sentence, write after the refine pass"
pubDate: "TODO-set-at-publish"
tags: ["ai", "workflow"]
---

<!-- Editor note: this prose was AI-DRAFTED at Felix's explicit request
(2026-07-07), overriding the never-ghostwrite rule for this one post.
The /refine pass should treat it accordingly: push Felix to rewrite
anything that doesn't sound like him, and verify every number against
ai-chief-of-staff (workflows.md, inventory.yaml) before publish. -->

Sometime in June I noticed an uncomfortable thing: I was using AI every
day, and almost none of it accumulated. Every session started from zero.
The resume advice I got on Monday contradicted the advice I got on
Thursday, because neither session knew the other existed. I had built
projects, notes, prompts, half-automations — and the sum of all that
activity was a pile, not a system.

The fix sounds bureaucratic, and honestly it is: I gave my AI workflows
an inventory. One YAML file, one row per workflow — who owns it, where
its entry points live, when it was last reviewed. The rule that makes it
work is blunt: **if it isn't inventoried, it doesn't exist.** A workflow
that never got a row can't be audited, so it silently rots. Today the
file holds eleven rows, and a small Python script checks the boring
facts — do the entry points still exist, is any row stale — while the
judgment calls stay human.

What the rows describe are loops, not tools. A project loop: decide what
to build, build it, review it, mine it for reusable parts, scaffold the
next one from those parts. A learning loop: anything interesting becomes
one captured line in my journal, gets triaged to a route, and every
route ends the same way — recall, flashcards, a log entry — because
retrieval is the studying, not the reading. A career loop turns reviewed
projects into case studies, distilled into a single facts file that
every resume draws from, so no two resumes can disagree about my own
history again. And underneath them all sits a Logseq vault that the
loops write into. The vault is a sink; the loops own their content.

The part I'd defend hardest is also the smallest: three markdown files
that act as roles. A Chief of Staff owns the inventory and the
keep-merge-automate-retire decisions. A Librarian owns the vault's
conventions and cleans up drift. An Editor — new this week — owns what I
publish here, including the rule that a page gets exactly one language.
None of these is code. Each is a doctrine file a session reads and then
acts as. The distinction I ended up with: commands are checklists, the
same steps every time; roles are where judgment concentrates. Most work
only needs a checklist. Where a real decision lives, I wrote down whose
decision it is.

Here is the counterintuitive lesson: the system got better when I
removed automation. I had a scheduled agent running my evening review
and another scouting job listings every morning. Both are gone — I
deleted the schedules and kept the workflows, because reflection and
scouting are judgment work, and a cron job on judgment work automates
away the point. Same story with a glossary pipeline I built for
interview prep: months later its staging file was empty with zero syncs
ever. I killed it, and took a rule from the corpse — a workflow doesn't
get to claim "running" because its files exist; it has to show usage
evidence, like a git history or journal entries. Half of what an audit
does is catch me lying to myself with plausible-looking infrastructure.

One rule governs everything above: output is the only thing that
matters, and only output I generated. The research is clear enough that
I treat it as settled — delegating the writing or the code produces
near-zero learning. So AI critiques, checks, drills me with questions,
and drafts throwaway scaffolding; the code I'm trying to learn, I type,
and the understanding has to survive an explain-back before it counts.

Full disclosure, because this post is the publishing loop's first real
run: its first draft was AI-written, at my request, against my own
Editor's doctrine — and then rewritten where it didn't sound like me.
That tension, wanting the leverage without letting it hollow out the
work, is the entire reason the system exists. The inventory doesn't
resolve the tension. It just makes sure I can see it.

Where it's still thin: I have no designed policy for where files live
across Drive, GitHub, and local disks (the row exists, marked
"wanted"), and this site itself is mid-conversion into a project-led
portfolio. Both are inventoried. Which, around here, is what existing
means.
