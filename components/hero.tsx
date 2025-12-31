"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Orb from "./orb"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-full lg:w-[60%] h-[800px] opacity-70 lg:opacity-100 z-0 orb-glow">
        <Orb hoverIntensity={1} rotateOnHover={true} hue={320} forceHoverState={false} />
      </div>

  <div className="relative z-10 px-6 md:px-12 lg:px-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
            Software Engineering Student
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
            Aymane Naouri<span className="text-primary">.</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-light text-muted-foreground mb-10 max-w-2xl leading-tight">
            Architecting <span className="text-foreground font-normal italic">scalable systems</span> and
            <br className="hidden md:block" /> intelligent data solutions.
          </h2>

          <div className="flex flex-wrap gap-5 mb-12">
            <Button asChild size="lg" className="rounded-none px-8 py-7 text-lg bg-primary hover:bg-primary/90">
              <a href="#projects">
                Selected Works <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-none px-8 py-7 text-lg bg-transparent border-white/20 hover:bg-white/5"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          <div className="flex gap-6 text-muted-foreground">
            <a
              href="https://github.com/N-Aymane"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/aymane-naouri"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            
          </div>
        </motion.div>
      </div>
    </section>
  )
}
