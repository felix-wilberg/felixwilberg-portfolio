import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import NavBar from '@/app/components/NavBar';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Felix Wilberg',
  description: 'Let me introduce myself'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col items-center justify-between`}
      >
        <NavBar />
        <main className="w-2/3 h-full ">{children}</main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
