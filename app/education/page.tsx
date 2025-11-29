import { Metadata } from 'next'
import { getEducation } from '@/lib/content'
import EducationCard from '@/components/ui/EducationCard'

export const metadata: Metadata = {
  title: 'Education - Pierre Merlet',
  description: 'Educational background and certifications of Pierre Merlet.',
}

export default async function EducationPage() {
  const education = await getEducation()

  return (
    <div className="section-padding container-custom">
      <h1 className="text-4xl font-bold mb-4">Education</h1>
      <p className="text-gray-600 mb-12 text-lg">
        Academic background and continuous learning
      </p>
      
      <div className="space-y-8">
        {education.map((edu, index) => (
          <EducationCard key={index} education={edu} />
        ))}
      </div>
    </div>
  )
}
