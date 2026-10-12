"use client"

import { LiquiGlass } from "@liqui-design/glass"
import type { AnchorHTMLAttributes } from "react"
import { buttonVariants } from "./button"
import { cn } from "@/lib/utils"

// Links remain native anchors. Base UI's glass button is an action control,
// so it should not replace browser link semantics or opening in another tab.
export function GlassLink({ variant = "glass", className, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: "glass" | "accent" }) {
  if (variant === "accent") return <a {...props} className={cn(buttonVariants({ variant: "accent" }), "liqui-action liqui-action-accent", className)}>{children}</a>
  return <LiquiGlass material="clear" radius={12} className={cn("liqui-link", className)} contentClassName="liqui-link-content"><a {...props} className="liqui-action liqui-action-glass">{children}</a></LiquiGlass>
}
