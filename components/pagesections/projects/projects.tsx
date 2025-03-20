'use client'

import Link from 'next/link'

const projects = [
  {
    title: 'Loja e Lar',
    url: 'https://loja-e-lar.vercel.app',
    description: 'Personal e-commerce built with Next.js, Tailwind CSS, Supabase, and TypeScript.',
  },
  {
    title: 'Gaveta de Mulher',
    url: 'https://gaveta-de-mulher.vercel.app',
    description: 'Collaborative project using Next.js and Tailwind CSS.',
  },
]

export default function Projects() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 text-white">
      <h2 className="text-4xl font-bold mb-12 border-b-2 border-indigo-500 inline-block">Projects</h2>

      <div className="grid gap-8 md:grid-cols-2 w-full max-w-5xl">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.url}
            target="_blank"
            className="p-6 rounded-2xl bg-gray-800 hover:bg-gray-700 transition-colors shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-2 text-indigo-400">{project.title}</h3>
            <p className="text-lg text-gray-300">{project.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
