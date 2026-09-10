---
title: "I wanted to show a friend my work. The AI picked the wrong project."
description: "A Codex task chose my workflow project instead of my AI-services business. The original exchange shows the assumption, correction and sharing obstacle."
pubDate: "2026-09-11"
tags: ["ai", "workflow", "reflection"]
---

*This exchange took place on September 9, 2026.*

A small sharing request exposed two separate checks: which project are we talking about, and can the other person open what we send?

I was using Codex while building an AI-services business: workflow automation, document Q&A and custom AI assistants. I wanted a friend to see what I was working on. I asked whether I should share the GitHub project.

Me · original message, excerpt

> i want to share this to my friend to show what i am doing. how? share the github proejct?

## The answer described my other project

The assistant chose ai-chief-of-staff: my personal project for organizing how I work with AI. That is different from ai-services-business, the business I meant to show. It stated its assumption, but then wrote the introduction around the wrong project.

Assistant · verbatim excerpt; link formatting removed

> Assuming you mean ai-chief-of-staff

The introduction it offered · verbatim excerpt

> I’m building a personal “AI Chief of Staff” to organize how I work with AI across different projects.

That was the concrete problem: someone reading this introduction would learn about my personal workflow project, not my AI-services business.

## Why the mix-up was confusing

In Codex, the “Share GitHub project” task appeared beside related work in an AI-services sidebar section. But its recorded project association still pointed to ai-chief-of-staff. So did its working directory—the folder this task was using. The sidebar placement and the actual folder did not match.

Completed command record · excerpt; flags abbreviated and home path omitted

```text
Command: gh repo view …
Working folder: …/ai-chief-of-staff
```

<picture>
  <source media="(max-width: 600px)" srcset="/images/2026-09-11-ai-picked-the-wrong-project/context.en.mobile.svg">
  <img src="/images/2026-09-11-ai-picked-the-wrong-project/context.en.svg" alt="Explanatory reconstruction from the dated task record. This is not a screenshot. Sidebar placement and the task’s project association are shown separately." width="1000" height="400" style="width:100%;height:auto;">
</picture>

Explanatory reconstruction from the dated task record. This is not a screenshot. Sidebar placement and the task’s project association are shown separately.

The assistant later named its own assumption:

Assistant · verbatim excerpt

> I pointed you to the wrong repository—I assumed “this project” meant Chief. You meant your AI services business.

The recorded mismatch and that admission explain what we could observe. They do not prove the model’s hidden reasoning, or that sidebar grouping caused every part of the answer.

## Naming the project corrected the introduction

The coordinating AI task sent a correction to the sharing task, naming ai-services-business as the intended project. This was an instruction passed between the AI tasks, not a prompt I had to write myself.

Coordinating task → sharing task · verbatim instruction excerpt

> For this bounded correction, explicitly read the intended business README.md and PROJECT.md from the canonical GitHub directory, then replace your mistaken answer with the correct repository and a short accurate description Felix can share with his friend.

The next response said it had read the README and project documents. Its proposed introduction now began:

Corrected introduction · verbatim excerpt

> I’m building an AI services business, offering workflow automation, custom AI assistants, and document or knowledge Q&A.

This was the business I meant. The answer had been corrected. The task’s app association had not been moved at that checkpoint, and we had not tested whether a fresh task would avoid the same mistake.

## The right project still needed a shareable destination

There was one more obstacle. The corrected business repository was private. I pointed that out, then clarified that I simply wanted to show what I was doing.

Me · original message, excerpt

> no, i just want to share what i am doing. how?

The assistant finally suggested the existing services website with a short personal message, instead of making repository access the next step.

Final response · verbatim excerpt

> Send your existing website with a short personal message.

That was the recorded outcome: a corrected business introduction and a suggested website to show it. The assistant reported opening the site at the time. This exchange does not establish that my friend received it or could open it; it is not a current access test.

## What I would check next time

First, name the intended project and have the AI read its overview before it drafts a description. Then check the destination from the intended reader’s side: a correct private repository link is still not something everyone can open.

Those are two checks I can use. This incident shows a corrected answer, not a proven cure for context mistakes.
