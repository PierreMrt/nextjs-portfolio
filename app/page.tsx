'use client'

import { useState } from 'react'
import Sidebar from '@/components/layout/Sidebar'
import ProfileCard from '@/components/layout/ProfileCard'
import ContentPanel from '@/components/layout/ContentPanel'
import AnimatedBackground from '@/components/AnimatedBackground'
import { ThemeProvider } from '@/components/ThemeProvider'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <ThemeProvider>
      <AnimatedBackground />
      <div className="portfolio-container">
        <div className="sidebar-wrapper">
          <div className="sidebar-container">
            <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
          </div>
        </div>
        <div className="main-content-wrapper">
          <div className="profile-wrapper">
            <div className="profile-bg"></div>
            <div className="profile-container">
              <ProfileCard />
            </div>
          </div>
          <div className="content-container">
            <ContentPanel activeSection={activeSection} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
