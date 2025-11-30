import '../globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import ClientLayout from '@/components/ClientLayout'
import { LanguageProvider } from '@/contexts/LanguageContext'

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
    { locale: 'en' },
    { locale: 'fr' },
    { locale: 'it' },
  ]
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: 'en' | 'fr' | 'it' }
}) {
  return (
    <html lang={params.locale} className="scroll-smooth">
      <body className={`${poppinsThin.variable} ${poppinsLight.variable} font-light`}>
        <LanguageProvider initialLocale={params.locale}>
          <ClientLayout>
            {children}
          </ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  )
}
