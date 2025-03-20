// app/page.tsx

import Hero from "@/components/pagesections/hero/Hero"
import Projects from "@/components/pagesections/projects/projects"
import Services from "@/components/pagesections/services/services"
import Skills from "@/components/pagesections/skills/skills"
import AboutPage from "@/components/pagesections/about/about"
import ContactSection from "@/components/pagesections/contact/contact"

export default function HomePage() {
  return (
    <>
      <section id="home" className="h-screen snap-start">
        <Hero />
      </section>

      <section id="projects" className="h-screen snap-start">
        <Projects />
      </section>

      <section id="services" className="h-screen snap-start">
        <Services />
      </section>

      <section id="skills" className="h-screen snap-start">
        <Skills />
      </section>

      <section id="about" className="min-h-screen snap-start">
        <AboutPage />
      </section>

      <section id="contact" className="min-h-screen snap-start">
        <ContactSection />
      </section>
    </>
  )
}
