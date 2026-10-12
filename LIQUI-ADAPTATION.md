# Liqui adaptation

References read: [Quick start](https://liqui.design/docs), [Glass](https://liqui.design/docs/handbook/glass), [Theming](https://liqui.design/docs/handbook/theming), and [Components](https://liqui.design/docs/components).

## Material decisions

- The floating navbar and mobile navigation use `auto`: Chromium refraction with the kernel's frosted browser fallback.
- The hero capability panel and secondary action links use `clear`: they rest on flat backgrounds, where an expensive displacement map would have little to refract.
- Primary hero and verification actions use solid accent fills. Navigation remains native anchors, including external project links.
- Project, experience, skills, education, and certification content remain readable information surfaces rather than stacked glass lenses.
- Colours are defined once through all fourteen CSS tokens, with paired light/dark overrides. The provider controls optical defaults, retaining the package's geometric defaults and disabling dispersion.
- Reduced-transparency preferences use opaque surfaces and disable backdrop/refraction/specular layers. Existing reduced-motion handling remains in place.
- The installed glass kernel and shared Radix button are unchanged.

## Verification

- Active-site lint, TypeScript, and the production build passed.
- Seven contact API tests passed; the adapted verification action also revealed the professional email after a real Cloudflare verification in the local browser.
- Both themes fit 320, 768, 1024, and 1440px without horizontal overflow.
- Chromium's navbar uses an SVG refraction filter; the clear hero and contact surfaces have no backdrop filter.
- Native anchor navigation was exercised from the keyboard.
- Safari and Firefox are unavailable in the connected browser session; their automatic frosted fallback is documented by the library but was not verified in those browsers.

All repository changes remain local for review.
