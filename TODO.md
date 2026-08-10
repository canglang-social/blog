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
      **中文摘要** — 保持开着，而且**现在的正确动作是等**。理由不是优先级，
      是机制：为话题开的草稿会停住，骑着刚做完的事写的会发出去；这两篇都是
      前一种，其中一篇已经压了 **40 天**。等 `/seed-check` 或 R1 触发器给
      入口，别靠意志力硬救。好消息是空section的原料并不缺，散在
      `[[JOB/2606Hunting]]`、6/29–7/2 的日复盘和 6/28 那篇文章里——
      **这是组装，不是从零写。**

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
