import { Mail, Linkedin, Github, MapPin } from 'lucide-react'

export default function ContactSection() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-teal-100 rounded-lg">
          <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Contact</h2>
      </div>

      <div className="space-y-6">
        <div>
          <p className="text-gray-700 mb-6">
            Feel free to reach out for collaborations, opportunities, or just to connect!
          </p>
        </div>

        <div className="space-y-4">
          <a
            href="mailto:pierre.merlet@proton.me"
            className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-teal-500 hover:bg-teal-50 transition-all group"
          >
            <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-teal-100 transition-colors">
              <Mail className="w-6 h-6 text-gray-600 group-hover:text-teal-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Email</p>
              <p className="text-sm text-gray-600">pierre.merlet@proton.me</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/pierre-merlet-553028a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-teal-500 hover:bg-teal-50 transition-all group"
          >
            <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-teal-100 transition-colors">
              <Linkedin className="w-6 h-6 text-gray-600 group-hover:text-teal-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">LinkedIn</p>
              <p className="text-sm text-gray-600">linkedin.com/in/pierre-merlet-553028a9</p>
            </div>
          </a>

          <a
            href="https://github.com/PierreMrt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-teal-500 hover:bg-teal-50 transition-all group"
          >
            <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-teal-100 transition-colors">
              <Github className="w-6 h-6 text-gray-600 group-hover:text-teal-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">GitHub</p>
              <p className="text-sm text-gray-600">github.com/PierreMrt</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
            <div className="p-3 bg-gray-100 rounded-lg">
              <MapPin className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Location</p>
              <p className="text-sm text-gray-600">Angers, France</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
