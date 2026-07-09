---
title: "About Me"
description: "Project manager turned engineer turned AI application builder — who I am, what this blog promises, and the work that backs it up."
pubDate: "TODO-set-at-publish"
tags: ["career", "reflection"]
---

<!--
Working title: About Me
One-line idea: Who I am, why this blog exists, and how I work with AI — the
front door for a hiring manager or a new reader landing here for the first
time.

Editor notes (delete before publish):
- STATUS 2026-07-09: prose below is a DRAFT written at Felix's request
  (chief-of-staff session), grounded in job_hunting/master.md (numbers) and
  the About Me master profile (story/human side). Nothing invented; every
  figure traces to the Metrics Bank in master.md.
- BEFORE PUBLISH, in order: (1) Felix's rewrite-in-own-words pass — DONE
  2026-07-09; (2) Editor /refine native-English pass — DONE 2026-07-09;
  (3) set pubDate.
- TODO(Felix): optional one-line closing beat before "Elsewhere" — every
  strong post here ends on one. Yours to write, not the Editor's.
- Language check 2026-07-09: page is English throughout. The two Chinese
  proper nouns (韩海涛, 沧浪) are names, not bilingual prose, and both are
  glossed — Editor's call: they stay.
- OPEN DECISION (unchanged): dated blog post vs standalone /about page
  (src/pages/about.astro) linked from the header. Decide at publish time;
  this content works for either.
- logx repo is PRIVATE as of 2026-07-05 — the text below deliberately does
  not deep-link it. If it goes public first, add the link.
- Voice check (editor.md): reflective, learn-in-public, concrete over
  abstract — real numbers, real failures, what changed my mind. No
  motivational fluff.
-->

## Who I am

I'm Felix Han — 韩海涛 in Chinese. My given name means "sea waves," and the
handle this blog lives under, 沧浪 (canglang), keeps the water. I'm in my
late twenties, based in Wuxi, China, and I build AI applications.

The route here wasn't straight. I joined FanRuan, a Chinese BI company, as
a project manager on the client-delivery team. After a year and a half of
managing implementations, I wanted to be the person building the software
instead — so I took four months off, taught myself front-end and Java, and
rejoined the same company as an engineer. Over the next three years I was
the front-end and design lead on a three-person core team that built
FDI-WEB, an internal platform a ~3,000-person delivery organization uses to
track 10,000+ projects. Along the way I prototyped the company's first LLM
tools — a RAG knowledge assistant and an OCR pipeline that turned
screenshot bug reports into structured JSON.

Since March 2025 I've been on a self-directed break: shipping AI projects,
studying CS fundamentals through OSSU, and aiming for AI/agent application
engineer roles — remote-first. Before any of this, I sang bass in my
university choir and ended up running it. The pattern is apparently
permanent: I join things, then I can't help organizing them.

## Why this blog exists

I'm learning in public. The test I hold every post to is borrowed from
swyx: would this have been useful to me three months ago? If yes, someone
three months behind me needs it now.

What I promise: real numbers (eval scores, before-and-after metrics), real
failures (prototypes that never reached production, claims I had to walk
back), and the specific thing that changed my mind. What I don't promise:
tool roundups, hot takes on model releases, or motivation. There are
better places for all three.

## How I work with AI

Claude Code does most of my typing; I own the architecture and the evals.
The clearest example is ragx: the AI wrote most of the code, but
every retrieval trick was accepted or rejected by a 45-case eval harness I
designed — the numbers decided, not the vibes. I even encode the division
of labor in my repo names: a suffix of "x" means AI-assisted, "r" means
hand-written. The full system — every workflow, role, and asset, kept
current and audited — is in [How I Work with
AI](/blog/2026-07-07-how-i-work-with-ai).

## Selected work

- **[ragx](https://ragx-rosy.vercel.app)** — a RAG system that answers
  questions across four corporate annual reports with cited sources, built
  around its own 45-case eval harness. Retrieval went 0.63 → 0.97 and answer accuracy 0.78 → 0.98
  by iterating against the numbers. What it proved: AI quality can be a
  measurement, not a feeling.
- **FDI-WEB** (at FanRuan) — the internal delivery platform above:
  ~3,000-person org, 10,000+ projects tracked. What it proved: I can ship
  production software people rely on daily.
- **logx** — a small Rust log-parsing CLI, my first project built by
  directing an AI agent end to end. The honest story: the first README
  overclaimed, so I audited it, cut the features that didn't exist, and
  published the measured numbers instead (~100–150 MB/s, under 5 MB of
  memory). What it proved: I'd rather ship a small true thing than a big
  claimed one.
- **[learn-to-ship](https://github.com/canglang-social/learn-to-ship)** —
  a LangGraph agent that ranks what I should study next by which job-role
  gap it closes; v0 is live, gated by a CI eval harness. Its first useful
  output was telling me to build itself — the full story is in [Learning
  to Ship](/blog/2026-07-06-learning-to-ship). What it proved: learning
  can be pointed at output instead of collected.

## Elsewhere

[GitHub](https://github.com/canglang-social) ·
[LinkedIn](https://www.linkedin.com/in/felix-han-854726413) ·
[X](https://x.com/canglang_so) ·
[email](mailto:canglangzhuoxi@gmail.com)

<!-- source material -->
<!--
Sources actually used (2026-07-09 draft):
- job_hunting/master.md — career facts, Metrics Bank, honesty notes
  (logx superseded numbers, learn-to-ship no-shipped-claims rule).
- /Users/hang/Claude/Projects/About me/master-profile.md — story arc,
  choir/music detail, name meaning.
- ai-chief-of-staff/brand-records.md — positioning + pillars this page
  must stay consistent with (next brand AUDIT checks it).
Deliberately NOT used: master-profile's logx "multi-GB in seconds" claim
(superseded 2026-07-05) and anything from its Theme 11 (private).
-->
