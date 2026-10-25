# Hosted project gallery

Design read: targeted developer-portfolio update for recruiters. Preserve Geist, graphite/cyan tokens, AN identity, section anchors, and 20/24px content radii. Design variance 6, motion intensity 5, visual density 4. Replace repository-oriented project cards with real hosted-app previews; keep unhosted engineering projects as descriptions.

## React Bits source

The JS/plain-CSS FlexCarousel source was fetched directly from https://reactbits.dev/r/FlexCarousel-JS-CSS.json on October 25, 2026. Files under components/react-bits use the registry source, with optional accessibility-label localization props and a separate TypeScript declaration for this Next.js project. The only registry dependency is ogl@^1.0.11, already installed as ogl 1.0.11.

The requested shadcn command was attempted. shadcn 4.22.1 failed during dependency installation with EINVALIDTAGNAME for ogl@^^1.0.11. The exact fetched registry files were installed directly instead, preserving the existing package lock and working dependency version.

The client wrapper lazy-loads WebGL near the viewport, disables wheel capture and autoplay, and uses the requested liquid/rise/0.5/12/0.2/focus/captions configuration. Screen-reader links and project descriptions remain normal HTML. Reduced motion and unsupported WebGL use a native scrolling screenshot gallery. An error boundary retains a usable gallery if renderer initialization fails.

## Verified content

Production domains were read from the signed-in Vercel team dashboard. Descriptions were checked against public app pages and the existing Dokusai project collection. Screenshots were captured from the actual hosted applications, without creating fictitious interfaces or copying private account data. The gallery contains FORMD, Palace of Sand, Contable, Atelier Réserve, BREACH, CipherChat, Spoke, Luma, PANTHER, Euphoria Club, and Shelfspace.

API-only projects, duplicate portfolios, and old generic v0 builds are not presented as additional apps. Boulangerie's public page returned a server error during inspection, so it is omitted. The original quantitative research, stock management, chatbot, absence management, and blog projects remain as descriptions, without misleading live-app links.

This update does not change the hero, navigation, contact verification, metadata, or résumé.

## Validation

Active-site lint, TypeScript, the production build, and all seven contact tests pass. Chromium rendered the actual WebGL carousel without console errors. Arrow buttons and keyboard navigation changed the selected project and its live-app link. All project-section outbound links lead to verified hosted domains rather than repository pages. Both themes have readable text and controls.

Responsive previews used temporary 320, 768, 1024, and 1440px iframe viewports because the browser's viewport override did not resize the page. No document overflow occurred in either theme. The temporary check file was removed after verification. Native reduced-motion preferences, Safari/Firefox, and Lighthouse were not available for direct testing; reduced-motion/native-scroll and WebGL-error fallbacks were reviewed in code and the server-rendered fallback was observed before hydration.
