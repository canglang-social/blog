import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const file = (path) => new URL(`../${path}`, import.meta.url);
const read = (path) => readFile(file(path), 'utf8');
const workflows = ['draft', 'refine', 'publish'];

test('Codex workflows are directly discoverable from repository guidance', async () => {
  const agents = await read('AGENTS.md');
  for (const workflow of workflows) {
    assert.match(agents, new RegExp(`\\$blog-${workflow}\\b`));
    assert.match(agents, new RegExp(`\\.agents/skills/blog-${workflow}`));
    assert.match(agents, new RegExp(`workflows/${workflow}\\.md`));
  }
  assert.match(agents, /No repository-specific subagent definitions, hooks, MCP servers/);
});

test('provider adapters are thin and resolve the same canonical workflows', async () => {
  const names = [];
  for (const workflow of workflows) {
    const skillPath = `.agents/skills/blog-${workflow}/SKILL.md`;
    const commandPath = `.claude/commands/${workflow}.md`;
    const canonicalPath = `workflows/${workflow}.md`;
    const skill = await read(skillPath);
    const command = await read(commandPath);
    const canonical = await read(canonicalPath);
    assert.match(skill, /^---\nname: blog-[a-z-]+\ndescription: .+\n---\n/);
    assert.match(skill, new RegExp(`\\.\\./\\.\\./\\.\\./workflows/${workflow}\\.md`));
    assert.match(command, new RegExp(`\\.\\./\\.\\./workflows/${workflow}\\.md`));
    assert.equal(
      await readFile(new URL(`../../../workflows/${workflow}.md`, file(skillPath)), 'utf8'),
      canonical,
    );
    assert.equal(
      await readFile(new URL(`../../workflows/${workflow}.md`, file(commandPath)), 'utf8'),
      canonical,
    );
    assert.ok(skill.split('\n').length < 14, `${workflow} Codex adapter is too large`);
    assert.ok(command.split('\n').length < 12, `${workflow} Claude adapter is too large`);
    names.push(skill.match(/^name: (.+)$/m)?.[1]);
  }
  assert.equal(new Set(names).size, workflows.length);
});

test('draft requires an explicit authorship choice before any write', async () => {
  const draft = await read('workflows/draft.md');
  assert.match(draft, /require one explicit choice/);
  assert.match(draft, /return\n   `DECISION_REQUIRED` and stop without creating or modifying a draft/);
  assert.match(draft, /Never\n   infer or default authorship/);
  assert.doesNotMatch(draft, /does not answer, use `felix-draft`/);
});

test('canonical workflows contain no provider invocation syntax', async () => {
  for (const workflow of workflows) {
    const canonical = await read(`workflows/${workflow}.md`);
    assert.doesNotMatch(canonical, /\$blog-(?:draft|refine|publish)\b/);
    assert.doesNotMatch(canonical, /\/(?:draft|refine|publish)\b/);
    assert.doesNotMatch(canonical, /\.agents\/|\.claude\//);
  }
});

test('publish fails closed across private and external boundaries', async () => {
  const publish = await read('workflows/publish.md');
  assert.match(publish, /stop before any move or deletion/);
  assert.match(publish, /owner explicitly confirms that the provenance has been saved\s+durably/);
  assert.match(publish, /must not\n   infer a vault path, read another repository, or write outside Blog/);
  assert.match(publish, /Strip private authorship,\n   source material comments, source trace/);
  assert.match(publish, /Do not access another\n   repository, initiate a session/);
  assert.match(publish, /deploy, or post externally/);
});

test('canonical doctrine retains core privacy and language invariants', async () => {
  const doctrine = await read('editor.md');
  assert.match(doctrine, /One language per published page/);
  assert.match(doctrine, /The mark is PRIVATE and it must survive publication/);
  assert.match(doctrine, /Every draft declares `authorship::`/);
});
