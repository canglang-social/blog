import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { importUsage } from '../scripts/import-work-usage.mjs';

function fixture(t) {
  const root=fs.mkdtempSync(path.join(os.tmpdir(),'gallery-usage-'));
  t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
  fs.writeFileSync(path.join(root,'demo.md'),'---\nname: Demo\ngallery: {"name":{"en":"Demo","zh":"演示"}}\n---\nOriginal body stays here.\n');
  return root;
}
const row={work_id:'demo',coverage:'partial',recent_tokens:10,lifetime_tokens:20,recent_cached_input_tokens:4,lifetime_cached_input_tokens:8,window_start:'2026-08-15T00:00:00Z',window_end:'2026-09-14T00:00:00Z',measured_at:'2026-09-14T00:00:00Z'};
const packet = (...works)=>({schema_version:1,works});
test('sanitized import preserves content and is idempotent',t=>{
  const root=fixture(t);
  assert.equal(importUsage(packet({...row,private_path:'/synthetic/private',chat:'not public'}),root),1);
  const content=fs.readFileSync(path.join(root,'demo.md'),'utf8');
  assert.ok(content.includes('Original body stays here.'));assert.ok(!content.includes('private_path'));assert.ok(!content.includes('not public'));
  assert.equal(importUsage(packet(row),root),0);
});
test('missing and older observations cannot destroy recorded usage',t=>{
  const root=fixture(t);importUsage(packet(row),root);const before=fs.readFileSync(path.join(root,'demo.md'),'utf8');
  assert.throws(()=>importUsage(packet({...row,coverage:'unknown'}),root),/cannot erase/);
  assert.throws(()=>importUsage(packet({...row,measured_at:'2026-09-13T00:00:00Z'}),root),/older/);
  assert.equal(fs.readFileSync(path.join(root,'demo.md'),'utf8'),before);
});
test('invalid batch is validated before any file changes',t=>{
  const root=fixture(t),before=fs.readFileSync(path.join(root,'demo.md'),'utf8');
  assert.throws(()=>importUsage(packet(row,{...row,work_id:'../outside'}),root),/Invalid/);
  assert.equal(fs.readFileSync(path.join(root,'demo.md'),'utf8'),before);
  assert.throws(()=>importUsage(packet({...row,recent_tokens:30}),root),/exceeds lifetime/);
  assert.throws(()=>importUsage(packet({...row,recent_cached_input_tokens:11}),root),/Cache exceeds/);
});
