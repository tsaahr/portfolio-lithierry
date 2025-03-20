// app/page.tsx
import Hero from "@/components/pagesections/hero/Hero";
import Projects from "@/components/pagesections/projects/projects";
import Services from "@/components/pagesections/services/services";
import Skills from "@/components/pagesections/skills/skills";
import AboutPage from "@/components/pagesections/about/about";
import ContactSection from "@/components/pagesections/contact/contact";

export default function HomePage() {
  return (
    <main className="scroll-smooth">
      <section id="home">
        <Hero />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="about">
        <AboutPage />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
