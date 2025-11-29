import { Github, Linkedin, Mail, Globe } from 'lucide-react'
import Image from 'next/image'

export default function ProfileCard() {
  return (
    <div className="w-80 bg-gray-50 border-r border-gray-200 flex flex-col items-center p-8">
      {/* Profile Image */}
      <div className="w-32 h-32 rounded-full overflow-hidden mb-6 bg-gray-200">
        <Image
          src="/profile.jpg"
          alt="Pierre MERLET"
          width={128}
          height={128}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Pierre MERLET
      </h1>

      {/* Title */}
      <p className="text-gray-600 mb-6 text-center">
        Data Analyst
      </p>

      {/* Social Icons */}
      <div className="flex gap-4 items-center">
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
          href="https://linkedin.com/in/pierremerlet"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-teal-500 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:pierre.merlet@example.com"
          className="text-gray-600 hover:text-teal-500 transition-colors"
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
        </a>
        <a
          href="https://pierremerlet.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-teal-500 transition-colors"
          aria-label="Website"
        >
          <Globe className="w-5 h-5" />
        </a>
      </div>
    </div>
  )
}
