"use client"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"
import { LiquiThemeProvider, defaultGlassTheme } from "@liqui-design/glass"

const glassTheme = { glass: { ...defaultGlassTheme, material: "auto", frost: 0.55, specular: 0.4, dispersion: 0 } } as const

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}><LiquiThemeProvider theme={glassTheme}>{children}</LiquiThemeProvider></NextThemesProvider>
}
