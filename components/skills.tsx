"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import LogoLoop, { LogoItem } from "./LogoLoop"
import "./LogoLoop.css"
import "./LogoLoop.custom.css"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiPytorch, SiTensorflow, SiJupyter, SiShadcnui ,SiFramer, SiOllama, SiAnaconda, SiJavascript, SiDocker, SiMongodb, SiGit, SiLinux } from "react-icons/si"
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
      { node: <SiReact />, title: "React", href: "https://react.dev", color: "#61DAFB" },
      { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org", color: "#000" },
      { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org", color: "#3178C6" },
      { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com", color: "#38BDF8" },
      { node: <SiPython />, title: "Python", href: "https://www.python.org", color: "#3776AB" },
      { node: <SiPytorch />, title: "Pytorch", href: "https://www.pytorch.org/", color: "#EE4C2C" },
      { node: <SiTensorflow />, title: "TensorFlow", href: "https://www.tensorflow.org/", color: "#FF6F00" },
      { node: <FaJava />, title: "Java", href: "https://www.java.com", color: "#007396" },
      { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", color: "#F7DF1E" },
      { node: <SiDocker />, title: "Docker", href: "https://www.docker.com", color: "#2496ED" },
      { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com", color: "#47A248" },
      { node: <SiGit />, title: "Git", href: "https://git-scm.com", color: "#F05032" },
      { node: <SiLinux />, title: "Linux", href: "https://www.linux.org", color: "#FCC624" },
      { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org", color: "#336791" },
      { node: <SiKubernetes />, title: "Kubernetes", href: "https://kubernetes.io", color: "#326CE5" },
      { node: <SiOracle />, title: "Oracle", href: "https://www.oracle.com", color: "#F80000" },
      { node: <SiPhp />, title: "PHP", href: "https://www.php.net", color: "#777BB4" },
      { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com", color: "#FF2D20" },
      { node: <SiJupyter />, title: "Jupyte", href: "https://jupyter.org", color: "#F37626" },
      { node: <SiAnaconda />, title: "Anaconda", href: "https://www.anaconda.com", color: "#44A833" },
      { node: <SiOllama />, title: "Ollama", href: "https://ollama.com", color: "#686767ff" },
      { node: <SiFramer />, title: "Framer Motion", href: "https://www.framer.com/motion/", color: "#c8ff00ff" },
      { node: <SiShadcnui />, title: "shadcn", href: "https://ui.shadcn.com", color: "#5c5959ff" },
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
  <LogoLoop logos={techLogos} speed={80} logoHeight={40} gap={40} scaleOnHover width="100%"
    renderItem={(item) => {
      const logoContent = ('node' in item && item.color)
        ? <span style={{ color: item.color }} className="logoloop__node">{item.node}</span>
        : ('node' in item ? <span className="logoloop__node">{item.node}</span> : <img src={item.src} alt={item.title || ''} />);
      if (item.href) {
        return (
          <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.title || 'logo'}>
            {logoContent}
          </a>
        );
      }
      return logoContent;
    }}
  />
      </div>
    </section>
  )
}
