import { Metadata } from 'next'
import { Mail, Phone, Linkedin, Github } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact - Pierre Merlet',
  description: 'Get in touch with Pierre Merlet for data analysis opportunities and collaborations.',
}

export default function ContactPage() {
  return (
    <div className="section-padding container-custom">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Contact Me</h1>
        <p className="text-gray-600 mb-12 text-lg text-center">
          Get in touch with me
        </p>

        <div className="space-y-6">
          <a
            href="mailto:pierre.merlet@proton.me"
            className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-primary hover:bg-gray-50 transition group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-primary group-hover:bg-primary group-hover:text-white transition">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Email</p>
              <p className="text-gray-600">pierre.merlet@proton.me</p>
            </div>
          </a>
          
          <a
            href="tel:+33661263690"
            className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-primary hover:bg-gray-50 transition group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-primary group-hover:bg-primary group-hover:text-white transition">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Phone</p>
              <p className="text-gray-600">+33 6 61 26 36 90</p>
            </div>
          </a>
          
          <a
            href="https://www.linkedin.com/in/pierre-merlet-553028a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-primary hover:bg-gray-50 transition group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-primary group-hover:bg-primary group-hover:text-white transition">
              <Linkedin className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">LinkedIn</p>
              <p className="text-gray-600">View my professional profile</p>
            </div>
          </a>
          
          <a
            href="https://github.com/PierreMrt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-primary hover:bg-gray-50 transition group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-primary group-hover:bg-primary group-hover:text-white transition">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">GitHub</p>
              <p className="text-gray-600">Check out my code repositories</p>
            </div>
          </a>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <span className="text-2xl mb-2 block">🇫🇷</span>
              <p className="font-medium text-gray-900">French</p>
              <p className="text-sm text-gray-600">Mother tongue</p>
            </div>
            <div>
              <span className="text-2xl mb-2 block">🇬🇧</span>
              <p className="font-medium text-gray-900">English</p>
              <p className="text-sm text-gray-600">Business Fluent</p>
            </div>
            <div>
              <span className="text-2xl mb-2 block">🇮🇹</span>
              <p className="font-medium text-gray-900">Italian</p>
              <p className="text-sm text-gray-600">Business Fluent</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
