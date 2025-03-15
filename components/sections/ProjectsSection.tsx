'use client'

import { useState } from 'react'

const salesforceProjects = [
  {
    title: 'Salesforce Project',
    description: 'Coming soon.',
    link: '#',
    details: 'A project showcasing my Salesforce skills is on the way. Stay tuned!'
  }
]

const fullstackProjects = [
  {
    title: 'Loja e Lar (E-commerce)',
    description: 'E-commerce project built with Next.js, TailwindCSS, TypeScript, and Supabase.',
    link: 'https://loja-e-lar.vercel.app/',
    details: 'Full-stack e-commerce with Next.js and Supabase. Includes user auth and basic layout. Admin panel and cart features are under development.'
  }
]

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<'salesforce' | 'fullstack'>('fullstack')
  const [selectedProject, setSelectedProject] = useState<null | typeof fullstackProjects[0]>(null)

  const projects = activeTab === 'salesforce' ? salesforceProjects : fullstackProjects

  return (
    <section id="projects" className="w-full py-16 px-6 md:px-12 bg-black/70 backdrop-blur-md text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-purple-400">Projects</h2>

      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setActiveTab('fullstack')}
          className={`px-4 py-2 rounded-md font-semibold transition ${
            activeTab === 'fullstack'
              ? 'bg-purple-700 text-white'
              : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
          }`}
        >
          Fullstack
        </button>
        <button
          onClick={() => setActiveTab('salesforce')}
          className={`px-4 py-2 rounded-md font-semibold transition ${
            activeTab === 'salesforce'
              ? 'bg-purple-700 text-white'
              : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
          }`}
        >
          Salesforce
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="p-6 rounded-xl shadow-md bg-white/10 hover:shadow-lg transition border border-gray-500 cursor-pointer"
          >
            <h3 className="text-xl font-bold text-purple-300">{project.title}</h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <span className="text-sm text-purple-400 mt-3 inline-block">Click to see more →</span>
          </div>
        ))}
      </div>

      {/* Modal de detalhes do projeto */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-center items-center px-4">
          <div className="bg-white text-black max-w-lg w-full p-6 rounded-xl shadow-xl relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold text-purple-700">{selectedProject.title}</h3>
            <p className="mt-4 text-gray-800">{selectedProject.details}</p>
            <a
              href={selectedProject.link}
              target="_blank"
              className="mt-6 inline-block bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
            >
              Visit Project →
            </a>
          </div>
        </div>
      )}
    </section>
  )
}
