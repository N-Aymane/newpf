"use client"
import { useEffect, useRef, useState, useSyncExternalStore } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import GlassSurface from "./react-bits/GlassSurface"
import { Button } from "@/components/liqui/button"
import { useTheme } from "next-themes"
import { LanguageSwitch } from "./language-switch"
import { translate, type Locale } from "@/lib/dictionary"
const navLinks = [{ name: "About", href: "#about" }, { name: "Experience", href: "#experience" }, { name: "Skills", href: "#skills" }, { name: "Projects", href: "#projects" }, { name: "Contact", href: "#contact" }]
const subscribe = () => () => {}
const controlsGlass = { radius: 22, blur: 1, refraction: 24, bezel: 8, frost: 0.55, specular: 0.4, dispersion: 0 } as const
export function Navbar({ locale = "en" }: { locale?: Locale }) {
  const t = (text: string) => translate(locale, text)
  const [open, setOpen] = useState(false)
  const mounted = useSyncExternalStore(subscribe, () => true, () => false)
  const { resolvedTheme, setTheme } = useTheme()
  const toggleRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!open) return
    const onEscape = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); toggleRef.current?.focus() } }
    document.addEventListener("keydown", onEscape)
    return () => document.removeEventListener("keydown", onEscape)
  }, [open])
  return <header className="site-header site-header--liqui">
    <div className="page-width"><GlassSurface className="react-bits-nav-shell" width="100%" height={64} borderRadius={32} distortionScale={-180} displace={0.5} backgroundOpacity={0.1} redOffset={0} greenOffset={0} blueOffset={0}>
      <nav className="nav" aria-label={t("Main navigation")}>
        <a className="wordmark" href="#top" aria-label={t("Aymane Naouri home")}>AN<span className="accent">.</span></a>
        <div className="desktop-nav">{navLinks.map(link => <a key={link.name} href={link.href}>{t(link.name)}</a>)}</div>
        <div className="nav-controls">
          <LanguageSwitch locale={locale} />
          <Button className="liqui-nav-control" glass={controlsGlass} aria-label={t(mounted && resolvedTheme === "light" ? "Switch to dark theme" : "Switch to light theme")} onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>{mounted && resolvedTheme === "light" ? <Moon size={19} /> : <Sun size={19} />}</Button>
          <Button ref={toggleRef} className="liqui-nav-control liqui-menu-toggle" glass={controlsGlass} aria-label={t(open ? "Close navigation" : "Open navigation")} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</Button>
        </div>
      </nav>
    </GlassSurface></div>
    {open && <div id="mobile-navigation" className="page-width liqui-mobile-shell"><GlassSurface className="react-bits-mobile-shell" width="100%" height="auto" borderRadius={24} distortionScale={-180} displace={0.5} backgroundOpacity={0.1} redOffset={0} greenOffset={0} blueOffset={0}>
      <nav className="liqui-mobile-links" aria-label={t("Mobile navigation")}>{navLinks.map(link => <a key={link.name} href={link.href} onClick={() => setOpen(false)}>{t(link.name)}</a>)}</nav>
    </GlassSurface></div>}
  </header>
}
