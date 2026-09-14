import { z } from 'astro/zod';
const text = z.object({ en: z.string().min(1), zh: z.string().min(1) });
const count = z.number().int().nonnegative().nullable();
const timestamp = z.string().datetime({ offset:true }).nullable();
export const gallerySchema = z.object({
  name: text, inscription: text, summary: text, purpose: text, contribution: text,
  kind: z.enum(['project', 'task-group', 'writing-group']),
  status: z.enum(['active', 'exploring', 'paused', 'archived', 'unknown']),
  statusCheckedAt: z.string().nullable(),
  focus: text.nullish(), next: text.nullish(), pauseReason: text.nullish(),
  topics: z.array(z.string()),
  milestones: z.array(z.object({ id: z.string(), date: z.string().nullable(), title: text, body: text })),
  relatedSlugs: z.array(z.string()),
  links: z.array(z.object({ label: text, url: z.url() })),
  usage: z.object({
    recent: count, lifetime: count,
    coverage: z.enum(['complete', 'partial', 'unknown']),
    measuredAt: timestamp, start: timestamp, end: timestamp,
    measuredFrom: timestamp.optional(), measuredThrough: timestamp.optional(),
    recentCached: count.optional(), lifetimeCached: count.optional(),
  }).default({ recent: null, lifetime: null, coverage: 'unknown', measuredAt: null, start: null, end: null }),
}).superRefine((work, ctx) => {
  if (work.status === 'paused' && !work.pauseReason) ctx.addIssue({code:'custom', message:'Paused work needs a public reason'});
  if (work.status !== 'unknown' && !work.statusCheckedAt) ctx.addIssue({code:'custom', message:'Known status needs a checked date'});
  if (new Set(work.milestones.map(m => m.id)).size !== work.milestones.length) ctx.addIssue({code:'custom', message:'Duplicate milestone IDs'});
  const u = work.usage;
  if (u.coverage === 'unknown' && (u.recent !== null || u.lifetime !== null)) ctx.addIssue({code:'custom', message:'Unknown usage cannot have a numeric total'});
  if (u.coverage !== 'unknown' && (!u.measuredAt || !u.start || !u.end)) ctx.addIssue({code:'custom', message:'Measured usage needs timestamps'});
  if (u.coverage === 'partial' && (u.recent === 0 || u.lifetime === 0)) ctx.addIssue({code:'custom',message:'Zero requires complete coverage; use null for unknown usage'});
  if (u.start && u.end && Date.parse(u.start) >= Date.parse(u.end)) ctx.addIssue({code:'custom',message:'Usage window must advance'});
});
export type GalleryWork = z.infer<typeof gallerySchema>;
