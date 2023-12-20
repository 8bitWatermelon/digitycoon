import '@/styles/globals.css'

import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { meta } from '@/constants/meta'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${meta.title} | ${meta.description}`,
  description: meta.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
