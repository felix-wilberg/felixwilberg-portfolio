import Link from 'next/link';
import { LuArrowUpRight } from 'react-icons/lu';

const Footer = () => {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <Link
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/felix-wilberg/felixwilberg-portfolio"
          >
            <LuArrowUpRight />
            <p className="ml-2 h-7">github</p>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://linkedin.com/in/felix-wilberg"
          >
            <LuArrowUpRight />
            <p className="ml-2 h-7">linkedin</p>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            href="/imprint"
          >
            <LuArrowUpRight />
            <p className="ml-2 h-7">imprint</p>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            href="/privacy"
          >
            <LuArrowUpRight />
            <p className="ml-2 h-7">privacy</p>
          </Link>
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} Felix Wilberg
      </p>
    </footer>
  );
};

export default Footer;
