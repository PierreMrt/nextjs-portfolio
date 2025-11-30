'use client'

import { useTranslation } from '@/hooks/useTranslation'

export default function EducationSection() {
  const { t, locale } = useTranslation()
  const educationData = require(`@/data/${locale}/education.json`)
  const education = educationData

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8">
        <span className="text-lime-600">{t('education.title')}</span>
      </h2>

      <div className="space-y-6">
        {education.map((edu: any, index: number) => (
          <div key={index} className="border-l-2 border-lime-600 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
              {edu.degree}
            </h3>
            <p className="text-lime-600 font-medium">{edu.institution}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{edu.startDate} - {edu.endDate}</p>
            {edu.details && (
              <p className="text-gray-700 dark:text-gray-300">{edu.details}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
