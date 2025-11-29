import { getAllProjects } from '@/lib/content'
import ProjectCard from '@/components/ui/ProjectCard'
import Link from 'next/link'

export default async function ProjectsPreview() {
  const projects = await getAllProjects()
  const featured = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <section className="section-padding container-custom">
      <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
      <p className="text-gray-600 mb-12 text-lg">
        Explore some of my recent data analysis and development work
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {featured.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>

      <Link
        href="/projects"
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition"
      >
        View All Projects
      </Link>
    </section>
  )
}
