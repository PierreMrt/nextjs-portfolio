import { getExperience } from '@/lib/content'
import ExperienceCard from '@/components/ui/ExperienceCard'
import Link from 'next/link'

export default async function ExperiencePreview() {
  const experiences = await getExperience()

  return (
    <section className="section-padding container-custom bg-gray-50">
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
      <p className="text-gray-600 mb-12 text-lg">
        Over 5 years of professional data analysis experience
      </p>

      <div className="space-y-8 mb-8">
        {experiences.slice(0, 2).map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>

      <Link
        href="/experience"
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition"
      >
        View Full Experience
      </Link>
    </section>
  )
}
