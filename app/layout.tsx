import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const robotoThin = Roboto({ 
  weight: '100',
  subsets: ['latin'],
  variable: '--font-roboto-thin',
})

const robotoLight = Roboto({ 
  weight: '300',
  subsets: ['latin'],
  variable: '--font-roboto-light',
})

export const metadata: Metadata = {
  title: 'Pierre Merlet - Data Scientist',
  description: 'Tech-driven data scientist with 3+ years of experience in transforming raw data into meaningful insights.',
  keywords: 'data scientist, Python, SQL, data visualization, machine learning, data science, IA',
  authors: [{ name: 'Pierre Merlet' }],
  openGraph: {
    title: 'Pierre Merlet - Data Scientist',
    description: 'Tech-driven data scientist portfolio',
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
      <body className={`${robotoThin.variable} ${robotoLight.variable} font-thin`}>
        {children}
      </body>
    </html>
  )
}
