"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Innovation & R&D Lead",
    company: "EMSI AI Nexus",
    period: "2025 – Present",
    description:
      "Leading research and development initiatives in AI, focusing on emerging technologies and practical implementations.",
  },
  {
    title: "Data Analyst Intern",
    company: "OCP Group",
    period: "2025",
    description:
      "Analyzing complex datasets to drive business insights and support data-informed decision-making processes.",
  },
  {
    title: "Full-Stack Developer",
    company: "Digisystems",
    period: "2023",
    description:
      "Developed and maintained full-stack applications, contributing to both frontend and backend development cycles.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 border-t">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
        </div>
        <div className="md:col-span-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>
                <span className="text-sm font-mono text-muted-foreground">{exp.period}</span>
              </div>
              <p className="text-lg font-medium text-foreground/80 mb-3">{exp.company}</p>
              <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
