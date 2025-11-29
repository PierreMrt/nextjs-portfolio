import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="section-padding container-custom">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Pierre <span className="text-primary">MERLET</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
          Data Analyst
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
          Tech-driven data analyst with <strong>5+ years of experience</strong> in transforming raw data into meaningful insights.
          In-depth knowledge of database management, programming languages such as Python and SQL, 
          and data visualization techniques to help management make the most informed decisions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-blue-50 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  )
}
