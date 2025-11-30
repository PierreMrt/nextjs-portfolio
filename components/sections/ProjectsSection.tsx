import projectsData from '@/data/projects.json'
import { ExternalLink } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

export default function ProjectsSection() {
  const projects = projectsData
  const { t } = useTranslation()

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8">
        <span className="text-lime-600">{t('projects.title')}</span>{" "}
        <span className="text-gray-900 dark:text-gray-100">{t('projects.subtitle')}</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-[#222832] rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-lime-100 dark:bg-lime-900 text-lime-800 dark:text-lime-300 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lime-600 hover:text-lime-700 dark:text-lime-400 dark:hover:text-lime-300 transition-colors"
              >
                {t('projects.viewProject')}
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
