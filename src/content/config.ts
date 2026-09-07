import { defineCollection, z } from 'astro:content';

const backendCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    order: z.number().default(1),
    featured: z.boolean().default(false),
    role: z.string(),
    technologies: z.array(z.string()),
    metrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })),
    highlights: z.array(z.string()),
    architectureType: z.string(),
  }),
});

export const collections = {
  backend: backendCollection,
};
