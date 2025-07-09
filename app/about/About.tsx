import Link from 'next/link';

const About = () => {
  return (
    <section>
      <h1 className="font-bold text-4xl mb-8 tracking-tighter">About me</h1>
      <p className="mb-10 text-base/8">
        I&#39;m a Business Informatics student at TU Wien and currently
        finishing my Master&#39;s thesis. I&#39;m passionate about web
        development, product management and cycling. I&#39;m always looking for
        new challenges and opportunities to learn and grow.
      </p>

      <h2 className="font-semibold text-2xl mb-4 mt-2 tracking-tighter">
        About this page
      </h2>
      <p className="mb-10 text-base/8">
        {`This page is built with Next.js and Tailwind CSS and shadcn/ui. It is a
        static site, which is generated at build time and hosted by Vercel. You
        can explore the code for this page on `}
        <Link
          href="https://github.com/felix-wilberg/felixwilberg-portfolio"
          className="underline"
        >
          GitHub
        </Link>
        .
      </p>
    </section>
  );
};
export default About;
