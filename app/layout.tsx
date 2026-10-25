import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { profile } from "@/lib/portfolio"
import { getLocale } from "@/lib/locale"
import { translate } from "@/lib/dictionary"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

const metadata: Metadata = {
  title: `${profile.name} | AI, Data & Software`,
  description: `${profile.headline}. ${profile.summary}`,
  generator: "next.js",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  return { ...metadata, title: locale === "fr" ? `${profile.name} | IA, données et logiciel` : metadata.title, description: `${translate(locale, profile.headline)}. ${translate(locale, profile.summary)}` }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
