---
title: 'Learning to Ship'
description: 'I built an agent to tell me what to study next. Its first answer was: build this.'
pubDate: 'Jul 6 2026'
heroImage: '../../assets/learning-to-ship/hero.png'
tags: ['ai', 'agents', 'langgraph', 'career', 'learning', 'reflection']
---

I built a small agent to answer one question: of everything I *could* study next, which thing actually moves me closer to a job? Then I asked it. Its top answer was to build itself.

我做了一个小小的 agent，用来回答一个问题：在我*能*学的所有东西里，哪一件真正让我离一份工作更近？然后我把这个问题抛给了它。它给出的头号答案，是把它自己造出来。

That loop is the whole story, so let me unwind it.

这个闭环就是整个故事，让我把它一点点展开。

## The problem: I was collecting, not closing

## 问题：我在收集，而不是在收口

I learn constantly. That's not the hard part. The hard part, during a job search, is that *everything* looks worth learning — another framework, another paper, another side project — and the day only has so many hours. I'd finish a tutorial and feel productive, but I couldn't honestly say whether it had made me any more hireable. I was collecting knowledge, not closing the gaps between what I had and what the jobs I wanted actually asked for.

我一直在学。这不是难点。难的是：找工作的时候，*什么*看起来都值得学——又一个框架、又一篇论文、又一个副项目——而一天就那么点时间。我学完一个教程会觉得自己很充实，但我没法诚实地说它有没有让我更好招。我是在收集知识，而不是在收口——收拢我已有的、和我想要的岗位真正要求的之间的那道缝。

So I flipped the direction. Instead of learning and hoping it adds up, start from the output — *what gap am I trying to close?* — and let that decide what to study. I call it output-driven learning: I learn in order to ship something specific, and for this stage of my life, that something is closing a named job-role gap.

于是我把方向倒过来。与其一路学下去、指望它自己攒成什么，不如从产出出发——*我到底想收口哪道缝？*——再让它来决定学什么。我把这叫做产出驱动的学习：我为了交付某个具体的东西而学，而在我人生的这个阶段，那个东西，就是收口一道具体的岗位能力缺口。

## The mechanism: rank study items by the gap they unblock

## 机制：按每件事能解锁的缺口来给它排序

The agent is deliberately thin. It's one [LangGraph](https://langchain-ai.github.io/langgraph/) node, called `focus-director`. It reads a corpus of my job-hunt gaps — competencies clustered from real job descriptions, each with how often it shows up and how far it is from where I am today — through an [MCP](https://modelcontextprotocol.io/) tool. Then it ranks a list of candidate study items by a single number: how much closing that gap unblocks. Every item comes back with the gap it cites.

这个 agent 是刻意做薄的。它只有一个 [LangGraph](https://langchain-ai.github.io/langgraph/) 节点，叫 `focus-director`。它通过一个 [MCP](https://modelcontextprotocol.io/) 工具，读取我求职缺口的语料——从真实招聘 JD 里聚类出来的能力项，每一项都带着它出现的频率、以及它离我当下水平有多远。然后它按一个数字给一串候选学习项排序：收口那道缝能解锁多少价值。每一项返回时，都标注了它对应的那道缺口。

The ranking itself is deterministic — the same inputs always give the same order — because I wanted it to be something I could put an eval harness around, not a black box that reranks its own reasons every time I run it. The output reads like this:

排序本身是确定性的——相同输入永远给出相同的顺序——因为我想让它成为一个我能套上评测（eval）框架的东西，而不是一个每次运行都会给自己的理由重新洗牌的黑箱。它的输出长这样：

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

重点不在排序器有多聪明，而在于当你对输入足够诚实时，会发生什么。

## The loop closes: the tool ranked itself first

## 闭环合上：这工具把自己排在了第一

When I fed my own gap corpus in, the two highest-leverage items weren't courses. They were: *ship an agent on a named framework*, and *build a cloud-deployed, CI-and-eval-tracked artifact*. Those were the two things the market kept asking for that I hadn't yet proven.

当我把自己的缺口语料喂进去，两个杠杆最高的项都不是课程。它们是：*在一个具名框架上交付一个 agent*，和*做一个云部署、有 CI 与 eval 追踪的作品*。这正是市场反复要求、而我还没证明过的两件事。

Which is exactly this project. A LangGraph agent, deployed to the cloud, gated by a CI eval harness. So the most efficient thing I could build to close my top gaps was the very tool that told me to close them. I didn't design that on purpose — I noticed it after the ranker put "build this" at the top of its own list. It was the cheapest possible proof that the idea works: the tool's first useful output was a justification for its own existence.

而这，恰恰就是这个项目：一个 LangGraph agent，部署到云上，由一套 CI eval 框架把关。所以我能造出来、用来收口我头号缺口的最高效的东西，正是那个叫我去收口它们的工具本身。这不是我刻意设计的——我是在排序器把「造这个」放到它自己列表顶端之后才注意到的。它是这个想法成立的、成本最低的一个证明：这工具第一个有用的产出，就是为它自己的存在给出的理由。

## The discipline: agent public, career data private

## 纪律：agent 公开，职业数据私有

I wanted to build this in the open, because a public, dated trail of actually shipping is worth more than any claim on a resume. But the fuel is private — my real gap analysis is a map of my own weaknesses, and that doesn't belong on the internet.

我想把这个过程公开来做，因为一条公开、带日期、真实交付的轨迹，比简历上任何一句声称都值钱。但燃料是私密的——我真实的缺口分析是一张我自己弱点的地图，它不该放到互联网上。

So the split had to be clean from the first commit. The public repo and the live deployment run on a *fictional* corpus — a made-up "Sample Learner" whose gaps are nothing like mine. My real corpus stays on my machine, wired in through an environment variable, never committed. Getting this right was its own small lesson: I caught real numbers that had leaked into a "stub" that wasn't actually stubbed, scrubbed them, and rewrote the git history clean before the repo ever went public — because scrubbing a secret in a later commit does nothing once the history is out there.

所以这道切分从第一个 commit 起就必须干净。公开仓库和线上部署跑的是一份*虚构*语料——一个编出来的「Sample Learner」，它的缺口和我的毫无关系。我真实的语料留在自己机器上，通过环境变量接入，绝不提交。把这件事做对，本身是一堂小课：我抓到了几个真实数字，它们漏进了一个名义上叫「桩」、实则没桩住的文件里，我把它们清掉，并在仓库公开之前把 git 历史重写干净——因为一旦历史流出去，你在后面的 commit 里清理机密，等于什么都没做。

## Shipping it

## 把它交付出去

The finished v0 is deliberately small, but it's end to end: a LangGraph graph, reading its corpus through an MCP tool call (not a file read), with a golden eval harness that runs in GitHub Actions on every push — a ranking regression fails the build. And it's live, wrapped in a tiny FastAPI layer and deployed for free to a container host, not sitting on localhost.

做完的 v0 是刻意做小的，但它是端到端的：一个 LangGraph 图，通过一次 MCP 工具调用读取它的语料（而不是直接读文件），配一套 golden eval 框架，在每次 push 时于 GitHub Actions 里运行——排序一旦回退，构建就失败。而且它是活的，包在一层很薄的 FastAPI 里，免费部署到一个容器托管上，而不是躺在 localhost。

- Live endpoint: <https://vegekiwi-learn-to-ship.hf.space>
- Code: <https://github.com/canglang-social/learn-to-ship>

- 线上端点：<https://vegekiwi-learn-to-ship.hf.space>
- 代码：<https://github.com/canglang-social/learn-to-ship>

## What actually changed

## 真正改变的东西

The agent is small enough that the interesting part isn't the code — it's what it did to my week. I stopped opening tutorials on impulse. Every study candidate now has to name the gap it closes before it earns my time, and the ones that don't cite a real gap sink to the bottom where they belong. The artifact and the discipline turned out to be the same thing.

这个 agent 小到有意思的部分不在代码——而在它对我这一周做了什么。我不再一冲动就打开教程。现在每一个候选学习项，都得先说清它收口哪道缝，才配占用我的时间；那些说不出真实缺口的，就沉到它们该待的底部。到头来，作品和纪律，原来是同一件事。

I still learn constantly. I just stopped mistaking it for progress.

我依然一直在学。我只是不再把「一直在学」错当成「在前进」。
