import { getTranslator } from "@/lib/locale"
import { ArrowUpRight, Github, GraduationCap, Linkedin } from "lucide-react"
import { certifications, education, experiences, profile, projects, skillCategories } from "@/lib/portfolio"
import { Reveal } from "./reveal"
import { ProtectedEmail } from "./protected-email"
import { ProjectGallery } from "./project-gallery"
import { hostedProjects } from "@/lib/hosted-projects"

export { Hero } from "./hero"

export async function Projects() {
  const { t, locale } = await getTranslator()
  return <section id="projects" className="section page-width work-section">
    <div className="section-heading"><h2>{t("Selected work")}</h2><p>{t("Explore the hosted apps, then the engineering behind my other projects.")}</p></div>
    <ProjectGallery locale={locale} items={hostedProjects.map(item => ({ ...item, description: t(item.description), subtitle: item.subtitle ? t(item.subtitle) : undefined, alt: t(item.alt) }))} />
    <div className="other-work"><h3>{t("More engineering work")}</h3>{projects.filter(project => !project.appUrl).map(project => <article className="work-row" key={t(project.title)}><h4>{t(project.title)}</h4><p>{t(project.description)}</p><ul className="tags" aria-label={t("Technologies")}>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></article>)}</div>
  </section>
}
export async function About() {
  const { t } = await getTranslator()
  return <section id="about" className="section page-width about-section"><div className="section-heading"><h2>{t("Curiosity meets")}<br />{t("engineering.")}</h2></div><Reveal className="about-copy">{profile.about.map(paragraph => <p key={t(paragraph)}>{t(paragraph)}</p>)}</Reveal></section>
}
export async function Experience() {
  const { t } = await getTranslator()
  return <section id="experience" className="section page-width"><div className="section-heading"><h2>{t("Experience")}</h2><p>{t("Learning through research, industry, and hands-on development.")}</p></div><div className="experience-list">{experiences.map(exp => <Reveal key={exp.company} className="experience-row"><div className="experience-company"><h3>{exp.company}</h3>{exp.location && <p>{t(exp.location)}</p>}</div><div className="experience-detail"><p className="experience-role">{t(exp.role)}</p>{exp.description && <p>{t(exp.description)}</p>}{exp.url && <a className="text-link experience-repository" href={exp.url} target="_blank" rel="noopener noreferrer">{t("View internship project")} <ArrowUpRight size={16} aria-hidden="true" /></a>}</div><p className="experience-date">{t(exp.period)}</p></Reveal>)}</div></section>
}
export async function Skills() {
  const { t } = await getTranslator()
  return <section id="skills" className="section page-width"><div className="section-heading"><h2>{t("A wider toolkit")}</h2><p>{t("Intelligent systems, useful applications, and the foundations beneath them.")}</p></div><div className="skills-list">{skillCategories.map(category => <Reveal className="skill-group" key={t(category.name)}><h3>{t(category.name)}</h3><ul className="skill-items">{category.skills.map(skill => <li key={t(skill)}>{t(skill)}</li>)}</ul></Reveal>)}</div></section>
}
export async function Certifications() {
  const { t } = await getTranslator()
  return <section id="education" className="section page-width education-section"><div><div className="section-heading"><h2>{t("Education & learning")}</h2></div><div className="education-block"><GraduationCap size={30} aria-hidden="true" /><h3>{education.school}</h3><p>{t(education.degree)}</p><div className="education-meta"><span>{education.period}</span><span>{t(education.status)}</span></div></div></div><div id="certifications" className="certification-block"><h3>{t("Certifications")}</h3><ul>{certifications.map(cert => <li key={cert}>{cert}</li>)}</ul></div></section>
}
export async function Contact() {
  const { t, locale } = await getTranslator()
  return <section id="contact" className="section page-width contact-section"><div className="section-heading"><h2>{t("Let’s build")}<br />{t("something useful.")}</h2><p>{t("For projects, research, or a conversation about what comes next.")}</p></div><div className="contact-links"><ProtectedEmail key={locale} locale={locale} siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""} configured={Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && process.env.TURNSTILE_SECRET_KEY)} /><div className="social-links"><a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} /> {t("LinkedIn")} <ArrowUpRight size={16} /></a><a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={18} /> {t("GitHub")} <ArrowUpRight size={16} /></a></div></div></section>
}
export async function Footer() {
  const { t } = await getTranslator()
  return <footer className="page-width footer"><p>{t("©")} {new Date().getFullYear()} {profile.name}</p><p>{t(profile.location)}</p><a href="#top" className="text-link">{t("Back to top ↑")}</a></footer>
}
