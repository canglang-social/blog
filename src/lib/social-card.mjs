import { createHash } from 'node:crypto';
import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import opentype from 'opentype.js';
import sharp from 'sharp';

export const CARD_WIDTH = 1200;
export const CARD_HEIGHT = 630;
const DESIGN_VERSION = 'v2-blog-serif';
const fontBytes = readFileSync(resolve('src/assets/social-font/NotoSerifSC-Regular.otf'));
const font = opentype.parse(fontBytes.buffer.slice(fontBytes.byteOffset, fontBytes.byteOffset + fontBytes.byteLength));

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

function wrapText(text, size, width) {
  const lines = [];
  for (const paragraph of text.split('\n')) {
    let line = '';
    const tokens = [];
    for (const { segment } of new Intl.Segmenter(undefined, { granularity: 'word' }).segment(paragraph)) {
      if (/^[，。！？、；：,.!?;:]+$/.test(segment) && tokens.length) tokens[tokens.length - 1] += segment;
      else tokens.push(segment);
    }
    for (const token of tokens) {
      if (font.getAdvanceWidth(line + token, size) <= width) { line += token; continue; }
      if (line.trim()) lines.push(line.trim());
      line = token.trimStart();
      if (font.getAdvanceWidth(line, size) > width) {
        let part = '';
        for (const char of line) {
          if (font.getAdvanceWidth(part + char, size) > width) { lines.push(part); part = ''; }
          part += char;
        }
        line = part;
      }
    }
    lines.push(line.trim());
  }
  return lines;
}

async function textLayer(text, size, color, width, maxHeight, balance = false) {
  for (let fontSize = size; fontSize >= 22; fontSize -= 2) {
    let lines = wrapText(text, fontSize, width);
    const lineHeight = fontSize * 1.4;
    const height = Math.ceil(lines.length * lineHeight);
    if (height > maxHeight) continue;
    if (balance && lines.length > 1) {
      for (let balancedWidth = width - 40; balancedWidth >= width / 2; balancedWidth -= 40) {
        const candidate = wrapText(text, fontSize, balancedWidth);
        if (candidate.length > lines.length) break;
        lines = candidate;
      }
    }
    // Convert the bundled font to outlines: no Pango, installed fonts or
    // host-specific font-family resolution can silently change the artwork.
    const paths = lines.map((line, index) => {
      const path = font.getPath(line, 0, fontSize + index * lineHeight, fontSize);
      // Preserve getPath's screen coordinates and every curve explicitly.
      const data = path.commands.map((command) => {
        for (const [key, value] of Object.entries(command)) {
          if (key !== 'type' && !Number.isFinite(value)) throw new Error(`Invalid font coordinate: ${key}=${value}`);
        }
        if (command.type === 'Z') return 'Z';
        if (command.type === 'M' || command.type === 'L') return `${command.type}${command.x} ${command.y}`;
        if (command.type === 'C') return `C${command.x1} ${command.y1} ${command.x2} ${command.y2} ${command.x} ${command.y}`;
        if (command.type === 'Q') return `Q${command.x1} ${command.y1} ${command.x} ${command.y}`;
        throw new Error(`Unsupported font outline command: ${command.type}`);
      }).join(' ');
      return `<path d="${data}" fill="${color}"/>`;
    }).join('');
    const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">${paths}</svg>`);
    return { input: await sharp(svg).png().toBuffer(), height };
  }
  throw new Error('Social-card title exceeds the available space; shorten its title or update the card layout.');
}

export async function renderSocialCard({ title, lang = 'en', site = false }) {
  const brand = await textLayer(lang === 'zh' ? '沧浪' : 'canglang', 32, '#b52f2e', 800, 50);
  const main = await textLayer(title, lang === 'zh' ? 66 : 64, '#1e1c17', 1040, 340, true);
  const footer = await textLayer(site ? 'felixhan.dev' : `felixhan.dev  /  ${lang === 'zh' ? '写作' : 'Writing'}`, 24, '#6e6a60', 850, 50);
  const motif = Buffer.from('<svg width="1200" height="630"><path d="M80 119h1040M80 526h1040" stroke="#e3e0d4" stroke-width="2"/></svg>');
  return sharp({ create: { width: CARD_WIDTH, height: CARD_HEIGHT, channels: 3, background: '#f7f5ef' } })
    .composite([
      { input: motif, left: 0, top: 0 },
      { input: brand.input, left: 80, top: 61 },
      { input: main.input, left: 80, top: 155 + Math.round((320 - main.height) / 2) },
      { input: footer.input, left: 80, top: 559 },
    ]).png().toBuffer();
}
