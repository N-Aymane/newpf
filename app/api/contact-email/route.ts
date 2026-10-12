import { NextResponse } from "next/server"
import { contactEmail } from "@/lib/contact-email"

const headers = { "Cache-Control": "no-store" }
const reply = (body: object, status: number) => NextResponse.json(body, { status, headers })

export async function POST(request: Request) {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret || !process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) {
    return reply({ error: "Email verification is temporarily unavailable. Please contact me on LinkedIn." }, 503)
  }
  const requestUrl = new URL(request.url)
  const publicHost = request.headers.get("host") || requestUrl.host
  let origin: URL
  try { origin = new URL(request.headers.get("origin") || "") } catch {
    return reply({ error: "Invalid request origin." }, 403)
  }
  if (origin.host !== publicHost || origin.protocol !== requestUrl.protocol) {
    return reply({ error: "Invalid request origin." }, 403)
  }
  let body: unknown
  try { body = await request.json() } catch { return reply({ error: "Invalid verification request." }, 400) }
  const token = body && typeof body === "object" && "token" in body ? body.token : undefined
  if (typeof token !== "string" || token.length === 0 || token.length > 2048) {
    return reply({ error: "Please complete the verification." }, 400)
  }
  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, response: token }), cache: "no-store", signal: AbortSignal.timeout(10000),
    })
    if (!response.ok) return reply({ error: "Verification is unavailable. Please try again." }, 502)
    const result = await response.json() as { success?: boolean; action?: string; hostname?: string }
    if (result.success !== true || result.action !== "reveal-email" || result.hostname !== origin.hostname) {
      return reply({ error: "Verification failed or expired. Please try again." }, 403)
    }
    return reply({ email: contactEmail }, 200)
  } catch { return reply({ error: "Verification is unavailable. Please try again." }, 502) }
}
