'use client'

import AboutSection from '@/components/sections/AboutSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import EducationSection from '@/components/sections/EducationSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ContactSection from '@/components/sections/ContactSection'

interface ContentPanelProps {
  activeSection: string
}

export default function ContentPanel({ activeSection }: ContentPanelProps) {
  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection />
      case 'experience':
        return <ExperienceSection />
      case 'education':
        return <EducationSection />
      case 'projects':
        return <ProjectsSection />
      case 'contact':
        return <ContactSection />
      default:
        return <AboutSection />
    }
  }

  return (
    <div className="flex-1 bg-white p-8 overflow-y-auto overscroll-contain md:p-8 max-md:p-6 max-md:pb-8">
      <div className="max-md:pb-4">
        {renderSection()}
      </div>
    </div>
  )
}
