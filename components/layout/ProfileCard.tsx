import { Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

export default function ProfileCard() {
  return (
    <div className="w-80 bg-gray-50 border-r border-gray-200 flex flex-col p-8 overflow-y-auto">
      {/* Profile Image */}
      <div className="w-32 h-32 rounded-full overflow-hidden mb-6 bg-gray-200 mx-auto">
        <Image
          src="/profile.jpg"
          alt="Pierre MERLET"
          width={128}
          height={128}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
        Pierre MERLET
      </h1>

      {/* Title */}
      <p className="text-gray-600 mb-6 text-center">
        Data Analyst
      </p>

      {/* Social Icons */}
      <div className="flex gap-4 items-center justify-center mb-8">
        <a
          href="https://github.com/PierreMrt"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-teal-500 transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/pierre-merlet-553028a9/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-teal-500 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:pierre.merlet@proton.me"
          className="text-gray-600 hover:text-teal-500 transition-colors"
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mb-6"></div>

      {/* Languages Section */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
          Languages
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl" role="img" aria-label="French flag">🇫🇷</span>
              <span className="text-sm font-medium text-gray-700">French</span>
            </div>
            <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">Native</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl" role="img" aria-label="UK flag">🇬🇧</span>
              <span className="text-sm font-medium text-gray-700">English</span>
            </div>
            <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">Fluent</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl" role="img" aria-label="Italian flag">🇮🇹</span>
              <span className="text-sm font-medium text-gray-700">Italian</span>
            </div>
            <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">Fluent</span>
          </div>
        </div>
      </div>
    </div>
  )
}
