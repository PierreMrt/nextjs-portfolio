import { useLanguage } from '@/contexts/LanguageContext'

export function useTranslation() {
  const { t, locale } = useLanguage()
  return { t, locale }
}
