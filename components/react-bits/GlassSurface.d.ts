import type { CSSProperties, ReactNode, RefObject } from "react"
export interface GlassSurfaceProps {
  children?: ReactNode
  width?: number | string
  height?: number | string
  borderRadius?: number
  distortionScale?: number
  displace?: number
  backgroundOpacity?: number
  redOffset?: number
  greenOffset?: number
  blueOffset?: number
  refraction?: boolean
  backdrop?: RefObject<HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | null>
  shape?: string
  className?: string
  style?: CSSProperties
}
export default function GlassSurface(props: GlassSurfaceProps): ReactNode
