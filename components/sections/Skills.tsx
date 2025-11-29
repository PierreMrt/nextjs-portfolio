import { getSkills } from '@/lib/content'

export default async function Skills() {
  const skills = await getSkills()

  return (
    <section className="section-padding container-custom">
      <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
          <div className="space-y-8">
            {skills.technical.map((skillGroup: any) => (
              <div key={skillGroup.category}>
                <h4 className="text-lg font-semibold mb-3 text-primary">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-100 rounded-lg text-gray-800 hover:bg-blue-100 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8">Soft Skills</h3>
          <div className="space-y-3">
            {skills.soft.map((skill: string) => (
              <div key={skill} className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full mr-4"></div>
                <span className="text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
