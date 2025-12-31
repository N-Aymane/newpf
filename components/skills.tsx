"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import LogoLoop, { LogoItem } from "./LogoLoop"
import "./LogoLoop.css"
import "./LogoLoop.custom.css"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiPytorch, SiJupyter, SiShadcnui ,SiFramer, SiOllama, SiAnaconda, SiJavascript, SiDocker, SiMongodb, SiGit, SiLinux } from "react-icons/si"
import { SiPostgresql, SiKubernetes, SiOracle, SiPhp, SiLaravel } from "react-icons/si"
import { FaJava } from "react-icons/fa6";
const skillCategories = [
  {
    name: "Programming",
    skills: ["Python", "Java", "PHP", "JavaScript", "TypeScript", "C", "C++"],
  },
  {
    name: "Frameworks",
    skills: ["Next.js", "React", "Laravel", "Django", "Flask"],
  },
  {
    name: "Data & AI",
    skills: ["SQL", "MongoDB", "Power BI", "Data Analysis", "LLMs", "PyTorch"],
  },
  {
    name: "Tools",
    skills: ["Git", "Docker", "Linux", "Anaconda", "Postgres", "Oracle", "Kubernetes"],
  },
]

export function Skills() {
  // Example logos, replace with your own or use public/logo files
    const techLogos: LogoItem[] = [
      { node: <SiReact />, title: "React", href: "https://react.dev" },
      { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
      { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
      { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
      { node: <SiPython />, title: "Python", href: "https://www.python.org" },
      { node: <SiPytorch />, title: "Pytorch", href: "https://www.pytorch.org/" },
      { node: <FaJava />, title: "Java", href: "https://www.java.com" },
      { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
      { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
      { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
      { node: <SiLinux />, title: "Linux", href: "https://www.linux.org" },
      { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
      { node: <SiKubernetes />, title: "Kubernetes", href: "https://kubernetes.io" },
      { node: <SiOracle />, title: "Oracle", href: "https://www.oracle.com" },
      { node: <SiPhp />, title: "PHP", href: "https://www.php.net" },
      { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
      { node: <SiJupyter />, title: "Jupyte", href: "https://jupyter.org" },
      { node: <SiAnaconda />, title: "Anaconda", href: "https://www.anaconda.com" },
      { node: <SiOllama />, title: "Ollama", href: "https://ollama.com" },
      { node: <SiFramer />, title: "Framer Motion", href: "https://www.framer.com/motion/" },
      { node: <SiShadcnui />, title: "shadcn", href: "https://ui.shadcn.com" },
      
    ];

  return (
    <section id="skills" className="py-20 border-t overflow-hidden">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>
        </div>
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1 text-xs font-medium bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-8 w-full">
  <LogoLoop logos={techLogos} speed={80} logoHeight={40} gap={40} scaleOnHover fadeOut fadeOutColor="#222" width="100%" />
      </div>
    </section>
  )
}
