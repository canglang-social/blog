# TODO — blog

Editor-owned work items too small for an issue, too big to lose. Judgment
for this repo lives in `editor.md`; this file is the queue.

Placement rule (chief-of-staff, 2026-07-07): project work lives in its own
repo's TODO.md. This file exists because a handoff that lives only in
another repo is not a handoff — see the note at the bottom.

## 决策摘要（中文）

这是一个 brief 队列，不是单个决策，所以摘要头写的是**队列状态**。每条**开着**
的 brief 下面另有一行中文。

- **要决什么** — 一件真正要你拍板的：**`drafts/` 怎么办**。它现在**完全没进
  git**，两篇真草稿只存在于一台机器的一个位置。但**这个仓库是 PUBLIC 的**，
  而且按 `editor.md` 它是「招聘方看得见的表面」——所以「提交进来」不是安全
  默认值，它等于把一段 20 词的半句话公开发布。建议见 brief ①。
- **结论 / 选项** — 另外两条不卡判断：② 把一篇已经发过的原始素材移出
  `drafts/`（是它让这个目录看起来像有三篇成品）；③ 两篇真草稿各自缺什么内容
  ——这是**你要写的**，不是我能代笔的（`editor.md`：初稿永远是 Felix 的）。
- **关键数字** — `drafts/` 里 3 个文件，**0 篇是写完的**。`About the AI Tools
  Strategist.md`（1,493 词）是 **2026-06-28 已发文章的原始素材**；
  `How I hunt a job using AI.md` **234 词**、是空标题的大纲；
  `How to study.md` **20 词**、停在半句话。仓库可见性 **PUBLIC**。
- **我要做的** — 先决 ①（track / gitignore / 搬走），②③ 随后。
- **状态** — 活队列。文中事实以 2026-08-10 为准，不刷新。

---

- [ ] **`drafts/` 没有任何备份 —— 但这个仓库是公开的.** `git status` shows
      `?? drafts/`: the folder has never been committed and is not in
      `.gitignore` either. It sits in an undefined state, which is the
      worst of the three options because it looks handled and isn't.
      THE CONSTRAINT that makes this non-obvious: `canglang-social/blog`
      is **PUBLIC**, and `editor.md` defines this surface as
      *"hiring-manager-visible… publishing is curation, not a
      chronological dump."* So "just commit it for backup" would publish
      a 20-word unfinished fragment and a skeleton outline to a surface
      built to show finished work. `drafts/` is already deliberately
      placed outside the `src/content/blog` glob so the site never
      renders it — but a public GitHub repo is readable regardless of
      what Astro builds.
      THE THREE OPTIONS:
      **(a) gitignore `drafts/`, back it up privately — RECOMMENDED.**
      Add `drafts/` to `.gitignore` so the state is explicit rather than
      accidental, and give the folder a real backup somewhere private
      (a small private repo, or whatever already backs up the machine).
      Cost: drafts are not versioned. Benefit: nothing half-finished is
      ever one `git add -A` away from being public.
      **(b) commit them.** Versioned and backed up in one move — but
      publishes unfinished writing on the hiring surface. Only defensible
      if Felix actively wants working-in-public, which `editor.md`'s
      curation rule argues against.
      **(c) move `drafts/` out of this repo entirely** into a private
      drafting location, and let this repo hold only publishable content.
      Cleanest separation; costs the convenience of `/draft` writing into
      the same tree it publishes from.
      OWNER: Felix (Editor). DONE-WHEN: one option is chosen and the repo
      reflects it — either a `.gitignore` line or a commit, not the
      current undefined state.
      **中文摘要** — `drafts/` 既没提交也没被 gitignore，处在"未定义"状态，
      这是三种可能里最差的一种：**看起来像处理过了，其实没有**。难点在于这个
      仓库是**公开的**，而 `editor.md` 说它是招聘方看得见的表面——所以"提交
      进去当备份"会把一段 20 词的残句公开。**建议 (a)**：把 `drafts/` 写进
      `.gitignore` 让状态变明确，另找一个私密位置做真备份。

- [ ] **一篇已发文章的原始素材还躺在 `drafts/` 里.**
      `About the AI Tools Strategist.md` (1,493 words) is the raw source
      for the post that published **2026-06-28** as
      `src/content/blog/en/2026-06-28-ai-tools-strategist.md`. It is a
      spent source, not an unshipped draft.
      WHY THIS IS WORTH A LINE AND NOT JUST A DELETE: its presence is
      what made `drafts/` look like it held three finished pieces. That
      false reading propagated — it reached a chief-of-staff record on
      2026-08-09 and then into `/monthly-review`'s live instructions as
      the rationale for the writing-seeds forge, where it was corrected
      on 2026-08-10. A stale file in a working folder is not inert; it
      gets counted.
      SUGGESTED: delete it, or move it to an `archive/` subfolder if the
      original longhand is worth keeping next to the published version.
      Either way it should stop reading as pending work.
      OWNER: Felix (Editor).
      **中文摘要** — 这篇是 2026-06-28 那篇已发文章的原始素材，不是没发的
      草稿。留着的代价不是占空间：**正是它让这个目录看起来有三篇成品**，
      而这个误读一路传到了 chief 的记录和 `/monthly-review` 的现行指令里
      （已于 08-10 更正）。建议删除或移到 `archive/`。

- [ ] **两篇真草稿分别缺什么 —— 这是要你写的.**
      Neither is finished, and neither can be finished by an agent:
      `editor.md` is explicit that *"first drafts are Felix's… it never
      ghostwrites a post body from scratch. Outlines and briefs are fine;
      prose is Felix's."*
      **`How I hunt a job using AI.md` — 234 words, an outline.**
      The skeleton is genuinely good: Stage 1 (do I need a job / what job
      / how), Stage 2 (the context about you), Stage 3 (where the jobs
      are). But `### Try to solve` and `### Output` are **empty headings**
      under every stage, and `#### Job Decision Prompt` has no body. What
      it needs is the actual content of those sections — the prompts used
      and what each produced. Roughly a quarter of the current words are
      section titles.
      Worth knowing: a **2026-07-01 journal entry already planned this
      post** (*"Write a blog on my whole job-hunting routine"*, filed
      `#backlog`). It has been pending 40 days.
      **`How to study.md` — 20 words, one truncated sentence.**
      *"After a lont time for 23 years, I 还是 a baby in learning scope.
      I have"* — it stops mid-sentence. This is a title and an opening
      breath, not a draft. Decide whether it is a real intention or
      should be dropped; if real, it wants a seed to attach to.
      A NOTE ON SEQUENCING (from the chief's 2026-08-10 writing-cadence
      work): the observed pattern is that **finished work ships and
      drafts started *about a topic* stall**. Both files above were
      started about a topic. The `/seed-check` command and the ripeness
      signal now exist upstream precisely to catch the other case —
      writing that rides something just finished. Worth trying that route
      before reviving either of these by willpower.
      OWNER: Felix. DONE-WHEN: each is either drafted through or dropped.
      **中文摘要** — 两篇都没写完，而且**都不能由 AI 补**（`editor.md`：初稿
      永远是你的）。`How I hunt a job using AI` 骨架是好的，但每一节的
      `### Try to solve` / `### Output` 都是**空标题**，缺的是那些 prompt 和
      它们的产出；这篇在 2026-07-01 的 journal 里就已经计划过，压了 40 天。
      `How to study` 只有 20 词、停在半句话，先决定它是不是真的要写。
      提醒：上游 08-10 的结论是「**写完的都发了，为话题开的草稿都停住了**」，
      这两篇正好都是后者——先试 `/seed-check` 那条路，别靠意志力硬救。

---

## Why this file was created (2026-08-10)

The chief-of-staff session that produced these three items wrote them into
its own `TODO.md` and a PR body, and described that as "handed to the
Editor." It was not: this repo had no `TODO.md`, so nothing was visible to
anyone working here. That gap was caught in the same session's close-out
audit — which had, one item earlier, written *"a handoff with no date and
no owner is not a plan."*

Upstream context, if useful: `ai-chief-of-staff/reports/2026-08-10-writing-cadence-design.md`
(the diagnosis of what actually ships), and PR #124 there (the `/seed-check`
command and the daily ripeness signal that now feed this repo's `/draft`).
