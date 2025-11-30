import educationData from '@/data/education.json'
import { MapPin } from 'lucide-react'

export default function EducationSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">
        <span className="text-lime-600">My</span>{" "}
        <span className="text-gray-900">Education</span>
      </h2>

      <div className="space-y-6">
        {educationData.map((edu) => (
          <div key={edu.id} className="border-l-4 border-lime-500 pl-6 pb-6">
            <div className="mb-3">
              <span className="inline-block px-3 py-1 text-sm font-regular text-lime-700 bg-lime-50 rounded-full mb-2">
                {edu.startDate} - {edu.endDate}
              </span>
              <h3 className="text-xl font-medium text-gray-900 mb-1">
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
