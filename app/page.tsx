'use client'

import { useState } from 'react'
import Sidebar from '@/components/layout/Sidebar'
import ProfileCard from '@/components/layout/ProfileCard'
import ContentPanel from '@/components/layout/ContentPanel'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <>
      <AnimatedBackground />
      <div className="portfolio-container">
        <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        <ProfileCard />
        <ContentPanel activeSection={activeSection} />
      </div>
    </>
  )
}
