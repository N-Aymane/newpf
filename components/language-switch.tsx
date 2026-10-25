"use client"

import { useFormStatus } from "react-dom"
import { changeLanguage } from "@/app/actions"
import { dictionary, type Locale } from "@/lib/dictionary"

function LanguageButton({ locale }: { locale: Locale }) {
  const { pending } = useFormStatus()
  return <button className="language-switch" type="submit" disabled={pending} aria-busy={pending} aria-label={dictionary[locale].switchLanguage} lang={locale === "en" ? "fr" : "en"}>{pending ? "…" : locale === "en" ? "FR" : "EN"}</button>
}

export function LanguageSwitch({ locale }: { locale: Locale }) {
  return <form action={changeLanguage}><input type="hidden" name="language" value={locale === "en" ? "fr" : "en"} /><LanguageButton locale={locale} /></form>
}
