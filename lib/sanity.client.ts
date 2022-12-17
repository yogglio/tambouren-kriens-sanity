import "server-only";

import { apiVersion, dataset, projectId, useCdn } from "lib/sanity.api";
import {
  type Post,
  type Settings,
  indexQuery,
  Page,
  pageBySlugQuery,
  pageSlugsQuery,
  postBySlugQuery,
  postSlugsQuery,
  settingsQuery,
} from "lib/sanity.queries";
import { createClient } from "next-sanity";

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null;

export async function getSettings(): Promise<Settings> {
  if (client) {
    return (await client.fetch(settingsQuery)) || {};
  }
  return {};
}

export async function getAllPosts(): Promise<Post[]> {
  if (client) {
    return (await client.fetch(indexQuery)) || [];
  }
  return [];
}

export async function getAllPostsSlugs(): Promise<Pick<Post, "slug">[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(postSlugsQuery)) || [];
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}

export async function getPostBySlug(slug: string): Promise<Post> {
  if (client) {
    return (await client.fetch(postBySlugQuery, { slug })) || ({} as any);
  }
  return {} as any;
}

export async function getAllPagesSlugs(): Promise<Pick<Page, any>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(pageSlugsQuery)) || [];
    return slugs.map((slug) => ({ slug: [slug] }));
  }
  return [];
}

export async function getPageBySlug(slug: string): Promise<Page> {
  if (client) {
    return (await client.fetch(pageBySlugQuery, { slug })) || ({} as any);
  }
  return {} as any;
}
