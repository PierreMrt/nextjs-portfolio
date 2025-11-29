import { Metadata } from 'next'
import { getExperience } from '@/lib/content'
import ExperienceCard from '@/components/ui/ExperienceCard'

export const metadata: Metadata = {
  title: 'Experience - Pierre Merlet',
  description: 'Professional experience of Pierre Merlet as a Data Analyst.',
}

export default async function ExperiencePage() {
  const experiences = await getExperience()

  return (
    <div className="section-padding container-custom">
      <h1 className="text-4xl font-bold mb-4">Professional Experience</h1>
      <p className="text-gray-600 mb-12 text-lg">
        3+ years of experience transforming raw data into meaningful insights
      </p>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </div>
  )
}
