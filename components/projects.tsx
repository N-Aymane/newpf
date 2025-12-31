"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github } from "lucide-react"

const TargetCursor = dynamic(() => import("./TargetCursor"), { ssr: false })

const projects = [
  {
    title: "Stock Management Web App",
    description: "A robust platform for real-time inventory tracking and management with secure authentication.",
    tags: ["Next.js", "Django REST", "MySQL", "JWT"],
    github: "https://github.com/N-Aymane",
  },
  {
    title: "Fine-Tuned Chatbot",
    description: "Intelligent chatbot utilizing Mistral LLM and MongoDB for context-aware conversations.",
    tags: ["Mistral LLM", "MongoDB", "Python"],
    github: "https://github.com/N-Aymane",
  },
  {
    title: "Absence Management System",
    description: "Comprehensive system for tracking and managing educational or corporate attendance.",
    tags: ["Laravel", "MySQL", "Tailwind"],
    github: "https://github.com/N-Aymane",
  },
  {
    title: "MERN Blog Platform",
    description: "A full-featured blog platform with content management and user engagement features.",
    tags: ["Next.js", "Express", "MongoDB", "Node.js"],
    github: "https://github.com/N-Aymane",
  },
]

export function Projects() {
  const [showCursor, setShowCursor] = useState(false)

  React.useEffect(() => {
    if (showCursor) {
      document.body.style.cursor = 'none';
    } else {
      document.body.style.cursor = '';
    }
    return () => {
      document.body.style.cursor = '';
    };
  }, [showCursor]);

  return (
    <section
      id="projects"
      className="py-20 border-t relative"
      onMouseEnter={() => setShowCursor(true)}
      onMouseLeave={() => setShowCursor(false)}
    >
      {showCursor && (
        <TargetCursor spinDuration={2} hideDefaultCursor={false} parallaxOn={true} />
      )}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 gap-4">
        <h2 className="text-3xl font-bold tracking-tight">Selected Projects</h2>
        <a
          href="https://github.com/N-Aymane"
          className="text-sm font-medium hover:text-primary underline underline-offset-4"
        >
          View all on GitHub
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col group hover:border-primary/50 transition-colors cursor-target">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono text-muted-foreground uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
