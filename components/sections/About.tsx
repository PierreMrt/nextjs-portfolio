export default function About({ detailed = false }: { detailed?: boolean }) {
  return (
    <section className={detailed ? '' : 'section-padding container-custom'}>
      <div className={detailed ? '' : 'max-w-3xl mx-auto'}>
        <h2 className={detailed ? '' : 'text-3xl font-bold mb-6'}>About Me</h2>
        <div className="space-y-4 text-gray-700 text-lg">
          <p>
            I'm Pierre Merlet, a tech-driven data analyst with over 3 years of professional experience 
            in transforming raw data into meaningful, actionable insights. My passion lies in uncovering 
            patterns and trends that drive strategic business decisions.
          </p>
          <p>
            With a solid foundation in programming languages like Python and SQL, combined with expertise 
            in database management and advanced data visualization techniques, I bridge the gap between 
            technical implementation and business strategy.
          </p>
          <p>
            I specialize in creating interactive dashboards, performing statistical analyses, and building 
            predictive models that help organizations make informed decisions. I'm committed to continuous 
            learning and staying at the forefront of data analytics technologies.
          </p>
          {detailed && (
            <>
              <p>
                Throughout my career, I've worked on diverse projects spanning web scraping, machine learning, 
                and algorithm visualization. My approach combines technical rigor with clear communication to ensure 
                that insights are accessible to all stakeholders.
              </p>
              <p>
                When I'm not analyzing data, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the data science community.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
