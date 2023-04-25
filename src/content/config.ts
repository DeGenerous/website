import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		publish_date: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		banner: z.string(),
		draft: z.boolean()
	}),
});

export const collections = { blog };