import { Experience } from '@/lib/content'
import { formatDate } from '@/lib/utils'

interface ExperienceCardProps {
  experience: Experience
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="border-l-4 border-primary pl-6 pb-8">
      <h3 className="text-2xl font-semibold mb-1">{experience.title}</h3>
      <p className="text-lg text-gray-600 mb-2">{experience.company}</p>
      <p className="text-sm text-gray-500 mb-4">
        {experience.location} • {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
      </p>
      <p className="text-gray-700 mb-4">{experience.description}</p>
      
      <div>
        <h4 className="font-semibold mb-2">Key Responsibilities</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
          {experience.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-blue-100 text-primary text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
