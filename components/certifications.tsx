"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"

const certs = [
  "IBM Python for Data Science, AI & Development",
  "Meta React Basics",
  "Neural Networks & PyTorch",
  "Cybersecurity Essentials (with Honors)",
]

export function Certifications() {
  return (
    <section className="py-20 border-t">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
        </div>
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center gap-3 p-4 rounded-lg border bg-card/30"
            >
              <Award className="text-primary h-5 w-5 shrink-0" />
              <span className="text-sm font-medium leading-tight">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
