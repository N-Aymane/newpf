import "server-only"
import { cookies } from "next/headers"
import { translate, type Locale } from "./dictionary"

export async function getLocale(): Promise<Locale> {
  return (await cookies()).get("portfolio-language")?.value === "fr" ? "fr" : "en"
}

export async function getTranslator() {
  const locale = await getLocale()
  return { locale, t: (text: string) => translate(locale, text) }
}
