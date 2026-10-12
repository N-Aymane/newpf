import { ArrowUpRight, Github, GraduationCap, Linkedin } from "lucide-react"
import { certifications, education, experiences, profile, projects, skillCategories } from "@/lib/portfolio"
import { Reveal } from "./reveal"
import { ProtectedEmail } from "./protected-email"

export { Hero } from "./hero"

export function Projects() {
  return <section id="projects" className="section page-width work-section">
    <div className="section-heading"><h2>Selected work</h2><p>AI, quantitative research, and applications built around real problems.</p></div>
    <div className="featured-work">{projects.slice(0,2).map(project => <Reveal key={project.title}><article className="featured-project">
      <p className="work-category">{project.category}</p><h3>{project.title}</h3><p className="work-description">{project.description}</p>
      <ul className="tags" aria-label="Technologies">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      {project.url && <a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>View project on GitHub <ArrowUpRight size={17} aria-hidden="true" /></a>}
    </article></Reveal>)}</div>
    <div className="other-work"><h3>More explorations</h3>{projects.slice(2).map(project => <article className="work-row" key={project.title}><h4>{project.title}</h4><p>{project.description}</p><ul className="tags" aria-label="Technologies">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></article>)}</div>
    <a className="text-link project-link" href={profile.github} target="_blank" rel="noopener noreferrer">Explore my GitHub profile <ArrowUpRight size={18} aria-hidden="true" /></a>
  </section>
}
export function About() {
  return <section id="about" className="section page-width about-section"><div className="section-heading"><h2>Curiosity meets<br />engineering.</h2></div><Reveal className="about-copy">{profile.about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</Reveal></section>
}
export function Experience() {
  return <section id="experience" className="section page-width"><div className="section-heading"><h2>Experience</h2><p>Learning through research, industry, and hands-on development.</p></div><div className="experience-list">{experiences.map(exp => <Reveal key={exp.company} className="experience-row"><div className="experience-company"><h3>{exp.company}</h3>{exp.location && <p>{exp.location}</p>}</div><div className="experience-detail"><p className="experience-role">{exp.role}</p>{exp.description && <p>{exp.description}</p>}{exp.url && <a className="text-link experience-repository" href={exp.url} target="_blank" rel="noopener noreferrer">View internship project <ArrowUpRight size={16} aria-hidden="true" /></a>}</div><p className="experience-date">{exp.period}</p></Reveal>)}</div></section>
}
export function Skills() {
  return <section id="skills" className="section page-width"><div className="section-heading"><h2>A wider toolkit</h2><p>Intelligent systems, useful applications, and the foundations beneath them.</p></div><div className="skills-list">{skillCategories.map(category => <Reveal className="skill-group" key={category.name}><h3>{category.name}</h3><ul className="skill-items">{category.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></Reveal>)}</div></section>
}
export function Certifications() {
  return <section id="education" className="section page-width education-section"><div><div className="section-heading"><h2>Education & learning</h2></div><div className="education-block"><GraduationCap size={30} aria-hidden="true" /><h3>{education.school}</h3><p>{education.degree}</p><div className="education-meta"><span>{education.period}</span><span>{education.status}</span></div></div></div><div id="certifications" className="certification-block"><h3>Certifications</h3><ul>{certifications.map(cert => <li key={cert}>{cert}</li>)}</ul></div></section>
}
export function Contact() {
  return <section id="contact" className="section page-width contact-section"><div className="section-heading"><h2>Let’s build<br />something useful.</h2><p>For projects, research, or a conversation about what comes next.</p></div><div className="contact-links"><ProtectedEmail siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""} configured={Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && process.env.TURNSTILE_SECRET_KEY)} /><div className="social-links"><a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} /> LinkedIn <ArrowUpRight size={16} /></a><a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={18} /> GitHub <ArrowUpRight size={16} /></a></div></div></section>
}
export function Footer() {
  return <footer className="page-width footer"><p>© {new Date().getFullYear()} {profile.name}</p><p>{profile.location}</p><a href="#top" className="text-link">Back to top ↑</a></footer>
}
