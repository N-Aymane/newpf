import type { CSSProperties, ComponentType } from "react"

export interface FlexCarouselItem { src: string; alt: string; title: string; subtitle?: string }
export interface FlexCarouselProps {
  items: FlexCarouselItem[]
  preset?: "liquid" | "ribbon" | "vortex" | "arch"
  intro?: "rise" | "bloom" | "spin" | "deal" | "fade" | "none"
  cardHeight?: number
  gap?: number
  radius?: number
  squeeze?: number
  focusOnClick?: boolean
  captions?: boolean
  captureWheel?: boolean
  autoplay?: boolean
  ariaLabel?: string
  getItemLabel?: (label: string, index: number, total: number) => string
  onChange?: (index: number, item: FlexCarouselItem) => void
  onSelect?: (index: number, item: FlexCarouselItem) => void
  className?: string
  style?: CSSProperties
}
declare const FlexCarousel: ComponentType<FlexCarouselProps>
export default FlexCarousel
