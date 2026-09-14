// Imports only sanitized aggregates. Source logs and private bindings stay outside this repository.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const input = process.argv[2];
if (!input) throw new Error('Usage: node scripts/import-work-usage.mjs <sanitized-public-usage.json>');
const packet = JSON.parse(fs.readFileSync(input, 'utf8'));
if (packet.schema_version !== 1 || !Array.isArray(packet.works)) throw new Error('Unsupported usage packet');
const root = fileURLToPath(new URL('../src/content/projects/', import.meta.url));
const pending = [];
const seen = new Set();
for (const row of packet.works) {
  if (!/^[a-z0-9-]+$/.test(row.work_id) || seen.has(row.work_id)) throw new Error('Invalid or duplicate work ID');
  seen.add(row.work_id);
  if (!['unknown','partial','complete'].includes(row.coverage)) throw new Error('Invalid coverage');
  const n = value => {if (value !== null && (!Number.isSafeInteger(value) || value < 0)) throw new Error('Invalid count');return value === 0 && row.coverage === 'partial' ? null : value};
  const stamp = value => {if (typeof value !== 'string' || !/(Z|[+-]\d\d:\d\d)$/.test(value) || !Number.isFinite(Date.parse(value))) throw new Error('Invalid timestamp');return value};
  const unknown=row.coverage==='unknown';
  const usage={recent:unknown?null:n(row.recent_tokens), lifetime:unknown?null:n(row.lifetime_tokens), coverage:row.coverage,
    measuredAt:unknown?null:stamp(row.measured_at), start:unknown?null:stamp(row.window_start),end:unknown?null:stamp(row.window_end)};
  if(!unknown){
    if(Date.parse(usage.start)>=Date.parse(usage.end))throw new Error('Invalid window');
    for(const [dest,source] of [['measuredFrom','measured_from'],['measuredThrough','measured_through']])if(row[source])usage[dest]=stamp(row[source]);
    for(const [dest,source] of [['recentCached','recent_cached_input_tokens'],['lifetimeCached','lifetime_cached_input_tokens']])if(row[source]!=null)usage[dest]=n(row[source]);
  }
  const filename=path.join(root,`${row.work_id}.md`), before=fs.readFileSync(filename,'utf8');
  const match=/^gallery: (\{[\s\S]*?\})\n---/m.exec(before);
  if(!match)throw new Error(`No gallery record: ${row.work_id}`);
  const gallery=JSON.parse(match[1]);
  if(gallery.usage?.measuredAt&&usage.measuredAt&&Date.parse(gallery.usage.measuredAt)>Date.parse(usage.measuredAt))throw new Error('Refusing older snapshot');
  gallery.usage=usage;
  const next=before.slice(0,match.index)+'gallery: '+JSON.stringify(gallery,null,2).replaceAll('\n','\n  ')+'\n---'+before.slice(match.index+match[0].length);
  if(next!==before)pending.push([filename,next]);
}
for(const [filename,next] of pending)fs.writeFileSync(filename,next);
console.log(`Updated ${pending.length} work records; no private source fields imported.`);
