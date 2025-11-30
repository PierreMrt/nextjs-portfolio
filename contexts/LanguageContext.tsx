'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import en from '@/locales/en.json'
import fr from '@/locales/fr.json'
import it from '@/locales/it.json'

type Locale = 'en' | 'fr' | 'it'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const translations = { en, fr, it }

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children, initialLocale }: { children: ReactNode; initialLocale: Locale }) {
  const router = useRouter()
  const pathname = usePathname()
  const [locale, setLocaleState] = useState<Locale>(initialLocale)

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    
    // Get the current path without the locale prefix
    const segments = pathname.split('/')
    const pathWithoutLocale = segments.slice(2).join('/')
    
    // Navigate to the new locale path
    router.push(`/${newLocale}/${pathWithoutLocale}`)
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[locale]
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        return key
      }
    }
    
    return typeof value === 'string' ? value : key
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
