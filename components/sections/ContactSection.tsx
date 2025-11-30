import { Mail, Linkedin, Github, MapPin } from 'lucide-react'

export default function ContactSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">
        <span className="text-lime-600">Contact</span>{" "}
        <span className="text-gray-900">Me</span>
      </h2>

      <div className="space-y-6">
        <div>
          <p className="text-gray-700 mb-6">
            Feel free to reach out for collaborations, opportunities, or just to connect!
          </p>
        </div>

        <div className="space-y-4">
          <a
            href="mailto:pierre.merlet@proton.me"
            className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-lime-500 hover:bg-lime-50 transition-all group"
          >
            <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-lime-100 transition-colors">
              <Mail className="w-6 h-6 text-gray-600 group-hover:text-lime-600" />
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
            className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-lime-500 hover:bg-lime-50 transition-all group"
          >
            <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-lime-100 transition-colors">
              <Linkedin className="w-6 h-6 text-gray-600 group-hover:text-lime-600" />
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
            className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-lime-500 hover:bg-lime-50 transition-all group"
          >
            <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-lime-100 transition-colors">
              <Github className="w-6 h-6 text-gray-600 group-hover:text-lime-600" />
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
