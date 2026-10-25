"use server"

import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"

export async function changeLanguage(data: FormData) {
  const locale = data.get("language")
  if (locale !== "en" && locale !== "fr") return
  ;(await cookies()).set("portfolio-language", locale, {
    httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 60 * 60 * 24 * 365,
  })
  revalidatePath("/", "layout")
}
