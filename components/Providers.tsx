'use client'

import { ThemeProvider } from './ThemeProvider'
import { LanguageProvider } from '@/contexts/LanguageContext'

type Locale = 'en' | 'fr' | 'it'

export default function Providers({ 
  children,
  locale 
}: { 
  children: React.ReactNode
  locale: Locale
}) {
  return (
    <ThemeProvider>
      <LanguageProvider initialLocale={locale}>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  )
}
