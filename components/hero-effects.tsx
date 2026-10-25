"use client"

import { useSyncExternalStore } from "react"
import BlurText from "./react-bits/BlurText"

const query = "(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)"
const subscribe = (callback: () => void) => {
  const media = window.matchMedia(query)
  media.addEventListener("change", callback)
  return () => media.removeEventListener("change", callback)
}
const snapshot = () => window.matchMedia(query).matches
const serverSnapshot = () => false

export function HeroHeadline({ text }: { text: string }) {
  const animate = useSyncExternalStore(subscribe, snapshot, serverSnapshot)
  if (!animate) return <span>{text}</span>
  return <BlurText text={text} className="hero-blur-text" delay={55} blur={4} distance={6} stepDuration={0.18} direction="bottom" />
}
