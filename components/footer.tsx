export function Footer() {
  return (
    <footer className="py-12 border-t w-full">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-muted-foreground italic">
          &ldquo;Engineering solutions with precision and passion.&rdquo;
        </p>
        <div className="flex items-center gap-6 text-xs font-mono text-muted-foreground">
          <span>© 2025 Aymane Naouri</span>
          <span>Built with Next.js & Framer Motion</span>
        </div>
      </div>
    </footer>
  )
}
