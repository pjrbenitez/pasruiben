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

const tradingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    strategyType: z.string(),
    platform: z.string(),
    instruments: z.array(z.string()),
    timeframe: z.string(),
    order: z.number().default(1),
    featured: z.boolean().default(false),
    metrics: z.object({
      profitFactor: z.number(),
      sharpeRatio: z.number(),
      sortinoRatio: z.number(),
      maxDrawdown: z.string(),
      winRate: z.string(),
      totalTrades: z.number(),
      backtestPeriod: z.string(),
    }),
    riskManagement: z.array(z.string()),
    technologies: z.array(z.string()),
    highlights: z.array(z.string()),
    equityCurve: z.array(z.number()),
  }),
});

export const collections = {
  backend: backendCollection,
  trading: tradingCollection,
};
