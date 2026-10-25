# React Bits hero refinements

- Source: https://reactbits.dev/r/BlurText-TS-CSS.json and https://reactbits.dev/r/SpotlightCard-TS-CSS.json (October 25, 2026).
- BlurText uses the already installed framer-motion 12 alias instead of adding a duplicate motion package. Its root is an inline span to preserve paragraph semantics. Registry ref writes were moved into effects for React lint compatibility.
- The translated hero statement reveals once with 4px blur, 6px movement and 55ms word stagger. The name and actions remain static. Server output, touch devices and reduced-motion preferences show plain text.
- SpotlightCard uses the existing surface and border tokens, a faint cyan pointer light, no ambient movement, no grain or click flare. Touch and reduced-motion modes hide the effect.
- All content, links, the carousel and navbar are preserved. No deployment was performed.
