import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import ExperiencePreview from '@/components/sections/ExperiencePreview'
import ProjectsPreview from '@/components/sections/ProjectsPreview'
import ContactCTA from '@/components/sections/ContactCTA'

export const revalidate = 3600 // Revalidate every hour

export default async function Home() {
  return (
    <>
      <Hero />
      <About />
      <ExperiencePreview />
      <ProjectsPreview />
      <ContactCTA />
    </>
  )
}
