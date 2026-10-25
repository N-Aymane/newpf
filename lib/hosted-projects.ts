export interface HostedProject {
  src: string
  alt: string
  title: string
  subtitle?: string
  description: string
  appUrl: string
}

export const hostedProjects: HostedProject[] = [
  {
    title: "FORMD Fitness Tracker",
    subtitle: "Nutrition and training",
    description: "A nutrition and training app with AI-assisted meal scans, workout planning, and account-based data synchronization.",
    appUrl: "https://formd-indol.vercel.app",
    src: "/images/projects/formd-nutrition.jpg",
    alt: "FORMD nutrition screen with daily fuel, meal logging, and photo meal analysis",
  },
  { title: "Palace of Sand", subtitle: "Browser game", description: "A cinematic platformer tribute with original artwork and sound, built for the browser with Rust and WebAssembly.", appUrl: "https://palace-of-sand.vercel.app/", src: "/images/projects/palace-of-sand.jpg", alt: "Palace of Sand browser platformer showing its dungeon game scene" },
  { title: "Contable", subtitle: "Accounting workspace", description: "An invoice-verification workspace combining OCR review, editable invoice fields, and a contextual copilot.", appUrl: "https://contable-green.vercel.app/", src: "/images/projects/contable.jpg", alt: "Contable invoice review workspace with document preview, extracted fields, and copilot" },
  { title: "Atelier Réserve", subtitle: "Conservation website concept", description: "A conservation atelier concept with a bilingual website and interactive restoration comparisons.", appUrl: "https://atelier-reserve.vercel.app/", src: "/images/projects/atelier-reserve.jpg", alt: "Atelier Réserve conservation website with a restored pocket watch photograph" },
  { title: "BREACH", subtitle: "Browser FPS", description: "A five-sector first-person campaign built with Rust, WebAssembly, and WebGL2, with locally saved checkpoints.", appUrl: "https://breach-doom.vercel.app/", src: "/images/projects/breach.jpg", alt: "BREACH browser FPS campaign interface showing the Foundry sector" },
  { title: "CipherChat", subtitle: "Messaging application", description: "A focused messaging application with persistent conversations and message notifications.", appUrl: "https://cipherchat-puce.vercel.app/", src: "/images/projects/cipherchat.jpg", alt: "CipherChat messaging website showing its conversation interface" },
  { title: "Spoke", subtitle: "Cycling storefront", description: "A cycling storefront and marketplace for framesets and components, with product browsing and a shopping bag.", appUrl: "https://spoke-iota.vercel.app/", src: "/images/projects/spoke.jpg", alt: "Spoke cycling storefront featuring its terrain bicycle collection" },
  { title: "Luma", subtitle: "Film and series discovery", description: "A cinematic film and series discovery interface with TMDB integration and browsable media collections.", appUrl: "https://luma-xl.vercel.app/", src: "/images/projects/luma.jpg", alt: "Luma film and series discovery homepage with featured movie artwork" },
  { title: "PANTHER", subtitle: "Lounge and reservations", description: "A coffee and billiards lounge website with table reservations and light and dark themes.", appUrl: "https://panther-plum.vercel.app/", src: "/images/projects/panther.jpg", alt: "PANTHER lounge website with a billiards table and coffee bar" },
  { title: "Euphoria Club", subtitle: "Nightlife website", description: "A bilingual Málaga nightlife website with venue information, VIP reservations, and an interactive coupon challenge.", appUrl: "https://euphoria-club-malaga.vercel.app/", src: "/images/projects/euphoria.jpg", alt: "Euphoria Club Málaga homepage with venue photography and VIP reservation actions" },
  { title: "Shelfspace", subtitle: "Personal library", description: "A personal library interface for cataloging books, tracking reading status, and reviewing shelf-photo imports.", appUrl: "https://liberia-opal.vercel.app/", src: "/images/projects/shelfspace.jpg", alt: "Shelfspace book collection interface showing reading filters and library overview" },
]
