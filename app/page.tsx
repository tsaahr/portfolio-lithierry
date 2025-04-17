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
      <section id="home" className="relative group transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
        <Hero />
        <div className="separator" />
      </section>

      {/*<section id="projects" className="relative group transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
        <Projects />
        <div className="separator" />
      </section>*/}

      <section id="services" className="relative group transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
        <Services />
        <div className="separator" />
      </section>

      <section id="skills" className="relative group transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
        <Skills />
        <div className="separator" />
      </section>

      <section id="about" className="relative group transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
        <AboutPage />
      </section>
    </>
  );
}
