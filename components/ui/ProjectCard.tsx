import { Project } from '@/lib/content'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition cursor-pointer h-full">
      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-blue-100 text-primary text-xs rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}
