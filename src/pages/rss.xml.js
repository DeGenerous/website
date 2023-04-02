import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {
	const posts = await getCollection('blog');
	return rss({
		title: "DeGenerousDao Blog",
		description: "DeGenerousDao Blog",
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			pubDate: post.data.publish_date,
			link: `/blog/${post.slug}/`,
		})),
	});
}
