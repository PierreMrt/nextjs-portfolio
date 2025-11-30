import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import '@/app/globals.css'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk'
})

export const metadata: Metadata = {
  title: 'Pierre Mrt - Portfolio',
  description: 'Full Stack Developer Portfolio',
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // In Next.js 15/14.2+, params should be awaited, though strictly passed as prop here works
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} ${spaceGrotesk.variable} bg-white dark:bg-[#0F172A] text-gray-900 dark:text-white transition-colors duration-300`}>
        <Providers locale={locale}>
          <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
