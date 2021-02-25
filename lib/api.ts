import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "posts");

export interface IPost {
  title?: string;
  date?: string;
  slug?: string;
  author?: string;
  coverImage?: string;
  excerpt?: string;
  content?: string;
}

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields = []): IPost {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts: IPost[] = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1: IPost, post2: IPost) => (post1.date > post2.date ? -1 : 1));
  // sort posts by date in descending order
  return posts;
}

export function getLatestPosts(fields = [], number: number) {
  const slugs = getPostSlugs();
  const posts: IPost[] = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1: IPost, post2: IPost) => (post1.date > post2.date ? -1 : 1));
  // sort posts by date in descending order
  const slicedPosts = posts.slice(0, number);
  return slicedPosts;
}
