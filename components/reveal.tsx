"use client"
import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"
export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion()
  return <motion.div className={className} initial={false} whileInView={reduceMotion ? undefined : { opacity: [0.5, 1], y: [12, 0] }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.45, delay }}>{children}</motion.div>
}
