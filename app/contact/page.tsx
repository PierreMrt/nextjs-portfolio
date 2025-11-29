import { Metadata } from 'next'
import { Mail, Phone, Linkedin, Github, Download } from 'lucide-react'
import ContactForm from '@/components/ui/ContactForm'

export const metadata: Metadata = {
  title: 'Contact - Pierre Merlet',
  description: 'Get in touch with Pierre Merlet for data analysis opportunities and collaborations.',
}

export default function ContactPage() {
  return (
    <div className="section-padding container-custom">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-gray-600 mb-12 text-lg">
        Let's discuss how I can help with your data analysis needs
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          
          <div className="space-y-4 mb-8">
            <a
              href="mailto:merlet.pierre@outlook.com"
              className="flex items-center gap-3 text-gray-700 hover:text-primary transition"
            >
              <Mail className="w-5 h-5" />
              merlet.pierre@outlook.com
            </a>
            
            <a
              href="tel:+33661263690"
              className="flex items-center gap-3 text-gray-700 hover:text-primary transition"
            >
              <Phone className="w-5 h-5" />
              +33 6 61 26 36 90
            </a>
            
            <a
              href="https://www.linkedin.com/in/pierre-merlet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-primary transition"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn Profile
            </a>
            
            <a
              href="https://github.com/PierreMrt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-primary transition"
            >
              <Github className="w-5 h-5" />
              GitHub Profile
            </a>
          </div>

          <a
            href="/cv/pierre-merlet-cv.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-3">Languages</h3>
            <ul className="space-y-2 text-gray-700">
              <li>🇫🇷 French - Mother tongue</li>
              <li>🇬🇧 English - Business Fluent</li>
              <li>🇪🇸 Spanish - Business Fluent</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
