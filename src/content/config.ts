import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    author: z.string(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
    headings: z
      .array(
        z.object({
          depth: z.number(),
          slug: z.string(),
          text: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = { blog };
