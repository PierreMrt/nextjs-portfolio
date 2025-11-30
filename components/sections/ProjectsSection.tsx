'use client'

import { Github } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

export default function ProjectsSection() {
  const { t, locale } = useTranslation()
  const projectsData = require(`@/data/${locale}/projects.json`)

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">
        <span className="text-lime-600">{t('projects.title')}</span>{" "}
        <span className="text-gray-900 dark:text-gray-100">{t('projects.subtitle')}</span>
      </h2>

      <div className="space-y-6">
        {projectsData.map((project: any) => (
          <div
            key={project.id}
            className="border border-gray-200 dark:border-[#222832] rounded-lg p-6 hover:shadow-lg transition-shadow bg-white dark:bg-[#31313a]"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
            
            {project.highlights && project.highlights.length > 0 && (
              <ul className="mb-4 space-y-1">
                {project.highlights.map((highlight: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-lime-500 mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech: string, idx: number) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs bg-lime-50 dark:bg-lime-900 text-lime-700 dark:text-lime-400 rounded font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-[#222832] text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-500 transition-colors text-sm font-medium"
              >
                <Github className="w-4 h-4" />
                {t('projects.viewProject')}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
