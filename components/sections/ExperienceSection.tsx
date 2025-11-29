import experienceData from '@/data/experience.json'
import { Calendar, MapPin } from 'lucide-react'

export default function ExperienceSection() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-teal-100 rounded-lg">
          <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
      </div>

      <div className="space-y-6">
        {experienceData.map((exp) => (
          <div key={exp.id} className="border-l-4 border-teal-500 pl-6 pb-6">
            <div className="mb-3">
              <span className="inline-block px-3 py-1 text-sm font-medium text-teal-700 bg-teal-50 rounded-full mb-2">
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
                    <span className="text-teal-500 mt-1">•</span>
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
