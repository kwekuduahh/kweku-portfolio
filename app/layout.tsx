import type React from 'react';

import type { Metadata } from 'next';

import { Geist, PT_Mono, Nanum_Pen_Script } from 'next/font/google';

import '../styles/globals.css';

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist',
});

const ptMono = PT_Mono({
  subsets: ['latin'],
  weight: '400',
  display: 'block',
  variable: '--font-pt-mono',
});

const nanumPenScript = Nanum_Pen_Script({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-nanum-pen-script',
});

export const metadata: Metadata = {
  title: 'Kweku Duah - Frontend Developer',
  description: 'Frontend Developer from Ghana with 4 years of experience.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable}
      ${ptMono.variable}
      `}>
      <body className="font-sans antialiased"> {children}</body>
    </html>
  );
}
