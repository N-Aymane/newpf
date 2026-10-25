"use client"
import { translate, type Locale } from "@/lib/dictionary"

import dynamic from "next/dynamic"
import Image from "next/image"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { Component, useEffect, useRef, useState, type ReactNode } from "react"
import type { HostedProject } from "@/lib/hosted-projects"

const FlexCarousel = dynamic(() => import("./react-bits/FlexCarousel"), { ssr: false })

class GalleryBoundary extends Component<{ fallback: ReactNode; children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  render() { return this.state.failed ? this.props.fallback : this.props.children }
}

export function ProjectGallery({ items, locale = "en" }: { items: HostedProject[]; locale?: Locale }) {
  const t = (text: string) => translate(locale, text)
  const stage = useRef<HTMLDivElement>(null)
  const [interactive, setInteractive] = useState(false)
  const [active, setActive] = useState(0)
  useEffect(() => {
    const node = stage.current
    if (!node) return
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    let near = false
    const update = () => {
      if (!near || media.matches) { setInteractive(false); return }
      const canvas = document.createElement("canvas")
      const gl = canvas.getContext("webgl2")
      const supported = Boolean(gl)
      gl?.getExtension("WEBGL_lose_context")?.loseContext()
      setInteractive(supported)
    }
    const observer = new IntersectionObserver(([entry]) => { near = entry.isIntersecting; update() }, { rootMargin: "240px" })
    observer.observe(node)
    media.addEventListener("change", update)
    return () => { observer.disconnect(); media.removeEventListener("change", update) }
  }, [])

  const fallback = <div className="project-gallery-fallback" role="group" aria-label={t("Hosted app previews")}>
    {items.map(item => <figure key={item.src}><a href={item.appUrl} target="_blank" rel="noopener noreferrer" aria-label={`${t("View app")}: ${item.title}`}><Image src={item.src} alt={item.alt} width={1265} height={712} sizes="(max-width: 768px) 85vw, 660px" /><figcaption>{item.title}</figcaption></a></figure>)}
  </div>

  function move(direction: number) {
    const carousel = stage.current?.querySelector<HTMLElement>('[aria-roledescription="carousel"]')
    if (carousel) carousel.dispatchEvent(new KeyboardEvent("keydown", { key: direction > 0 ? "ArrowRight" : "ArrowLeft", bubbles: true }))
    else {
      const next = Math.max(0, Math.min(items.length - 1, active + direction))
      const gallery = stage.current?.querySelector<HTMLElement>(".project-gallery-fallback")
      const figure = gallery?.children[next] as HTMLElement | undefined
      if (gallery && figure) gallery.scrollTo({ left: figure.offsetLeft - gallery.offsetLeft - 28, behavior: "instant" })
      setActive(next)
    }
  }

  const selected = items[active] || items[0]
  return <div className="project-gallery">
    <div className="project-gallery-stage" ref={stage}>
      {interactive ? <GalleryBoundary fallback={fallback}><FlexCarousel items={items} preset="liquid" intro="rise" cardHeight={0.5} gap={12} squeeze={0.2} focusOnClick captions captureWheel={false} radius={20} ariaLabel={t("Image carousel")} getItemLabel={(label, index, total) => `${label}, ${index + 1} ${locale === "fr" ? "sur" : "of"} ${total}`} onChange={index => setActive(index)} /></GalleryBoundary> : fallback}
    </div>
    <div className="project-gallery-toolbar">
      <p>{t("Drag previews or use the arrow keys.")}</p>
      <div className="project-gallery-controls"><button type="button" aria-label={t("Previous app preview")} onClick={() => move(-1)}><ArrowLeft size={18} aria-hidden="true" /></button><button type="button" aria-label={t("Next app preview")} onClick={() => move(1)}><ArrowRight size={18} aria-hidden="true" /></button></div>
    </div>
    <div className="hosted-project-detail" aria-live="polite" aria-atomic="true">
      <div><h3>{selected.title}</h3><p>{selected.description}</p></div>
      <a className="button button-primary" href={selected.appUrl} target="_blank" rel="noopener noreferrer" aria-label={`${t("View app")}: ${selected.title}`}>{t("View app")} <ArrowUpRight size={18} aria-hidden="true" /></a>
    </div>
    <details className="hosted-project-index"><summary>{t("All hosted apps")}</summary><ul>{items.map(item => <li key={item.appUrl}><a className="text-link" href={item.appUrl} target="_blank" rel="noopener noreferrer">{item.title}<ArrowUpRight size={16} aria-hidden="true" /></a></li>)}</ul></details>
  </div>
}
