import { createHash } from 'node:crypto';
import { resolve } from 'node:path';
import sharp from 'sharp';

export const CARD_WIDTH = 1200;
export const CARD_HEIGHT = 630;
const DESIGN_VERSION = 'v1';
const fontfile = resolve('src/assets/social-font/NotoSansSC-Regular.otf');

export function isRasterImage(image) {
  return Boolean(image && ['png', 'jpg', 'jpeg', 'webp', 'gif'].includes(image.format));
}

export function postCardPath(lang, slug, title) {
  const hash = createHash('sha256').update(`${DESIGN_VERSION}:${lang}:${title}`).digest('hex').slice(0, 12);
  return `/social/${lang}/${slug}-${hash}.png`;
}

export function generatedCardPath({ title, lang, pathname }) {
  const match = pathname.match(/^\/(?:zh\/)?blog\/(.+?)\/?$/);
  return match ? postCardPath(lang, match[1], title) : `/social/site-${lang}.png`;
}

const escapeMarkup = (value) => value.replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;',
}[char]));

async function textLayer(text, size, color, width, maxHeight, balance = false) {
  for (let fontSize = size; fontSize >= 22; fontSize -= 2) {
    const { data, info } = await sharp({ text: {
      text: `<span foreground="${color}">${escapeMarkup(text)}</span>`,
      font: `Noto Sans SC ${fontSize}`, fontfile, width, rgba: true,
      wrap: 'word-char', spacing: 8,
    } }).png().toBuffer({ resolveWithObject: true });
    if (info.height <= maxHeight) {
      let result = { input: data, height: info.height };
      // Narrow a multiline block until another line would appear, avoiding
      // a nearly full first line followed by only one or two Chinese words.
      if (balance && info.height > fontSize * 1.5) {
        for (let balancedWidth = width - 40; balancedWidth >= width / 2; balancedWidth -= 40) {
          const candidate = await sharp({ text: {
            text: `<span foreground="${color}">${escapeMarkup(text)}</span>`,
            font: `Noto Sans SC ${fontSize}`, fontfile, width: balancedWidth,
            rgba: true, wrap: 'word-char', spacing: 8,
          } }).png().toBuffer({ resolveWithObject: true });
          if (candidate.info.height > info.height + fontSize / 4) break;
          result = { input: candidate.data, height: candidate.info.height };
        }
      }
      return result;
    }
  }
  throw new Error('Social-card title exceeds the available space; shorten its title or update the card layout.');
}

export async function renderSocialCard({ title, lang = 'en', site = false }) {
  const brand = await textLayer('Felix Han', 28, '#15324f', 800, 50);
  const main = await textLayer(title, lang === 'zh' ? 66 : 64, '#15324f', 1040, 340, true);
  const footer = await textLayer(site ? 'felixhan.dev' : `felixhan.dev  /  ${lang === 'zh' ? '写作' : 'Writing'}`, 24, '#546b80', 850, 50);
  const motif = Buffer.from('<svg width="1200" height="630"><rect x="0" y="0" width="1200" height="8" fill="#087c72"/><path d="M1060 64h58v58h-58zm-26 26h58v58h-58z" fill="none" stroke="#087c72" stroke-width="3"/><path d="M80 526h1040" stroke="#cfdae5" stroke-width="2"/></svg>');
  return sharp({ create: { width: CARD_WIDTH, height: CARD_HEIGHT, channels: 3, background: '#f5f8fc' } })
    .composite([
      { input: motif, left: 0, top: 0 },
      { input: brand.input, left: 80, top: 61 },
      { input: main.input, left: 80, top: 155 + Math.round((320 - main.height) / 2) },
      { input: footer.input, left: 80, top: 559 },
    ]).png().toBuffer();
}
