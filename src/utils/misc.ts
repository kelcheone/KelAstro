import type { MarkdownInstance } from "astro";

export interface Frontmatter {
  title: string;
  description: string; // Transform string to Date object
  pubDate: Date;
  updatedDate: Date;
  heroImage: string;
  tags: string[];
  draft: boolean;
}

export function sortDateDescending(arg: MarkdownInstance<Frontmatter>[]) {
  return arg.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).getTime() -
      new Date(a.frontmatter.pubDate).getTime()
  );
}

export function getAllUniqueTags(arg: MarkdownInstance<Frontmatter>[]) {
  return Array.from(
    new Set(arg.map((e) => e.frontmatter.tags).flat()).values()
  );
}

export function capitalizeString(arg: string) {
  return arg[0].toUpperCase() + arg.slice(1);
}
