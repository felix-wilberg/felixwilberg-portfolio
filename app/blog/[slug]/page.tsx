import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import { CMS_NAME } from '@/lib/constants';
import markdownToHtml from '@/lib/markdownToHtml';
import { formatDate } from '@/lib/api';
import PostBody from '@/app/components/PostBody';
import CoverImage from '@/app/components/CoverImage';

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }
  const content = await markdownToHtml(post.content || '');
  return (
    <main>
      <section>
        <h1 className="title font-semibold text-2xl tracking-tighter">
          {post.title}
        </h1>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.date)}
          </p>
        </div>
        {post.ogImage && (
          <CoverImage title={post.title} src={post.ogImage.url} />
        )}
        <article className="prose">
          <PostBody content={content} />
        </article>
      </section>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | ${CMS_NAME}`;

  if (!post.ogImage) {
    return {
      title,
      openGraph: {
        title
      }
    };
  }

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url]
    }
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug
  }));
}
