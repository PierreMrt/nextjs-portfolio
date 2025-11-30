'use client'

import { Home, Briefcase, GraduationCap, FolderOpen, AtSign, Moon, Sun } from 'lucide-react'
import { useTheme } from '../ThemeProvider'

interface SidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const { theme, toggleTheme } = useTheme()
  
  const sections = [
    { id: 'about', icon: Home, label: 'ABOUT' },
    { id: 'experience', icon: Briefcase, label: 'RESUME' },
    { id: 'education', icon: GraduationCap, label: 'EDUCATION' },
    { id: 'projects', icon: FolderOpen, label: 'PROJECT' },
    { id: 'contact', icon: AtSign, label: 'CONTACT' },
  ]

  return (
    <div className="w-20 flex flex-col items-center py-4 gap-fluid md:w-20 md:flex-col max-md:w-full max-md:flex-row max-md:py-3 max-md:px-4 max-md:gap-2 max-md:justify-around max-md:flex-shrink-0">
      {sections.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => onSectionChange(id)}
          className={`group relative flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${
            activeSection === id
              ? 'text-lime-500'
              : 'text-gray-800 dark:text-gray-200 hover:text-lime-500'
          }`}
          aria-label={label}
        >
          <Icon className="icon-fluid" />
          <span className="sr-only">{label}</span>
        </button>
      ))}
      <button
        onClick={toggleTheme}
        className="group relative flex flex-col items-center gap-1 p-2 rounded-lg transition-all text-gray-800 dark:text-gray-200 hover:text-lime-500"
        aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      >
        {theme === 'light' ? (
          <Moon className="icon-fluid" />
        ) : (
          <Sun className="icon-fluid" />
        )}
        <span className="sr-only">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
      </button>
    </div>
  )
}
