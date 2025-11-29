'use client'

import { Home, Briefcase, GraduationCap, FolderOpen, AtSign } from 'lucide-react'

interface SidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const sections = [
    { id: 'about', icon: Home, label: 'About' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'projects', icon: FolderOpen, label: 'Projects' },
    { id: 'contact', icon: AtSign, label: 'Contact' },
  ]

  return (
    <div className="w-14 bg-white border-r border-gray-200 flex flex-col items-center py-6 gap-8 md:w-14 md:flex-col md:border-r md:border-b-0 max-md:w-full max-md:flex-row max-md:py-3 max-md:px-4 max-md:gap-2 max-md:border-r-0 max-md:border-b max-md:justify-around">
      {sections.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => onSectionChange(id)}
          className={`group relative p-3 rounded-lg transition-all ${
            activeSection === id
              ? 'bg-lime-500 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
          title={label}
        >
          <Icon className="w-5 h-5" />
          <span className="sr-only">{label}</span>
        </button>
      ))}
    </div>
  )
}

