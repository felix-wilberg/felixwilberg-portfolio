import { getAllPosts } from '@/lib/api';

export const baseUrl = 'https://felixwilberg.com';

export default async function sitemap() {
  const blogs = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date
  }));

  const routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }));

  return [...routes, ...blogs];
}
