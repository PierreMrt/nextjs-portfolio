import './globals.css'
import type { Metadata } from 'next'
import { PostponedPathnameNormalizer } from 'next/dist/server/future/normalizers/request/postponed'
import { Poppins } from 'next/font/google'
import ClientLayout from '@/components/ClientLayout'

const poppinsThin = Poppins({ 
  weight: '100',
  subsets: ['latin'],
  variable: '--font-poppins-thin',
})

const poppinsLight = Poppins({ 
  weight: '300',
  subsets: ['latin'],
  variable: '--font-poppins-light',
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
      <body className={`${poppinsThin.variable} ${poppinsLight.variable} font-light`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
