# React Bits navbar surface

Installed with npx shadcn@latest add @react-bits/GlassSurface-JS-CSS. Registry requires no additional dependencies. Source lives in components/react-bits, with a TypeScript declaration for the JS component.

The responsive capsule retains 64px height and 32px radius rather than the standalone 320px demo width. Distortion -180, displacement 0.5 and background opacity 0.1 follow the requested values. Channel offsets are equal to preserve neutral graphite/cyan colors. Mobile menu uses a second surface with 24px radius. Existing controls and keyboard handlers are preserved.

Small registry compatibility changes: move settings ref writes into an effect, schedule feature detection after mount, and declare the feature detector before use. CSS supplies solid surfaces for reduced transparency, increased contrast and unsupported backdrop filters.

Validation: lint, TypeScript and production build pass. Chromium SVG renderer confirmed. Light/dark desktop and 320px embedded mobile layout inspected. Automated clicks in the embedded mobile preview did not activate the menu, so that interactive mobile check remains unverified. Safari/Firefox not available for native browser testing. No push or deployment.
