import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const projectsDirectory = path.join(process.cwd(), 'content/projects')
const dataDirectory = path.join(process.cwd(), 'data')

export interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
  image?: string
  featured: boolean
  content: string
}

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  description: string
  responsibilities: string[]
  technologies: string[]
}

export interface Education {
  id: string
  degree: string
  institution: string
  location: string
  startDate: string
  endDate: string
  description: string
}

export async function getAllProjects(): Promise<Project[]> {
  const fileNames = fs.readdirSync(projectsDirectory)
  
  const projects = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(projectsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        description: data.description,
        tags: data.tags || [],
        github: data.github,
        demo: data.demo,
        image: data.image,
        featured: data.featured || false,
        content,
      }
    })

  return projects
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      description: data.description,
      tags: data.tags || [],
      github: data.github,
      demo: data.demo,
      image: data.image,
      featured: data.featured || false,
      content,
    }
  } catch {
    return null
  }
}

export async function getExperience(): Promise<Experience[]> {
  const filePath = path.join(dataDirectory, 'experience.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(fileContents)
}

export async function getEducation(): Promise<Education[]> {
  const filePath = path.join(dataDirectory, 'education.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(fileContents)
}

export async function getSkills() {
  const filePath = path.join(dataDirectory, 'skills.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(fileContents)
}
