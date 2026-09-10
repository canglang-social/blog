import assert from 'node:assert/strict';
import test from 'node:test';
import sharp from 'sharp';
import { generatedCardPath, isRasterImage, postCardPath, renderSocialCard } from '../src/lib/social-card.mjs';

test('social images preserve supported raster formats, not SVG or AVIF', () => {
  for (const format of ['png', 'jpg', 'jpeg', 'webp', 'gif']) assert.equal(isRasterImage({ format }), true);
  for (const image of [undefined, { format: 'svg' }, { format: 'avif' }]) assert.equal(isRasterImage(image), false);
});

test('localized post metadata resolves to the same title-versioned endpoint', () => {
  for (const lang of ['en', 'zh']) {
    for (const trailing of ['', '/']) {
      assert.equal(generatedCardPath({ title: 'A title', lang, pathname: `${lang === 'zh' ? '/zh' : ''}/blog/a-post${trailing}` }), postCardPath(lang, 'a-post', 'A title'));
    }
    assert.equal(generatedCardPath({ title: 'Index', lang, pathname: `${lang === 'zh' ? '/zh' : ''}/blog/` }), `/social/site-${lang}.png`);
  }
  assert.notEqual(postCardPath('en', 'post', 'Old title'), postCardPath('en', 'post', 'New title'));
});

test('bundled font renders English, Chinese and literal markup into complete PNG cards', async () => {
  for (const [lang, title] of [
    ['en', 'The AI picked the wrong project'],
    ['zh', 'AI 选错了项目：我问的是生意，它介绍的却是工作流'],
    ['en', 'A long title: checking <project> context & the exact source before sharing an AI-generated answer with a friend'],
  ]) {
    const png = await renderSocialCard({ title, lang });
    const metadata = await sharp(png).metadata();
    assert.equal(metadata.format, 'png');
    assert.equal(metadata.width, 1200);
    assert.equal(metadata.height, 630);
    assert.ok(png.length < 5_000_000, 'X card image must remain below 5 MB');
  }
});
