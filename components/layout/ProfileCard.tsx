'use client'

import { Github, Linkedin, Mail, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ProfileCard() {
  const [isExpanded, setIsExpanded] = useState(false)
  const { setLocale, t } = useLanguage()

  return (
    <>
      {/* Mobile Header (visible only on mobile) - flex-shrink-0 prevents it from being compressed */}
      <div className="md:hidden w-full bg-gray-50 dark:bg-[#31313a] border-b border-gray-200 dark:border-[#31313a] p-4 flex-shrink-0">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex-shrink-0">
              <Image
                src="/images/profile.jpg"
                alt="Pierre MERLET"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100">{t('profile.name')}</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t('profile.title')}</p>
            </div>
          </div>
          {isExpanded ? <ChevronUp className="w-5 h-5 flex-shrink-0 dark:text-gray-300" /> : <ChevronDown className="w-5 h-5 flex-shrink-0 dark:text-gray-300" />}
        </button>
        
        {/* Expanded mobile content */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-600">
            <div className="flex gap-4 items-center justify-center mb-4">
              <a href="https://github.com/PierreMrt" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-lime-500 transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/pierre-merlet-553028a9/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-lime-500 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:pierre.merlet@proton.me" className="text-gray-600 dark:text-gray-400 hover:text-lime-500 transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            <div className="space-y-2">
              <button
                onClick={() => setLocale('fr')}
                className="w-full flex items-center justify-between hover:bg-gray-200 dark:hover:bg-[#222832] p-2 rounded transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇫🇷</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('profile.languages.french')}</span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-[#222832] px-2 py-1 rounded">{t('profile.languages.levels.native')}</span>
              </button>
              <button
                onClick={() => setLocale('en')}
                className="w-full flex items-center justify-between hover:bg-gray-200 dark:hover:bg-[#222832] p-2 rounded transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇬🇧</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('profile.languages.english')}</span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-[#222832] px-2 py-1 rounded">{t('profile.languages.levels.fluent')}</span>
              </button>
              <button
                onClick={() => setLocale('it')}
                className="w-full flex items-center justify-between hover:bg-gray-200 dark:hover:bg-[#222832] p-2 rounded transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇮🇹</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('profile.languages.italian')}</span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-[#222832] px-2 py-1 rounded">{t('profile.languages.levels.fluent')}</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Sidebar (hidden on mobile) */}
      <div className="hidden md:flex w-80 bg-white dark:bg-[#31313a] dark:border-gray-600 flex-col p-8 overflow-y-auto">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-6 bg-gray-200 dark:bg-gray-700 mx-auto">
          <Image
            src="/images/profile.jpg"
            alt="Pierre MERLET"
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2 text-center">
          {t('profile.name')}
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
          {t('profile.title')}
        </p>

        <div className="flex gap-4 items-center justify-center mb-8">
          <a href="https://github.com/PierreMrt" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-lime-500 transition-colors" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/pierre-merlet-553028a9/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-lime-500 transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:pierre.merlet@proton.me" className="text-gray-600 dark:text-gray-400 hover:text-lime-500 transition-colors" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-600 mb-6"></div>

        <div className="space-y-3">
          <button
            onClick={() => setLocale('fr')}
            className="w-full flex items-center justify-between hover:bg-gray-100 dark:hover:bg-[#222832] p-2 rounded transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇫🇷</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('profile.languages.french')}</span>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-[#222832] px-2 py-1 rounded">{t('profile.languages.levels.native')}</span>
          </button>
          <button
            onClick={() => setLocale('en')}
            className="w-full flex items-center justify-between hover:bg-gray-100 dark:hover:bg-[#222832] p-2 rounded transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇬🇧</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('profile.languages.english')}</span>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-[#222832] px-2 py-1 rounded">{t('profile.languages.levels.fluent')}</span>
          </button>
          <button
            onClick={() => setLocale('it')}
            className="w-full flex items-center justify-between hover:bg-gray-100 dark:hover:bg-[#222832] p-2 rounded transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇮🇹</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('profile.languages.italian')}</span>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-[#222832] px-2 py-1 rounded">{t('profile.languages.levels.fluent')}</span>
          </button>
        </div>
      </div>
    </>
  )
}
