import { groq } from "next-sanity";

// Settings
export const settingsQuery = groq`*[_type == "settings"][0]{title}`;

// Page
const pageFields = groq`
  _id,
  title,
  excerpt,
  "slug": slug.current,
`;

export const pageSlugsQuery = groq`
*[_type == "page" && defined(slug.current)][].slug.current
`;

export const pageBySlugQuery = groq`
*[_type == "page" && slug.current == $slug][0] {
  content,
  ${pageFields}
}
`;

// Post
const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`;

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`;

export const postQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`;

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  content,
  ${postFields}
}
`;

export interface Author {
  name?: string;
  picture?: any;
}

export interface Post {
  _id: string;
  title?: string;
  coverImage?: any;
  date?: string;
  excerpt?: string;
  author?: Author;
  slug?: string;
  content?: any;
}

export interface Settings {
  title?: string;
  description?: any[];
  ogImage?: {
    title?: string;
  };
}

export interface Page {
  _id: string;
  title?: string;
  excerpt?: string;
  slug?: string;
  content?: any;
}
