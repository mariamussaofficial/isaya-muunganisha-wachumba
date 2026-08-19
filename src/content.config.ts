import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(10),
    seoTitle: z.string().min(10).max(65).optional(),
    excerpt: z.string().min(20),
    seoDescription: z.string().min(20).max(160).optional(),
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
