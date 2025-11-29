import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProjectBySlug, getAllProjects } from '@/lib/content'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'

export const revalidate = 3600

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const projects = await getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - Pierre Merlet`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="section-padding container-custom">
      <Link 
        href="/projects"
        className="inline-flex items-center text-primary hover:underline mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Projects
      </Link>

      <article className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 text-primary text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mb-8">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>

        <div className="prose prose-lg max-w-none">
          <MDXRemote source={project.content} />
        </div>
      </article>
    </div>
  )
}
