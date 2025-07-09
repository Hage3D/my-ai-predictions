import { defineCollection, z } from 'astro:content';

const forecastsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.string(),
    predictions: z.object({
      'gpt-4o': z.string(),
      'gemini': z.string(),
      'claude': z.string(),
    }),
  }),
});

export const collections = {
  'forecasts': forecastsCollection,
};