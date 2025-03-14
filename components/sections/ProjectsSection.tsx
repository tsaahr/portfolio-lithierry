'use client'

import { useState } from 'react'

const salesforceProjects = [
  {
    title: 'Salesforce Flow Automation',
    description: 'Automated a business process using Salesforce Flow and Apex triggers.',
    link: '#'
  },
  {
    title: 'Lead Management LWC',
    description: 'Created a custom Lightning Web Component to manage leads more efficiently.',
    link: '#'
  }
]

const fullstackProjects = [
  {
    title: 'Loja e Lar (E-commerce)',
    description: 'Fullstack app using Next.js, Tailwind, TypeScript and Supabase.',
    link: '#'
  },
  {
    title: 'Portfolio Site',
    description: 'Responsive personal portfolio built with Next.js and TailwindCSS.',
    link: '#'
  }
]

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<'salesforce' | 'fullstack'>('salesforce')

  const projects = activeTab === 'salesforce' ? salesforceProjects : fullstackProjects

  return (
    <section id="projects" className="w-full py-16 px-6 md:px-12 bg-white/90 backdrop-blur-sm">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-purple-700">Projects</h2>

      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setActiveTab('salesforce')}
          className={`px-4 py-2 rounded-md font-semibold transition ${
            activeTab === 'salesforce'
              ? 'bg-purple-700 text-white'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
          }`}
        >
          Salesforce
        </button>
        <button
          onClick={() => setActiveTab('fullstack')}
          className={`px-4 py-2 rounded-md font-semibold transition ${
            activeTab === 'fullstack'
              ? 'bg-purple-700 text-white'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
          }`}
        >
          Fullstack
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-xl shadow-md bg-white hover:shadow-lg transition border border-gray-200"
          >
            <h3 className="text-xl font-bold text-purple-700">{project.title}</h3>
            <p className="text-gray-700 mt-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              className="text-purple-500 hover:underline mt-3 inline-block"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
