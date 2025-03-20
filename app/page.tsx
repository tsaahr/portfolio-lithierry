// app/page.tsx
import Hero from '@/components/forpage/hero/Hero'
import Projects from '@/components/forpage/projects/projects'
import Services from '@/components/forpage/services/services'
import Skills from '@/components/forpage/skills/skills'

export default function HomePage() {
  return (
    <main className="scroll-smooth">
      <section id="hero" className="min-h-screen snap-start">
        <Hero />
      </section>

      <section id="projects" className="min-h-screen snap-start">
        <Projects />
      </section>

      <section id="services" className="min-h-screen snap-start">
        <Services />
      </section>

      <section id="skills" className="min-h-screen snap-start">
        <Skills />
      </section>
    </main>
  )
}
