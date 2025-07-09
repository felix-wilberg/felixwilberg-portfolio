import BlogPosts from '@/app/components/BlogPosts';
import { getPostsAmount } from '@/lib/api';

export default function Page() {
  const numPosts = getPostsAmount();
  let posts = false;
  if (numPosts != 0) {
    posts = true;
  }

  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        Hej, I&#39;m Felix! 👋
      </h1>
      <p className="mb-4 text-base/8">
        {`I'm a Business Informatics student at TU Wien and currently finishing my
        Master's thesis. I'm passionate about web development, product management
        and cycling. I'm always looking for new challenges and opportunities to
        learn and grow.`}
      </p>
      {posts && (
        <div>
          <h2 className="mt-8 mb-4 text-xl font-semibold tracking-tighter">
            Recent Blog Posts
          </h2>
          <div className="my=8">
            <BlogPosts />
          </div>
        </div>
      )}
    </section>
  );
}
