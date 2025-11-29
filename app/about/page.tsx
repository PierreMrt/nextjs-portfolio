import { Metadata } from 'next'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'

export const metadata: Metadata = {
  title: 'About - Pierre Merlet',
  description: 'Learn more about Pierre Merlet, a tech-driven data analyst with expertise in Python, SQL, and data visualization.',
}

export default function AboutPage() {
  return (
    <div className="section-padding container-custom">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <About detailed />
      <Skills />
    </div>
  )
}
