import skillsData from '@/data/skills.json'

export default function AboutSection() {
  const skills = skillsData

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          <span className="text-lime-600">About</span>{" "}
          <span className="text-gray-900 dark:text-gray-100">Me</span>
        </h2>
        <div className="text-gray-700 dark:text-gray-300 space-y-4">
          <p className="text-lg leading-relaxed">
            Data Scientist with <strong>3+ years</strong> of experience building machine learning models, 
            from data pipelines to production deployment. Specialized in turning complex 
            datasets into actionable insights using Python, SQL, and advanced statistical methods.
          </p>
        </div>
      </div>
      
      {/* Skills Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">
          <span className="text-lime-600">Skills</span>{" "}
          <span className="text-gray-900 dark:text-gray-100">& Expertise</span>
        </h3>
        
        <div className="space-y-8">
          {/* Technical Skills */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-lime-600">Technical Skills</h4>
            <div className="space-y-6">
              {skills.technical.map((skillGroup: any) => (
                <div key={skillGroup.category}>
                  <h5 className="text-base font-semibold mb-2 text-gray-700 dark:text-gray-300">{skillGroup.category}</h5>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill: string) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-800 dark:text-gray-200 hover:bg-lime-50 dark:hover:bg-lime-900 hover:text-lime-700 dark:hover:text-lime-400 transition"
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
            <h4 className="text-lg font-medium mb-4 text-lime-600">Soft Skills</h4>
            <div className="space-y-2">
              {skills.soft.map((skill: string) => (
                <div key={skill} className="flex items-center">
                  <div className="w-2 h-2 bg-lime-600 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
