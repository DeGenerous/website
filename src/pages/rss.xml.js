import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

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
			content: sanitizeHtml(parser.render(post.body)),
		})),
	});
}
