import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import NavBar from '@/app/components/NavBar';
import { baseUrl } from '@/app/sitemap';
import Footer from '@/app/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Felix Wilberg Portfolio',
  description: 'Let me introduce myself and show off my work'
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cx(
        'text-gray-900 bg-white dark:text-white dark:bg-gray-900',
        inter.className
      )}
    >
      <body className={`antialiased max-w-xl mx-4 mt-8 lg:mx-auto`}>
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <NavBar />
          {children}
          <Footer />
        </main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
