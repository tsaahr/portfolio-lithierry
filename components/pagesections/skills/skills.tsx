'use client'

import { Lightbulb, Users, Brain, Code, Server, Palette } from 'lucide-react'

const softSkills = [
  { icon: <Lightbulb className="w-6 h-6 text-yellow-400" />, title: 'Creative Thinking' },
  { icon: <Users className="w-6 h-6 text-yellow-400" />, title: 'Team Collaboration' },
  { icon: <Brain className="w-6 h-6 text-yellow-400" />, title: 'Problem Solving' },
  { icon: <Lightbulb className="w-6 h-6 text-yellow-400" />, title: 'Adaptability' },
]

const hardSkills = [
  { icon: <Code className="w-6 h-6 text-green-400" />, title: 'JavaScript / TypeScript' },
  { icon: <Palette className="w-6 h-6 text-green-400" />, title: 'Tailwind CSS / UI Design' },
  { icon: <Code className="w-6 h-6 text-green-400" />, title: 'React / Next.js' },
  { icon: <Server className="w-6 h-6 text-green-400" />, title: 'Supabase / PostgreSQL' },
]

export default function Skills() {
  return (
    <section className="min-h-screen text-white flex flex-col items-center justify-center py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-purple-400 text-center">Skills</h2>
      <p className="text-zinc-400 text-center mb-12 max-w-xl">
        A combination of technical knowledge and interpersonal strengths that allow me to create, communicate, and collaborate effectively.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-yellow-400 border-b border-yellow-500 pb-2">
            Soft Skills
          </h3>
          <ul className="space-y-4">
            {softSkills.map((skill, index) => (
              <li key={index} className="flex items-center gap-3 bg-zinc-800 p-4 rounded-xl shadow hover:shadow-yellow-500/10 transition">
                {skill.icon}
                <span className="text-lg">{skill.title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hard Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-green-400 border-b border-green-500 pb-2">
            Hard Skills
          </h3>
          <ul className="space-y-4">
            {hardSkills.map((skill, index) => (
              <li key={index} className="flex items-center gap-3 bg-zinc-800 p-4 rounded-xl shadow hover:shadow-green-500/10 transition">
                {skill.icon}
                <span className="text-lg">{skill.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
