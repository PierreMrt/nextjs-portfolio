import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pierre Merlet - Data Analyst',
  description: 'Tech-driven data analyst with 3+ years of experience in transforming raw data into meaningful insights.',
  keywords: 'data analyst, Python, SQL, data visualization, business intelligence',
  authors: [{ name: 'Pierre Merlet' }],
  openGraph: {
    title: 'Pierre Merlet - Data Analyst',
    description: 'Tech-driven data analyst portfolio',
    url: 'https://www.pierre-merlet.com',
    siteName: 'Pierre Merlet Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
