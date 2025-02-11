import BlogPosts from '@/app/components/BlogPosts';

const Page = () => {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <BlogPosts />
    </section>
  );
};

export default Page;
