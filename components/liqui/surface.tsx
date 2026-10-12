"use client"

import { LiquiGlass } from "@liqui-design/glass"
import type { ReactNode } from "react"

// The hero rests on a flat fill: the handbook recommends a clear tinted
// surface here, avoiding a large displacement map with nothing to refract.
export function CapabilitySurface({ children }: { children: ReactNode }) {
  return <LiquiGlass material="clear" radius={20} className="capability-panel" contentClassName="capability-panel-content">{children}</LiquiGlass>
}
