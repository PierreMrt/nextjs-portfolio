'use client'

import { useTranslation } from '@/hooks/useTranslation'
import skillsEn from '@/data/en/skills.json'
import skillsFr from '@/data/fr/skills.json'
import skillsIt from '@/data/it/skills.json'

const skillsMap = {
  en: skillsEn,
  fr: skillsFr,
  it: skillsIt,
} as const

export default function AboutSection() {
  const { t, locale } = useTranslation()
  const skills = skillsMap[locale as keyof typeof skillsMap]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          <span className="text-lime-600">{t('about.title')}</span>{" "}
          <span className="text-gray-900 dark:text-gray-100">{t('about.subtitle')}</span>
        </h2>
        <div className="text-gray-700 dark:text-gray-300 space-y-4">
          <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.description') }} />
        </div>
      </div>
      
      {/* Skills Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">
          <span className="text-lime-600">{t('about.skills.title')}</span>{" "}
          <span className="text-gray-900 dark:text-gray-100">{t('about.skills.subtitle')}</span>
        </h3>
        
        <div className="space-y-8">
          {/* Technical Skills */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-lime-600">{t('about.skills.technical')}</h4>
            <div className="space-y-6">
              {skills.technical.map((skillGroup: any) => (
                <div key={skillGroup.category}>
                  <h5 className="text-base font-semibold mb-2 text-gray-700 dark:text-gray-300">{skillGroup.category}</h5>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill: string) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-gray-100 dark:bg-[#222832] rounded text-sm text-gray-700 dark:text-gray-200 hover:bg-lime-600 dark:hover:bg-lime-900 hover:text-white dark:hover:text-lime-400 transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-lime-600">{t('about.skills.soft')}</h4>
            <div className="space-y-2">
              {skills.soft.map((skill: string) => (
                <div key={skill} className="flex items-center">
                  <div className="w-2 h-2 bg-lime-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}