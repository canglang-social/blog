---
title: "A speaking game, without a fixed destination"
description: "Starting with an idea that interests me, then building tools to understand what happens when I speak inside a game."
pubDate: "2026-09-09"
tags: ["ai", "workflow", "reflection"]
---

I’m building Speaking Worlds with AI: an experimental adventure game where you speak to characters and your words can change what happens next. You can choose or create a story opening, then go back to an earlier point and try another branch.

The idea interested me before I had a precise goal for the project. It feels like drifting away from a beautiful beach: the beach is the idea that drew me in. I want to explore, even though I don’t yet know where I’m going to land.

There is a playable local prototype now. It supports speaking or typing, story branches and rewind. The characters can still misunderstand what I mean. I’m still figuring out what this game should become.

One problem stopped being abstract when I tried to understand a character’s reply. I could see the answer on screen, but I couldn’t tell how it had been produced: what information had the AI received, what had it proposed, and what had the game actually changed?

In an earlier version—the river-crossing demo—I entered “i have a friend in there.” The character’s reply began, “The clinic is expecting you?”

An inspection of that turn found that the AI had classified my sentence as explaining a medicine delivery. The code accepted that interpretation and marked the delivery purpose as understood. But my sentence hadn’t explained a delivery.

That version also selected the character’s line from prewritten dialogue. The AI’s interpretation, the code’s decision and the text I saw were different steps. The reply alone didn’t show me that chain.

I asked for a map of how the game runs—including the world setup—and a closer view of a single turn: my input, the AI’s interpretation, the game’s decision, and the resulting changes. I also wanted to see the story branches and return to an earlier point.

Then I asked to turn those maps into a development view I could keep beside the game. It has now been implemented locally and checked at the code and API level; its browser interaction still needs verification. Adding this view hasn’t fixed the dialogue behavior.

This is where my other image comes in: when I run into a problem, I build a little fort to help me work through it, like in Fortnite. Here, I’m asking AI to help build tools for something I don’t yet understand.

I still don’t have a fixed destination for this game. I have a starting point that interests me, a problem to investigate, and a few small forts along the way.
