---
featured: true
title: 'Learning to Ship'
description: 'I built an agent to tell me what to study next. Its first answer was: build this.'
pubDate: 'Jul 6 2026'
heroImage: '../../../assets/learning-to-ship/hero.png'
tags: ['ai', 'agents', 'langgraph', 'career', 'learning', 'reflection']
---

I built a small agent to answer one question: of everything I *could* study next, which thing actually moves me closer to a job? Then I asked it. Its top answer was to build itself.

That loop is the whole story, so let me unwind it.

## The problem: I was collecting, not closing

I learn constantly. That's not the hard part. The hard part, during a job search, is that *everything* looks worth learning — another framework, another paper, another side project — and the day only has so many hours. I'd finish a tutorial and feel productive, but I couldn't honestly say whether it had made me any more hireable. I was collecting knowledge, not closing the gaps between what I had and what the jobs I wanted actually asked for.

So I flipped the direction. Instead of learning and hoping it adds up, start from the output — *what gap am I trying to close?* — and let that decide what to study. I call it output-driven learning: I learn in order to ship something specific, and for this stage of my life, that something is closing a named job-role gap.

## The mechanism: rank study items by the gap they unblock

The agent is deliberately thin. It's one [LangGraph](https://langchain-ai.github.io/langgraph/) node, called `focus-director`. It reads a corpus of my job-hunt gaps — competencies clustered from real job descriptions, each with how often it shows up and how far it is from where I am today — through an [MCP](https://modelcontextprotocol.io/) tool. Then it ranks a list of candidate study items by a single number: how much closing that gap unblocks. Every item comes back with the gap it cites.

The ranking itself is deterministic — the same inputs always give the same order — because I wanted it to be something I could put an eval harness around, not a black box that reranks its own reasons every time I run it. The output reads like this:

```
1. [1.00] Containerize the service and deploy it to a cloud host
   Unblocks 'Cloud + CI/CD' (gap #1 to close; asked in ~half of JDs, you are 'gap').
2. [0.80] Build and ship an agent on a named framework
   Unblocks 'Agent orchestration' (gap #2 to close; ..., you are 'partial').
...
6. [0.05] Rebuild the dashboard UI
   Unblocks 'Frontend' (already a strength — low leverage).
```

The point isn't the cleverness of the ranker. It's what happens when you're honest about the inputs.

## The loop closes: the tool ranked itself first

When I fed my own gap corpus in, the two highest-leverage items weren't courses. They were: *ship an agent on a named framework*, and *build a cloud-deployed, CI-and-eval-tracked artifact*. Those were the two things the market kept asking for that I hadn't yet proven.

Which is exactly this project. A LangGraph agent, deployed to the cloud, gated by a CI eval harness. So the most efficient thing I could build to close my top gaps was the very tool that told me to close them. I didn't design that on purpose — I noticed it after the ranker put "build this" at the top of its own list. It was the cheapest possible proof that the idea works: the tool's first useful output was a justification for its own existence.

## The discipline: agent public, career data private

I wanted to build this in the open, because a public, dated trail of actually shipping is worth more than any claim on a resume. But the fuel is private — my real gap analysis is a map of my own weaknesses, and that doesn't belong on the internet.

So the split had to be clean from the first commit. The public repo and the live deployment run on a *fictional* corpus — a made-up "Sample Learner" whose gaps are nothing like mine. My real corpus stays on my machine, wired in through an environment variable, never committed. Getting this right was its own small lesson: I caught real numbers that had leaked into a "stub" that wasn't actually stubbed, scrubbed them, and rewrote the git history clean before the repo ever went public — because scrubbing a secret in a later commit does nothing once the history is out there.

## Shipping it

The finished v0 is deliberately small, but it's end to end: a LangGraph graph, reading its corpus through an MCP tool call (not a file read), with a golden eval harness that runs in GitHub Actions on every push — a ranking regression fails the build. And it's live, wrapped in a tiny FastAPI layer and deployed for free to a container host, not sitting on localhost.

- Live endpoint: <https://vegekiwi-learn-to-ship.hf.space>
- Code: <https://github.com/canglang-social/learn-to-ship>

## What actually changed

The agent is small enough that the interesting part isn't the code — it's what it did to my week. I stopped opening tutorials on impulse. Every study candidate now has to name the gap it closes before it earns my time, and the ones that don't cite a real gap sink to the bottom where they belong. The artifact and the discipline turned out to be the same thing.

I still learn constantly. I just stopped mistaking it for progress.
