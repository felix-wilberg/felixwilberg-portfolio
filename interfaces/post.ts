import { type Author } from '@/interfaces/author';

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage?: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
