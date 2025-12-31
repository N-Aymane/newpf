"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-20 border-t w-full">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 flex items-start">
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              I am a software engineering student passionate about innovative technologies and digital transformation. My
              journey in tech is driven by a focus on problem-solving and a desire to create impactful digital solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              With experience in full-stack web development, data analysis, and AI projects, I blend robust engineering
              principles with data-driven insights. I thrive at the intersection of complex backend architectures and
              intuitive frontend experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pt-4 flex items-center gap-2 text-foreground font-medium"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              Rabat, Morocco
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
