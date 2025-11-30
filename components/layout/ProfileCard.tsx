'use client'

import { Github, Linkedin, Mail, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function ProfileCard() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      {/* Mobile Header (visible only on mobile) - flex-shrink-0 prevents it from being compressed */}
      <div className="md:hidden w-full bg-gray-50 border-b border-gray-200 p-4 flex-shrink-0">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
              <Image
                src="/images/profile.jpg"
                alt="Pierre MERLET"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <h1 className="text-lg font-bold text-gray-900">Pierre Merlet</h1>
              <p className="text-sm text-gray-600">Data Scientist</p>
            </div>
          </div>
          {isExpanded ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
        </button>
        
        {/* Expanded mobile content */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-300">
            <div className="flex gap-4 items-center justify-center mb-4">
              <a href="https://github.com/PierreMrt" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-lime-500 transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/pierre-merlet-553028a9/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-lime-500 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:pierre.merlet@proton.me" className="text-gray-600 hover:text-lime-500 transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇫🇷</span>
                  <span className="text-sm font-medium text-gray-700">French</span>
                </div>
                <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">Native</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇬🇧</span>
                  <span className="text-sm font-medium text-gray-700">English</span>
                </div>
                <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">Fluent</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇮🇹</span>
                  <span className="text-sm font-medium text-gray-700">Italian</span>
                </div>
                <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">Fluent</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Sidebar (hidden on mobile) */}
      <div className="hidden md:flex w-80 bg-white border-r border-gray-200 flex-col p-8 overflow-y-auto">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-6 bg-gray-200 mx-auto">
          <Image
            src="/images/profile.jpg"
            alt="Pierre MERLET"
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
          Pierre Merlet
        </h1>

        <p className="text-gray-600 mb-6 text-center">
          Data Scientist
        </p>

        <div className="flex gap-4 items-center justify-center mb-8">
          <a href="https://github.com/PierreMrt" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-lime-500 transition-colors" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/pierre-merlet-553028a9/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-lime-500 transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:pierre.merlet@proton.me" className="text-gray-600 hover:text-lime-500 transition-colors" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="border-t border-gray-300 mb-6"></div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇫🇷</span>
              <span className="text-sm font-medium text-gray-700">French</span>
            </div>
            <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">Native</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇬🇧</span>
              <span className="text-sm font-medium text-gray-700">English</span>
            </div>
            <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">Fluent</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇮🇹</span>
              <span className="text-sm font-medium text-gray-700">Italian</span>
            </div>
            <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">Fluent</span>
          </div>
        </div>
      </div>
    </>
  )
}
