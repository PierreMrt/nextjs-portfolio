import Link from 'next/link'
import { Mail, ArrowRight } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section className="section-padding container-custom bg-gradient-to-r from-blue-50 to-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let's Work Together
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Have a project in mind or want to discuss data analysis opportunities? 
          I'd love to hear from you. Let's create something great together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Mail className="w-4 h-4" />
            Get In Touch
          </Link>
          <a
            href="mailto:merlet.pierre@outlook.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-blue-50 transition"
          >
            Email Me
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
