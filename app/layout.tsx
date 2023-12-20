import '@/styles/globals.css';

import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import NavBar from '@/components/shared/nav-bar';
import { cn } from '@/lib/utils';
import { meta } from '@/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${meta.title} | ${meta.description}`,
  description: meta.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body className={cn('relative antialiased', inter.className)}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
