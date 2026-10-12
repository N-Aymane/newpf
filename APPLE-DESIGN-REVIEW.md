# Design review: Aymane Naouri portfolio

## Summary

Before redesign: needs work. This is a responsive Next.js website for recruiters and collaborators; Apple's foundations apply, while native macOS/iOS navigation conventions do not. The page's job is to establish Aymane's AI-engineering identity and make his practical work easy to assess.

## Improvements

- **High, design judgment:** the hero's generic promise and capability list could belong to almost any developer. Put Aymane's name first and feature the real Royal Air Maroc internship project. `layout.md › Visual hierarchy`: “Order content by relative importance.”
- **High:** glass appears in informational content, weakening the distinction between content and controls. Use a solid feature panel and keep liqui on floating navigation. `liquid-glass.md › The two layers`: “Content layer” and “Functional layer.”
- **Medium:** some tool labels are 11px, secondary descriptions 14px. Use a 17px body scale and a minimum 13px utility scale for this web design. `typography.md › Ensuring legibility`: “Use font sizes that most people can read easily.”
- **Medium, design judgment:** many small bordered badges and glass links give equal emphasis to supporting information. Replace them with simple labels and native text links, keeping one prominent hero action. `buttons.md › Style`: “Keep the number of prominent buttons to one or two per view.”

## Token plan

| Role | Dark | Light | Contrast against page surface (dark / light) |
| --- | --- | --- | --- |
| Page surface | #111615 | #f5f7f6 | n/a |
| Content surface | #19211f | #ffffff | n/a |
| Primary text | #f0f5f3 | #182321 | 16.58:1 / 15.00:1 |
| Secondary text | #adbab4 | #50645b | 9.10:1 / 5.89:1 |
| Cyan action | #73d9dd | #006f78 | 11.05:1 / 5.51:1 |
| Boundary | #2d3b35 | #d7e0db | decorative only |

Keep Geist and Geist Mono. Display 56-104px, section headings 32-44px, body 17px, utility 13px. All action targets remain at least 44px. Glass keeps a legible tint and opaque reduced-transparency fallback.

## Layout plan

Regular: `[ floating navigation ]` → `[ name + AI focus | real airline project + architecture flow ]` → `[ two featured projects ]` → `[ remaining work ]` → `[ about / experience / skills / education / contact ]`.

Compact: `[ navigation ]` → `[ name / AI focus / actions ]` → `[ airline project ]` → `[ stacked work and résumé sections ]`.

## Craft

The signature is the real model-to-interface pipeline from the supplied flight_rerouting project, rather than a decorative AI simulation. Remove the redundant generic capability panel and repeated glass action surfaces. Keep the AN mark, favicon, palette, content, links, and verified email protection.

This direction is specific to Aymane's AI, analytics, and full-stack work; it would require different evidence for another portfolio. Use one brief entrance reveal and no continuous animation. Verify both themes, mobile layouts, keyboard operation, text enlargement, and protected contact.

References read from the apple-design skill: accessibility, layout, typography, color, designing-for-macos, cross-platform translation, liquid-glass, materials, branding, design-principles, and buttons.

## Implementation and validation

Implemented the name-first hero, evidence-based airline feature, two featured project cards, quieter supporting project rows, larger typography, consistent spacing, and solid content surfaces. Kept the AN identity, cyan accents, floating liqui navigation, profile facts, and protected email flow.

Lint, TypeScript, and contact tests passed. Chromium checks covered both themes at 320, 768, 1024, and 1440 pixels without horizontal overflow; mobile Escape closes navigation and returns focus. Project and experience anchors clear the header. Preview console has no errors. Existing reduced-motion and reduced-transparency fallbacks remain. Native Safari/Firefox and 200% text enlargement were not tested in this browser session. All changes are local.
