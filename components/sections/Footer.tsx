import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Pierre Merlet</h3>
            <p className="text-gray-400">
              Data Analyst specializing in transforming raw data into actionable insights.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white transition">About</a></li>
              <li><a href="/experience" className="hover:text-white transition">Experience</a></li>
              <li><a href="/projects" className="hover:text-white transition">Projects</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/PierreMrt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/pierre-merlet"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:merlet.pierre@outlook.com"
                className="hover:text-primary transition"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pierre Merlet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
