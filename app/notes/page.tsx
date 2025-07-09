import BlogPosts from '@/app/components/BlogPosts';

const Page = () => {
  return (
    <section>
      <h1 className="font-bold text-4xl mb-8 tracking-tighter">Notes</h1>
      <p className="mb-10 text-base/8">
        This blog and this website is a project on its own. I want to share
        thoughts, things that came into my mind and made me wonder, or learnings
        I gathered. I want to test new technologies and try out interesting
        ideas. I will grow this blog during the next weeks. If there is nothing
        here, please come back soon :)
      </p>
      <BlogPosts />
    </section>
  );
};

export default Page;
