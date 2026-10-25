"use client"
import { translate, type Locale } from "@/lib/dictionary"

import Script from "next/script"
import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Mail, ShieldCheck } from "lucide-react"
import { Button } from "./liqui/button"

interface Turnstile {
  render: (container: HTMLElement, options: { sitekey: string; action: string; theme: "auto"; language: Locale; size: "compact"; callback: (token: string) => void; "error-callback": () => void; "expired-callback": () => void }) => string
  remove: (id: string) => void
  reset: (id: string) => void
}
declare global { interface Window { turnstile?: Turnstile } }

export function ProtectedEmail({ siteKey, configured, locale = "en" }: { siteKey: string; configured: boolean; locale?: Locale }) {
  const t = (text: string) => translate(locale, text)
  const [open, setOpen] = useState(false)
  const [ready, setReady] = useState(false)
  const [token, setToken] = useState("")
  const [email, setEmail] = useState("")
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState("")
  const container = useRef<HTMLDivElement>(null)
  const widget = useRef<string | null>(null)
  const request = useRef<AbortController | null>(null)
  useEffect(() => () => request.current?.abort(), [])
  useEffect(() => {
    if (!open || !ready || !container.current || !window.turnstile || email) return
    widget.current = window.turnstile.render(container.current, {
      sitekey: siteKey, action: "reveal-email", theme: "auto", language: locale, size: "compact",
      callback: value => { setToken(value); setError("") },
      "error-callback": () => { setToken(""); setError("Verification could not load. Please retry or use LinkedIn.") },
      "expired-callback": () => { setToken(""); setError("Verification expired. Please verify again.") },
    })
    return () => { if (widget.current !== null) window.turnstile?.remove(widget.current); widget.current = null }
  }, [open, ready, siteKey, email, locale])

  async function revealEmail() {
    if (!token || busy) return
    setBusy(true)
    setError("")
    request.current = new AbortController()
    try {
      const response = await fetch("/api/contact-email", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token }), signal: request.current.signal, cache: "no-store" })
      const result = await response.json() as { email?: string; error?: string }
      if (!response.ok || !result.email) throw new Error(result.error || "Unable to reveal email. Please try again.")
      setEmail(result.email)
    } catch (failure) {
      if (request.current.signal.aborted) return
      setError(failure instanceof Error ? failure.message : "Unable to reveal email. Please try again.")
      setToken("")
      if (widget.current !== null) window.turnstile?.reset(widget.current)
    } finally { setBusy(false) }
  }

  if (email) return <a className="email-link" href={`mailto:${email}`}><Mail size={22} aria-hidden="true" /><span>{email}</span><ArrowUpRight size={22} aria-hidden="true" /></a>
  return <div className="protected-email">
    <Button className="email-link email-reveal liqui-email-trigger" glass={{ material: "clear", radius: 16 }} onClick={() => setOpen(true)} aria-expanded={open} aria-controls="email-verification"><Mail size={22} aria-hidden="true" /><span>{t("Reveal professional email")}</span><ShieldCheck size={22} aria-hidden="true" /></Button>
    {open && <div id="email-verification" className="email-verification">
      {configured ? <><p>{t("Complete the verification to view my email address.")}</p><Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" onReady={() => setReady(true)} onError={() => setError("Verification could not load. Please reload or contact me on LinkedIn.")} /><div ref={container} className="turnstile-container" /><Button variant="accent" className="liqui-action liqui-action-accent" disabled={!token || busy} onClick={revealEmail}>{t(busy ? "Verifying…" : "Show email address")}</Button></> : <p role="status">{t("Email verification is temporarily unavailable. You can contact me on LinkedIn below.")}</p>}
      {error && <p role="alert" className="verification-error">{t(error)}</p>}
    </div>}
  </div>
}
