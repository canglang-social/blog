import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			// Share-card image for social crawlers; use a raster format (SVG
			// heroes don't render in link previews). Falls back to heroImage.
			ogImage: z.optional(image()),
			tags: z.array(z.string()).default([]),
			// Earns a slot in the landing's Writing section — the Editor's
			// curation call (portfolio step 5), not a chronological feed.
			featured: z.boolean().default(false),
		}),
});

const projects = defineCollection({
	// Case-study pages for the project-led site. Copy is packaged upstream in
	// forge (career/portfolio/public/) — facts are fixed there, never here.
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		// Short name for cards; title is the full case-study heading.
		name: z.string(),
		title: z.string(),
		tagline: z.string(),
		stack: z.string(),
		metric: z.string(),
		metricNote: z.string().optional(),
		demoUrl: z.url().optional(),
		repoUrl: z.url().optional(),
		order: z.number().default(0),
	}),
});

export const collections = { blog, projects };
