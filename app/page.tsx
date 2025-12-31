import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main className="w-full px-0">
        <Hero />
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}
