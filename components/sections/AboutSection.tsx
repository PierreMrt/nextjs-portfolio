import skillsData from '@/data/skills.json'

export default function AboutSection() {
  const skills = skillsData

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          About Me
        </h2>
        <div className="text-gray-700 space-y-4">
          <p className="text-lg leading-relaxed">
            Tech-driven data analyst with <strong>5+ years of experience</strong> in transforming raw data into meaningful insights.
            In-depth knowledge of database management, programming languages such as Python and SQL, 
            and data visualization techniques to help management make the most informed decisions.
          </p>
          <p className="leading-relaxed">
            Specialized in fraud detection and data analysis to support strategic decision-making. 
            I develop automated data pipelines, create interactive dashboards, and perform statistical 
            analysis and predictive modeling.
          </p>
        </div>
      </div>
      
      {/* Skills Section */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Skills & Expertise</h3>
        
        <div className="space-y-8">
          {/* Technical Skills */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-600">Technical Skills</h4>
            <div className="space-y-6">
              {skills.technical.map((skillGroup: any) => (
                <div key={skillGroup.category}>
                  <h5 className="text-base font-semibold mb-2 text-gray-700">{skillGroup.category}</h5>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill: string) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-800 hover:bg-teal-50 hover:text-teal-700 transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-600">Soft Skills</h4>
            <div className="space-y-2">
              {skills.soft.map((skill: string) => (
                <div key={skill} className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
