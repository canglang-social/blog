---
featured: true
title: "How I Work with AI"
description: "I was using AI every day and none of it accumulated. The fix was three layers — and an inventory that catches me lying to myself."
pubDate: "2026-07-07"
heroImage: "../../../assets/how-i-work-with-ai/hero.svg"
ogImage: "../../../assets/how-i-work-with-ai/hero-og.png"
tags: ["ai", "workflow", "reflection"]
---

Sometime in June I noticed an uncomfortable thing: I was using AI every
day, and almost none of it accumulated. Every session started from zero.
The resume advice I got on Monday contradicted the advice I got on
Thursday, because neither session knew the other existed. I was learning
to code, hunting a job, keeping notes, writing this blog, building
projects — and every one of those was its own pile of chats, files, and
half-automations.

So the real question wasn't "which AI tool should I use?" It was: **I
have this many kinds of work — how do I manage them?** This post is the
answer I've built so far: three layers, and one example of how they
combine when a real demand shows up. The full map — every workflow,
role, and asset, kept current — lives at [/atlas](/atlas); this post is
the guided tour.

## The three layers

### Data — what everything reads and writes

The bottom layer is just my facts, kept where a session can find them:

- **A Logseq vault** — my PKMS. Daily journals are the capture point;
  topic pages hold what I've learned. Every loop above writes into it;
  the vault itself is a sink.
- **My projects** — everything I've built, registered in one place with
  its stack, health, and what's reusable from it.
- **My work history** — reviewed projects distilled into case studies,
  then into a single facts file (`master.md`) that anything
  career-facing must draw from.
- **My blog** — this site: what I say in public.
- **Myself** — one interviewed master profile, distilled into a snippet
  every AI session loads, so no session starts by asking who I am.

### Operation — who does the work

The middle layer is where work actually happens: two project repos,
three roles, and one standing interview.

- **forge** manages the projects: register, review, mine each one for
  reusable parts, scaffold the next one from those parts.
- **agent-kit** manages the reuse: the prompt library, the skills, the
  snippets — anything generic enough to serve every other repo lives
  here, deployed via thin loaders, never pasted copies.
- **The Editor** (a role) owns this blog: voice, the draft pipeline, one
  language per page, a native-English pass on everything.
- **The Librarian** (a role) keeps the vault coherent: page naming,
  journal format, the capture pipeline — conventions, not content.
- **The Brand Coach** (a role, the newest) owns how I come across in
  public: positioning, platform strategy, an outside-in audit of my
  surfaces. Designed and inventoried, not yet run.
- **The "About me" project** (in Claude Cowork) maintains the master
  profile by interviewing me, then distills the versions everything
  else consumes.

A role, here, is not code. It's a markdown doctrine file that a session
reads and then acts as. Commands are checklists — the same steps every
time; roles are where judgment concentrates.

### Decision — who decides

At the top sits one more role: **the Chief of Staff**. It owns the
inventory — one YAML file, one row per workflow: who owns it, where its
entry points live, when it was last reviewed. The rule that makes the
whole system honest is blunt: **if it isn't inventoried, it doesn't
exist.** A small Python script checks the boring facts (do the entry
points still exist, is any row stale), and the Chief of Staff makes the
call the script can't: keep, merge, automate, or retire. It audits the
other three roles — and its own row.

This is the layer that catches me lying to myself. A glossary pipeline
I'd built for interview prep looked like infrastructure for months; the
audit found its staging file empty — zero syncs, ever — and retired it.
The rule taken from the corpse: a workflow doesn't get to claim
"running" because its files exist; it has to show usage evidence.

## Composing the layers: job hunting

The layers earn their keep when a special demand shows up, because most
of what the demand needs already exists — I reuse it and add only the
missing part.

Job hunting is the live example. It **reuses** the data layer: the
"About me" profile supplies who I am, and forge's reviewed projects
supply the evidence, already distilled into `master.md`. What it
**adds** is only the pipeline no other loop had: scout job listings,
match them against a rubric, tailor a dated resume (every claim must
trace back to `master.md` — which is what ended the Monday-vs-Thursday
contradiction), and mock-interview me against the exact JD before any
human gets to.

That's the pattern for any new demand: check the inventory, reuse what
exists, build only the delta, and give the new part its own row.

## The rest of the map

The first draft of this post had a third chapter: the full catalog —
every workflow, role, and asset, one line each. I cut it. While the
draft sat waiting for its refine pass, the catalog became a page of its
own: the [System Atlas](/atlas), which the Chief of Staff regenerates
from the inventory whenever the system changes. A catalog frozen inside
a blog post starts drifting the day it ships; the atlas can't drift,
because it's rebuilt from the same rows it audits.

![The system map as it stood on July 7, 2026: twelve workflows grouped by the repo that owns them, the edges between them, and the audit perimeter around everything — every node a row in inventory.yaml.](../../../assets/how-i-work-with-ai/atlas-system-map.svg)

*The map as it stood when this post shipped. For the current version,
see the [live atlas](/atlas) — rebuilt from the inventory whenever the
system changes.*

As of July 7, 2026 — the day this post shipped — the map held twelve
workflows and four judgment-roles — three running the operation, one
auditing it. The pieces that deserve
depth — how I study, how the job pipeline runs, how I decide which tier
of AI tool gets a task — will get posts of their own. This one is just
the tour.

## One rule over everything

Output is the only thing that matters, and only output I generated. The
research is clear enough that I treat it as settled — delegating the
writing or the code produces near-zero learning. So AI critiques,
checks, drills me with questions, and drafts throwaway scaffolding; the
code I'm trying to learn, I type, and the understanding has to survive
an explain-back before it counts.

Full disclosure, because this post is the first to run my publishing
pipeline end to end: its first draft was AI-written, at my request,
against my own Editor's doctrine — then cut, fact-checked, and refined
through that same pipeline before it shipped. That tension, wanting the
leverage without letting it hollow out the work, is the entire reason
the system exists. The inventory doesn't resolve the tension. It just
makes sure I can see it.
