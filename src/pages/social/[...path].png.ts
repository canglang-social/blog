import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { localeFromId, slugFromId } from '../../i18n/ui';
import { isRasterImage, postCardPath, renderSocialCard } from '../../lib/social-card.mjs';

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection('blog');
  const cards = posts.filter(({ data }) => !isRasterImage(data.ogImage) && !isRasterImage(data.heroImage))
    .map((post) => {
      const lang = localeFromId(post.id);
      return {
        params: { path: postCardPath(lang, slugFromId(post.id), post.data.title).slice('/social/'.length, -4) },
        props: { title: post.data.title, lang, site: false },
      };
    });
  return [...cards, ...(['en', 'zh'] as const).map((lang) => ({
    params: { path: `site-${lang}` },
    props: { title: lang === 'zh' ? '用 AI 做东西，也记录过程。' : 'Making things with AI.\nSharing what I learn.', lang, site: true },
  }))];
};

export const GET: APIRoute = async ({ props }) => {
  const png = await renderSocialCard({ title: props.title, lang: props.lang, site: props.site });
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
