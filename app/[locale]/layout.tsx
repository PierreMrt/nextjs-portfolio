import '../globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Providers from '@/components/Providers'

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

export async function generateStaticParams() {
  return [
    { locale: 'en' as const },
    { locale: 'fr' as const },
    { locale: 'it' as const },
  ]
}

type LocaleLayoutProps = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params
  
  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${poppinsThin.variable} ${poppinsLight.variable} font-light`}>
        <Providers locale={locale as 'en' | 'fr' | 'it'}>
          {children}
        </Providers>
      </body>
    </html>
  )
}
