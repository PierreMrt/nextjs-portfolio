import { Metadata } from 'next'
import { getAllProjects } from '@/lib/content'
import ProjectCard from '@/components/ui/ProjectCard'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Projects - Pierre Merlet',
  description: 'Data analysis and development projects by Pierre Merlet.',
}

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <div className="section-padding container-custom">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <p className="text-gray-600 mb-12 text-lg">
        Explore my data analysis and development projects
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a
          href="https://github.com/PierreMrt"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
        >
          View More on GitHub
        </a>
      </div>
    </div>
  )
}
