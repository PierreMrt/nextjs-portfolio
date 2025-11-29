import Skills from './Skills'

export default function AboutSection() {
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
      
      <Skills />
    </div>
  )
}
