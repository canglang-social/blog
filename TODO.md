# TODO — blog

Editor-owned work items too small for an issue, too big to lose. Judgment
for this repo lives in `editor.md`; this file is the queue.

Placement rule (chief-of-staff, 2026-07-07): project work lives in its own
repo's TODO.md. This file exists because a handoff that lives only in
another repo is not a handoff — see the note at the bottom.

## 决策摘要（中文）

这是一个 brief 队列，不是单个决策，所以摘要头写的是**队列状态**。每条**开着**
的 brief 下面另有一行中文。

- **要决什么** — **①② 当天就决完并执行了**（2026-08-10，Felix：「go, keep the
  outline in vault」）。**只剩 ③ 开着，而且它的正确动作是「先别动」**——不是
  优先级问题，是机制问题，见下面那条 brief。
- **结论 / 选项** — **①`drafts/` → gitignore**，不建任何备份机制。原方案曾
  建议「gitignore + 私密备份」，**后半被否掉了**：要保护的总共只有 254 个词，
  为它架一套备份流程是系统大于内容。改成把值得留的东西贴进 vault（本来就
  iCloud 同步）。**② 那篇已发文章的原始素材 → 已删除**，删前核实过已发布版本
  是**超集**（1,633 词 vs 1,493 词，且完整包含那段 prompt），所以内容没有丢。
- **关键数字** — `drafts/` 现在 **2 个文件**（原 3 个），**仍然 0 篇写完**。
  `How I hunt a job using AI.md` **234 词**、空标题大纲，**骨架已逐字备份进
  [[Writing/Seeds]] 的 `## Draft skeletons` 一节**；`How to study.md` **20 词**、
  停在半句话，**没有备份**（没有结构可救，真想写会以 capture 形式回来）。
  仓库可见性 **PUBLIC**——这是 ① 之所以不能选「提交」的原因。
- **我要做的** — 只剩 ③，而且**现在不该做**：等 `/seed-check` 或 `/daily-review`
  的 R1 触发器给一个「骑着刚做完的事」的入口。
- **状态** — 活队列。文中事实以 2026-08-10 为准，不刷新。

---

- [x] **DECIDED AND DONE 2026-08-10 — `drafts/` is gitignored, and no
      backup mechanism was built.** Felix chose option (a), with one
      amendment that mattered: the brief had recommended *"gitignore **+
      a private backup**"*, and the second half was dropped as
      disproportionate. **What was at risk was 254 words total** — a
      234-word outline and a 20-word fragment. Standing up a private
      repo or a sync job for 254 words is more system than content, and
      this repo's own history already carries that lesson (2026-07-01:
      *"I nearly built a full md→PDF automation project when one
      hand-made HTML file did the job"*).
      WHAT SHIPPED: `drafts/` added to `.gitignore` with the reasoning
      inline, so the state is explicit rather than accidental and nothing
      unfinished is one `git add -A` away from a public repo.
      `.git-worktrees/` ignored too, since cross-repo PRs are opened from
      worktrees inside this checkout.
      THE BACKUP, without new machinery: the 234-word outline was pasted
      verbatim into `[[Writing/Seeds]]` under a new `## Draft skeletons`
      section — the vault is already iCloud-synced, so it is a real
      backup that cost nothing to build. `How to study.md` was NOT
      preserved: 20 words ending mid-sentence, no structure to rescue.
      If that intention is real it returns as a capture, which is the
      system working rather than a loss.
      **中文摘要** — 选了 (a)：`drafts/` 写进 `.gitignore`，理由直接写在
      ignore 文件里。**「私密备份」那半被否了**——要保护的一共 254 个词，
      为它架流程是系统大于内容。真正的备份是把那份 234 词的大纲逐字贴进
      `[[Writing/Seeds]]`（vault 本来就 iCloud 同步，零新增机械）。
      20 词那篇没救，因为没有结构可救。

      ARCHIVED — the brief as it stood before the decision, kept for its
      evidence. Not a separate item; it belongs to the entry above.
      ~~`drafts/` 没有任何备份 —— 但这个仓库是公开的.~~ `git status` shows
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

- [x] **DONE 2026-08-10 — deleted.** `About the AI Tools Strategist.md`
      is gone from `drafts/`. **Verified safe before deleting, not
      after**: the published post is a strict **superset** — 1,633 words
      against the source's 1,493, and it contains the full ~950-word
      Tooling Strategist prompt block (checked by grepping its
      distinctive strings, 5 matches). The source held nothing the
      published version lacks, and had two things it doesn't: broken
      local image paths (`/Users/hang/Library/.../typora-user-images/…`,
      which cannot render on the web) and rougher prose.
      NOTE ON THE MECHANICS: this was a working-copy deletion, not a
      commit. `drafts/` was never tracked, so the file existed only on
      disk — there is no git history to recover it from, which is
      precisely why the superset check was run first rather than trusting
      the description.
      **中文摘要** — 已删除。**删之前**核实过：已发布版本是**超集**
      （1,633 词 vs 1,493 词，且完整含那段约 950 词的 prompt），原始素材
      没有任何独有内容，反而多了两样毛病——本地绝对路径的图片引用（网上
      渲染不出来）和更粗糙的英文。因为 `drafts/` 从未被 git 跟踪，删了就
      没有历史可恢复，所以这个核实是先做的，不是事后补的。

      ARCHIVED — the brief as it stood before the decision.
      ~~一篇已发文章的原始素材还躺在 `drafts/` 里.~~
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

- [ ] **两篇真草稿分别缺什么 —— 这是要你写的，但现在不该写.**
      STILL OPEN, and deliberately so. The correct action right now is
      **wait**, and that is a mechanism call rather than a priority call:
      per the 2026-08-10 cadence finding, drafts started ABOUT a topic
      stall, and drafts riding just-finished work ship. Both files below
      are the first kind, and one of them has the receipts — a
      2026-07-01 journal entry planned it and it has been pending **40
      days**. Reviving it by willpower would be repeating a known
      failure mode. Wait for `/seed-check` or the `/daily-review` R1
      trigger to offer an entry that rides something finished, and let
      the skeleton receive it. If no such entry ever comes, that is the
      answer too.
      Note the outline is now backed up in `[[Writing/Seeds]]` under
      `## Draft skeletons`, with a note recording that its raw material
      is not missing — it is scattered across `[[JOB/2606Hunting]]`, the
      2026-06-29→07-02 daily reviews, and the 2026-06-28 post. **It is
      an assembly job, not a from-scratch one.**
      AMENDED 2026-08-12 — **one of the two constraints above is gone.**
      Felix retired the never-ghostwrite rule (*"drop the 永不代笔. we can
      mark them in private — ai or me draft"*); `editor.md` §Authorship
      v0.2 replaces the ban with a private per-piece `authorship::` mark.
      So "neither can be finished by an agent" is **no longer true** —
      `How I hunt a job using AI.md` can be marked `ai-draft` and written,
      and the brief above already established that its material is an
      ASSEMBLY job (scattered across `[[JOB/2606Hunting]]`, the
      2026-06-29→07-02 daily reviews and the 2026-06-28 post), which is
      the shape an agent is actually good at.
      WHAT DOES NOT CHANGE: the **wait** call. That was never justified by
      the ghostwrite rule — it rests on the cadence finding (drafts started
      ABOUT a topic stall) and on the learning cost, which is now Felix's
      to weigh rather than the Editor's to enforce. **So this is now a
      choice, not a block**, and it is his: mark it `ai-draft` and let the
      assembly happen, or keep waiting for an R1 entry. `How to study.md`
      (20 words, no structure) is unaffected either way.
      **中文摘要** — 保持开着，而且**现在的正确动作是等**。理由不是优先级，
      是机制：为话题开的草稿会停住，骑着刚做完的事写的会发出去；这两篇都是
      前一种，其中一篇已经压了 **40 天**。等 `/seed-check` 或 R1 触发器给
      入口，别靠意志力硬救。好消息是空section的原料并不缺，散在
      `[[JOB/2606Hunting]]`、6/29–7/2 的日复盘和 6/28 那篇文章里——
      **这是组装，不是从零写。2026-08-12 补充：两条约束里去掉了一条**——
      「永不代笔」已废，`editor.md` §Authorship v0.2 改成每篇私下标
      `authorship::`。所以「AI 补不了」这句**不再成立**，那篇可以标
      `ai-draft` 直接组装出来。**但「等」这个判断不变**——它本来就不是靠
      代笔禁令撑着的，它靠的是节奏发现和学习成本，而学习成本现在归你权衡。
      **也就是说：这从「被挡住」变成了「你来选」。**

      ARCHIVED — the brief's original wording.
      ~~两篇真草稿分别缺什么 —— 这是要你写的.~~
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

- [ ] **CONDITIONAL post candidate — "how to hold it in the AI era"**, routed
      by `/triage` 2026-08-13 from Felix's own capture of [[2026-08-12]]:
      *"AI 写的代码我一直知道是 AI 写的，问题是我还握不握得住；2026-08-12 的
      drill 用中文和英文都讲不出 RAG chunking，答案是握不住。接下来几天解这个，
      **有结果就分享**。"*
      WHY THIS ROUTES HERE AND NOT TO career. The content-gap half is already
      owned — `career/TODO.md` carries "The interview gap is CONTENT, not
      English" as a durable owner line, and the next action (a 15-min RAGX
      core-piece inventory marking each piece mine / library /
      AI-written-and-never-held) lives on the day plan. That half needs
      nothing from this repo. The half with no home anywhere is the last
      four characters: **有结果就分享** — a publish intent that appears in no
      file.
      WHY IT IS EXACTLY THE ENTRY THE OPEN BRIEF ABOVE IS WAITING FOR. That
      brief's ruling is that drafts started ABOUT a topic stall while drafts
      riding just-finished work ship, and it says the correct action is to
      WAIT for an entry of the second kind rather than revive by willpower.
      This is structurally the second kind: it **cannot be written until the
      inventory produces a result**, because the result is the material. If
      the inventory never runs, there is no post — and that is the honest
      answer rather than a stalled draft.
      IT ALSO HAS A NAMED READER, which the other candidates do not. A WeChat
      conversation Felix captured on 2026-08-13 (vault journal, screenshot)
      has a friend asking him for exactly this write-up — *"那你试试，我想知道
      过程和结果"* — about the adjacent job-hunt-automation experiment. An
      audience of one who asked by name is a stronger ripeness signal than
      any topic score.
      DO NOT START IT NOW. The trigger is the inventory finishing, not this
      line existing. `/seed-check` or the `/daily-review` R1 signal should be
      what picks it up.
      **中文摘要** — **条件式文章候选**：「AI 时代我还握不握得住」。内容缺口那一半
      已有 career 的持久 owner 行认领，这里只要**「有结果就分享」**那一半——那个
      发表意图在任何文件里都没有。它正好是上面那条 brief 在等的入口：**必须等
      RAGX 核心件盘点出结果之后才写得出来**，因为结果就是材料；盘点不跑就没有这
      篇文章，而这也是诚实的答案。**它还有一个具名读者**——2026-08-13 微信里朋友
      直接说「那你试试，我想知道过程和结果」。**现在不要动笔**，触发条件是盘点完成。

- [ ] **SERIES — "when the agents you delegated to go silent"**, Felix's own
      plan, stated 2026-08-13 at the close of the triage session: *"i hope to
      do a review for this session first, then do a research/survey for same
      problem others have meet, then research how others solve it, and try to
      fix it better, and maybe give some feedback into claude code office…
      but, it's ok to post one blog first and update the series later."*
      WHY THIS ONE IS DIFFERENT FROM THE TWO STALLED DRAFTS ABOVE. This repo's
      own cadence finding is that drafts started ABOUT a topic stall while
      drafts riding just-finished work ship. This rides work finished the same
      day, and **the assembly is already done**: the full write-up lives at
      `ai-chief-of-staff/reports/2026-08-13-agent-fanout-and-resume.md` with
      the sequence, verbatim transcript evidence, four mechanisms, the four
      diagnostic commands, and the numbers. Post 1 is an assembly job, not a
      from-scratch one — which is the shape the brief above says actually
      ships.
      THE SPINE, in Felix's order. **(1) Review** — done; the record is it.
      **(2) Survey whether others hit this** — and the sharpening offered at
      the time: check the `anthropics/claude-code` issue tracker FIRST, before
      any general web search, because "is this already filed" changes both the
      post and the feedback. **(3) Survey how they solve it.** **(4) Build a
      better fix** — if this happens it creates its own object in `agent-kit`
      or `forge` at that time, not now. **(5) Feedback upstream to Anthropic.**
      THE FRAMING THAT MAKES THE FEEDBACK DEFENSIBLE, worth carrying into
      both the post and the report: notifications flowing to the spawner
      rather than to the root is plausibly **by design, not a bug**, and a
      feedback item that says "my agents got lost" invites that answer. The
      narrower and much stronger claim is that **there is no way to see that
      an agent completed and its result went nowhere** — silence and "checked,
      found nothing" are indistinguishable, so the failure has no negative
      signal to trip on. That is the sentence to lead with.
      PUBLISH ORDER IS SETTLED: post 1 goes out before the survey is finished;
      the series updates behind it. Felix's call, made explicitly.
      OWNER: **Felix** on when post 1 is drafted and on whether step 4
      happens at all; the assistant drafts from the record on his word. NOT
      started on assistant initiative, because the brief above rules that
      drafts revived by willpower are the known failure mode and this repo
      waits for `/seed-check` or the R1 trigger.
      **中文摘要** — **系列：「当你委派出去的 agent 沉默了」**，你自己 2026-08-13
      定的计划：先复盘本次会话 → 调研别人是否遇到过 → 调研别人怎么解 → 尝试做一个
      更好的解法 → 反馈给 Claude Code 官方；并且**先发第一篇、系列后续再补**。
      **它和上面两篇卡住的草稿不一样**：本仓库自己的结论是「为话题开的草稿会停住，
      骑着刚做完的事写的会发出去」，而这一篇骑的是当天刚做完的事，**而且组装已经
      完成**——完整复盘在 `ai-chief-of-staff/reports/2026-08-13-agent-fanout-and-
      resume.md`，含时序、原文 transcript 证据、四条机制、四个诊断命令和数字。
      **两处收紧**：第 2 步先查 `anthropics/claude-code` 的 issue 列表再铺开搜；
      给官方的反馈**不要写成「我的 agent 丢了」**（通知流向生成者很可能是设计如此，
      这么写等于送对方一个现成回答），要写成**「没有任何办法看出一个 agent 完成了、
      而它的结果去了没人的地方」——沉默与『查过了没有』无法区分，这个失败没有负向
      信号**。**发布顺序已定**：第一篇先发，系列在后面补。**归你决定**何时起草，
      助手按你的话从记录里组装；**不自作主张开头**，因为上面那条 brief 判定「靠意志力
      硬救的草稿」正是已知的失败模式。
