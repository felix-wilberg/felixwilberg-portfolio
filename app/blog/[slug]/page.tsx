import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import { formatDate } from '@/lib/api';
import { baseUrl } from '@/app/sitemap';
import CustomMDX from '@/app/components/mdx';
import CoverImage from '@/app/components/CoverImage';

export const generateMetadata = async (props: Params): Promise<Metadata> => {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const { title, date: publishedTime, excerpt: description, ogImage } = post;
  const ogImageNew = ogImage
    ? ogImage.url
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImageNew
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageNew]
    }
  };
};

export const generateStaticParams = () => {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug
  }));
};

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

const Post = async (props: Params) => {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <main>
      <section>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.title,
              datePublished: post.date,
              dateModified: post.date,
              description: post.excerpt,
              image: post.ogImage
                ? `${baseUrl}${post.ogImage.url}`
                : `/og?title=${encodeURIComponent(post.title)}`,
              url: `${baseUrl}/blog/${post.slug}`,
              author: {
                '@type': 'Person',
                name: 'My Portfolio'
              }
            })
          }}
        />
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
          <CustomMDX source={post.content} />
        </article>
      </section>
    </main>
  );
};

export default Post;
