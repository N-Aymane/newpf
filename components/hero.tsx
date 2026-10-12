import { ArrowDownRight, ArrowUpRight, Download, Plane } from "lucide-react"
import { profile } from "@/lib/portfolio"
import { Reveal } from "./reveal"

export function Hero() {
  return <section className="hero ai-hero page-width" aria-labelledby="hero-title">
    <Reveal className="hero-content">
      <p className="hero-role">{profile.headline}</p>
      <h1 id="hero-title">Aymane<br />Naouri<span className="accent">.</span></h1>
      <p className="hero-description"><strong>AI engineering, from model to product.</strong><br />I build intelligent systems, explore data, and turn ideas into useful software.</p>
      <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={18} aria-hidden="true" /></a><a className="text-link" href="#contact">Get in touch <ArrowUpRight size={18} aria-hidden="true" /></a></div>
      <a className="text-link resume-download" href="/aymane-naouri-resume.pdf" download="Aymane-Naouri-Resume.pdf"><Download size={18} aria-hidden="true" /> Download résumé <span className="resume-format">PDF</span></a>
    </Reveal>
    <Reveal className="hero-feature" delay={0.1}>
      <article className="airline-feature">
        <div className="feature-context"><Plane size={22} strokeWidth={1.5} aria-hidden="true" /><span>Royal Air Maroc · AI internship</span></div>
        <h2>Intelligence for<br />airline operations.</h2>
        <p>A dashboard connecting flight-delay prediction, disruption risk, and financial-impact analysis.</p>
        <ol className="model-flow" aria-label="Project architecture">
          <li><span>Prediction</span><strong>XGBoost</strong></li>
          <li><span>Model API</span><strong>FastAPI</strong></li>
          <li><span>Interface</span><strong>Next.js</strong></li>
        </ol>
        <div className="feature-footer"><span>Prototype with mock data</span><a className="text-link" href="https://github.com/N-Aymane/flight_rerouting" target="_blank" rel="noopener noreferrer">View project <ArrowUpRight size={17} aria-hidden="true" /></a></div>
      </article>
    </Reveal>
  </section>
}
