import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');
const workflows = ['draft', 'refine', 'publish'];

test('Codex workflows are directly discoverable from repository guidance', async () => {
  const agents = await read('AGENTS.md');
  for (const workflow of workflows) {
    assert.match(agents, new RegExp(`\\$blog-${workflow}\\b`));
    assert.match(agents, new RegExp(`\\.agents/skills/blog-${workflow}`));
  }
  assert.match(agents, /No repository-specific subagent definitions, hooks, MCP servers/);
});

test('repo skills have valid unique names and canonical references', async () => {
  const names = [];
  for (const workflow of workflows) {
    const skill = await read(`.agents/skills/blog-${workflow}/SKILL.md`);
    assert.match(skill, /^---\nname: blog-[a-z-]+\ndescription: .+\n---\n/);
    assert.match(skill, /`AGENTS\.md`/);
    assert.match(skill, /`editor\.md`/);
    names.push(skill.match(/^name: (.+)$/m)?.[1]);
  }
  assert.equal(new Set(names).size, workflows.length);
});

test('Claude commands are thin adapters to the canonical skills', async () => {
  for (const workflow of workflows) {
    const command = await read(`.claude/commands/${workflow}.md`);
    assert.match(command, new RegExp(`\\.agents/skills/blog-${workflow}/SKILL\\.md`));
    assert.match(command, /thin adapter/);
    assert.ok(command.split('\n').length < 12, `${workflow} adapter is too large`);
  }
});

test('publish fails closed across private and external boundaries', async () => {
  const publish = await read('.agents/skills/blog-publish/SKILL.md');
  assert.match(publish, /stop before any move or deletion/);
  assert.match(publish, /owner explicitly confirms that the provenance has been saved durably/);
  assert.match(publish, /must not infer\n   a vault path, read another repository, or write outside Blog/);
  assert.match(publish, /Strip private authorship, source material comments,\n   source trace/);
  assert.match(publish, /Do not access another\n   repository, initiate a session/);
  assert.match(publish, /Never deploy the website or post externally/);
});

test('canonical doctrine retains core privacy and language invariants', async () => {
  const doctrine = await read('editor.md');
  assert.match(doctrine, /One language per published page/);
  assert.match(doctrine, /The mark is PRIVATE and it must survive publication/);
  assert.match(doctrine, /Every draft declares `authorship::`/);
});
