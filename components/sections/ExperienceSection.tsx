import experienceData from '@/data/experience.json'
import { useTranslation } from '@/hooks/useTranslation'

export default function ExperienceSection() {
  const experience = experienceData
  const { t } = useTranslation()

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8">
        <span className="text-lime-600">{t('experience.title')}</span>{" "}
        <span className="text-gray-900 dark:text-gray-100">{t('experience.subtitle')}</span>
      </h2>

      <div className="space-y-8">
        {experience.map((job, index) => (
          <div key={index} className="border-l-2 border-lime-600 pl-6">
            <div className="mb-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {job.title}
              </h3>
              <p className="text-lime-600 font-medium">{job.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{job.period}</p>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              {job.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
