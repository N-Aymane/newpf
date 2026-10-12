import { Navbar } from "@/components/navbar"
import { Hero, About, Experience, Projects, Skills, Certifications, Contact, Footer } from "@/components/portfolio-sections"

export default function PortfolioPage() {
  return (
    <div id="top" className="min-h-screen font-sans">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
          <Projects />
          <About />
          <Experience />
          <Skills />
          <Certifications />
          <Contact />
      </main>
      <Footer />
    </div>
  )
}
