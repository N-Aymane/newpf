"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contact" className="py-20 border-t">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="space-y-4">
            <div>
              
            </div>
            <div>
              <p className="text-sm font-mono text-muted-foreground uppercase mb-1">Social</p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/aymane-naouri" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com/N-Aymane" className="hover:text-primary transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-7">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input placeholder="John Doe" className="bg-background" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="john@example.com" className="bg-background" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea placeholder="Hi Aymane, I'd like to talk about..." className="min-h-[150px] bg-background" />
            </div>
            <Button size="lg" className="w-full sm:w-auto">
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
