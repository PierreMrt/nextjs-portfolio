import educationData from '@/data/education.json'
import { MapPin } from 'lucide-react'

export default function EducationSection() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-teal-100 rounded-lg">
          <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Education</h2>
      </div>

      <div className="space-y-6">
        {educationData.map((edu) => (
          <div key={edu.id} className="border-l-4 border-teal-500 pl-6 pb-6">
            <div className="mb-3">
              <span className="inline-block px-3 py-1 text-sm font-medium text-teal-700 bg-teal-50 rounded-full mb-2">
                {edu.startDate} - {edu.endDate}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {edu.degree}
              </h3>
              <p className="text-gray-600 font-medium mb-1">{edu.institution}</p>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {edu.location}
              </p>
            </div>
            <p className="text-gray-700">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
