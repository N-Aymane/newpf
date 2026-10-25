import { Navbar } from "@/components/navbar"
import { Hero, About, Experience, Projects, Skills, Certifications, Contact, Footer } from "@/components/portfolio-sections"
import { getTranslator } from "@/lib/locale"

export default async function PortfolioPage() {
  const { locale, t } = await getTranslator()
  return (
    <div id="top" className="min-h-screen font-sans">
      <a className="skip-link" href="#main-content">{t("Skip to content")}</a>
      <Navbar locale={locale} />
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
