import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(10),
    excerpt: z.string().min(20),
    category: z.enum(['Habari', 'Trends', 'Maisha', 'Burudani', 'Social Media']),
    categorySlug: z.string(),
    author: z.string(),
    authorSlug: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    featuredImage: z.string(),
    featuredImageAlt: z.string().min(10),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { news };
