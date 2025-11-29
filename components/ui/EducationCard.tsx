import { Education } from '@/lib/content'

interface EducationCardProps {
  education: Education
}

export default function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="border-l-4 border-primary pl-6 pb-8">
      <h3 className="text-2xl font-semibold mb-1">{education.degree}</h3>
      <p className="text-lg text-gray-600 mb-2">{education.institution}</p>
      <p className="text-sm text-gray-500 mb-4">
        {education.location} • {education.startDate} - {education.endDate}
      </p>
      <p className="text-gray-700">{education.description}</p>
    </div>
  )
}
