import { getTranslator } from "@/lib/locale"
import { ArrowDownRight, ArrowUpRight, Download, Plane } from "lucide-react"
import { profile } from "@/lib/portfolio"
import { Reveal } from "./reveal"

export async function Hero() {
  const { t } = await getTranslator()
  return <section className="hero ai-hero page-width" aria-labelledby="hero-title">
    <Reveal className="hero-content">
      <p className="hero-role">{t(profile.headline)}</p>
      <h1 id="hero-title">{t("Aymane")}<br />{t("Naouri")}<span className="accent">{t(".")}</span></h1>
      <p className="hero-description"><strong>{t("AI engineering, from model to product.")}</strong><br />{t("I build intelligent systems, explore data, and turn ideas into useful software.")}</p>
      <div className="hero-actions"><a className="button button-primary" href="#projects">{t("Explore my work")} <ArrowDownRight size={18} aria-hidden="true" /></a><a className="text-link" href="#contact">{t("Get in touch")} <ArrowUpRight size={18} aria-hidden="true" /></a></div>
      <a className="text-link resume-download" href="/aymane-naouri-resume.pdf" download="Aymane-Naouri-Resume.pdf"><Download size={18} aria-hidden="true" /> {t("Download résumé")} <span className="resume-format">{t("PDF")}</span></a>
    </Reveal>
    <Reveal className="hero-feature" delay={0.1}>
      <article className="airline-feature">
        <div className="feature-context"><Plane size={22} strokeWidth={1.5} aria-hidden="true" /><span>{t("Royal Air Maroc · AI internship")}</span></div>
        <h2>{t("Intelligence for")}<br />{t("airline operations.")}</h2>
        <p>{t("A dashboard connecting flight-delay prediction, disruption risk, and financial-impact analysis.")}</p>
        <ol className="model-flow" aria-label={t("Project architecture")}>
          <li><span>{t("Prediction")}</span><strong>{t("XGBoost")}</strong></li>
          <li><span>{t("Model API")}</span><strong>{t("FastAPI")}</strong></li>
          <li><span>{t("Interface")}</span><strong>{t("Next.js")}</strong></li>
        </ol>
        <div className="feature-footer"><span>{t("Prototype with mock data")}</span><a className="text-link" href="https://github.com/N-Aymane/flight_rerouting" target="_blank" rel="noopener noreferrer">{t("View project")} <ArrowUpRight size={17} aria-hidden="true" /></a></div>
      </article>
    </Reveal>
  </section>
}
