import experienceData from '@/data/experience.json'
import { MapPin } from 'lucide-react'

export default function ExperienceSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        <span className="text-lime-600">My</span>{" "}
        <span className="text-gray-900">Experience</span>
      </h2>

      <div className="space-y-6">
        {experienceData.map((exp) => (
          <div key={exp.id} className="border-l-4 border-lime-500 pl-6 pb-6">
            <div className="mb-3">
              <span className="inline-block px-3 py-1 text-sm font-medium text-lime-700 bg-lime-50 rounded-full mb-2">
                {exp.startDate} - {exp.endDate}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {exp.title}
              </h3>
              <p className="text-gray-600 font-medium mb-1">{exp.company}</p>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {exp.location}
              </p>
            </div>
            <p className="text-gray-700 mb-3">{exp.description}</p>
            {exp.responsibilities && exp.responsibilities.length > 0 && (
              <ul className="space-y-1 text-sm text-gray-600">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-lime-500 mt-1">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            )}
            {exp.technologies && exp.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
