import Link from 'next/link';
import Image from 'next/image';
import Felix from '@/public/assets/blog/authors/felix.jpg';

const navItems = [
  { href: '/', label: 'home' },
  { href: '/notes', label: 'notes' },
  { href: '/about', label: 'about' }
];

const NavBar = () => {
  return (
    <aside className="mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row sm:flex-row sm:items-start sm:justify-between relative px-0 pb-0 fade scroll-pr-6"
          id="nav"
        >
          <Link
            href="/"
            className="transition-all hover:text-slate-800 dark:hover:text-slate-200 flex items-center relative py-1 pr-2 no-underline space-x-2 shrink-0"
          >
            <Image
              src={Felix}
              alt="avatar"
              width={24}
              height={24}
              style={{ borderRadius: 100 }}
            />
            <h1 className="font-bold">Felix Wilberg</h1>
          </Link>
          <ul className="flex flex-row space-x-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default NavBar;
