import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'

// This is a placeholder. Replace with actual project data
const projects = [
  {
    id: '1',
    title: 'Project 1',
    description: 'Description of project 1',
    technologies: ['Python', 'SQL', 'Tableau'],
    link: '#',
    github: '#',
  },
  {
    id: '2',
    title: 'Project 2',
    description: 'Description of project 2',
    technologies: ['React', 'Next.js', 'TypeScript'],
    link: '#',
    github: '#',
  },
]

export default function ProjectsSection() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-teal-100 rounded-lg">
          <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs bg-teal-50 text-teal-700 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-teal-600 hover:text-teal-700 font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                View Project
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-700 font-medium"
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
