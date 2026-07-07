import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../../consts';
import { localeFromId, slugFromId } from '../../i18n/ui';

export async function GET(context) {
	const posts = (await getCollection('blog')).filter(
		(post) => localeFromId(post.id) === 'zh',
	);
	return rss({
		title: `${SITE_TITLE} · 中文`,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/zh/blog/${slugFromId(post.id)}/`,
		})),
	});
}
