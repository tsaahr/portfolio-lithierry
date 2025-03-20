'use client'

import { Briefcase, Monitor, Smartphone, Feather, Send, Globe } from 'lucide-react'

const services = [
  {
    icon: <Monitor className="w-8 h-8 text-purple-500" />,
    title: 'Custom Landing Pages',
    description: 'Unique designs focused on conversion and a strong visual identity.',
  },
  {
    icon: <Globe className="w-8 h-8 text-purple-500" />,
    title: 'Business Websites',
    description: 'Complete online presence for companies, local businesses, and freelancers.',
  },
  {
    icon: <Briefcase className="w-8 h-8 text-purple-500" />,
    title: 'Professional Portfolios',
    description: 'Modern portfolios to showcase your projects and skills effectively.',
  },
  {
    icon: <Feather className="w-8 h-8 text-purple-500" />,
    title: 'Blogs & Content Pages',
    description: 'Optimized templates for publishing articles, news, and more.',
  },
  {
    icon: <Smartphone className="w-8 h-8 text-purple-500" />,
    title: 'Responsive & High Performance',
    description: 'Websites that work flawlessly on all devices with fast load times.',
  },
  {
    icon: <Send className="w-8 h-8 text-purple-500" />,
    title: 'Form Integration',
    description: 'Connect contact forms to email, WhatsApp, or third-party services.',
  },
]

export default function Services() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-white">
      <h2 className="text-4xl font-bold mb-12 text-center">
        What I Can Do For You
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-zinc-800 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/20 transition duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-zinc-300 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
