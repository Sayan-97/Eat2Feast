import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'

import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

const figtree = Figtree({ weight: ['400', '500', '700', '800'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eat2Feast',
  description: 'Your Personalized Food Assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}