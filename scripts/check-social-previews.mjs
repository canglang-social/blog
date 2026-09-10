import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

async function htmlFiles(root) {
  const entries = await readdir(root, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => entry.isDirectory()
    ? htmlFiles(join(root, entry.name))
    : entry.name.endsWith('.html') ? [join(root, entry.name)] : []));
  return files.flat();
}
const imageCache = new Map();
// These existing standalone documents are copied verbatim from public/ and
// do not use BaseHead. This repair does not rewrite their content or metadata.
const standaloneDocuments = new Set(['dist/atlas/index.html', 'dist/zh/atlas/index.html']);
let pages = 0;
for (const file of await htmlFiles('dist')) {
  const html = await readFile(file, 'utf8');
  const meta = (name) => html.match(new RegExp(`<meta (?:property|name|itemprop)="${name}" content="([^"]+)"`))?.[1];
  const og = meta('og:image');
  if (!og && (standaloneDocuments.has(file) || /http-equiv=["']refresh["']/i.test(html))) continue;
  assert.ok(og, `${file}: missing social image metadata`);
  assert.equal(meta('twitter:image'), og, `${file}: OG/Twitter image mismatch`);
  assert.equal(meta('image'), og, `${file}: microdata image mismatch`);
  assert.ok(!og.includes('blog-placeholder'), `${file}: Astro starter image remains`);
  const url = new URL(og);
  assert.equal(url.origin, 'https://felixhan.dev', `${file}: image must use the public absolute origin`);
  if (!imageCache.has(og)) {
    const bytes = await readFile(join('dist', decodeURIComponent(url.pathname)));
    const image = await sharp(bytes).metadata();
    assert.ok(['png', 'jpeg', 'webp', 'gif'].includes(image.format), `${file}: unsupported social image format`);
    assert.ok(bytes.length < 5_000_000, `${file}: social image exceeds 5 MB`);
    if (url.pathname.startsWith('/social/')) {
      assert.equal(image.format, 'png');
      assert.equal(image.width, 1200);
      assert.equal(image.height, 630);
    }
    imageCache.set(og, image);
  }
  const image = imageCache.get(og);
  assert.equal(Number(meta('og:image:width')), image.width, `${file}: wrong image width`);
  assert.equal(Number(meta('og:image:height')), image.height, `${file}: wrong image height`);
  assert.ok(meta('og:image:alt') && meta('twitter:image:alt'), `${file}: missing image description`);
  pages++;
}
assert.ok(pages > 0, 'No built pages checked');
console.log(`Social preview check passed: ${pages} HTML pages, ${imageCache.size} local raster images; absolute matching URLs, dimensions and no Astro starter fallback.`);
