import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "N-Aymane Portfolio",
  description: "Portfolio website for Aymane Naouri - Software Engineering Student and Data Solutions Architect.",
  generator: "next.js",
  icons: {
    icon: [
      {
        url: "/s.svg",
        type: "image/svg+xml",
        sizes: "512x512", // Increase the size here (e.g., 64x64 or larger as needed)
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {/* Logo removed as requested */}
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
