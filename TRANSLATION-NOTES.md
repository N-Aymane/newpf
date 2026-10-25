# English and French

`lib/dictionary.ts` stores the English-to-French dictionary. English is the default; a missing French entry falls back to the original text. Product names, technical identifiers, and official certificate titles retain their names.

The navbar language switch submits a validated Next.js server action. The selected language is stored in an HTTP-only, same-site cookie for one year. Sections, document language, and metadata are rendered on the server in the selected language. Client controls receive the same locale. No translation API or third-party service is used.

Translations cover navigation, profile copy, experience, skills, education, project descriptions, carousel captions and accessibility labels, contact actions, and verification feedback. Turnstile receives the selected widget language. The downloadable résumé and screenshots are the existing originals, not translated copies.

Validated English-to-French switching, switching back, persistence after refresh, French server-rendered text and metadata, mobile-width overflow, active-site lint, TypeScript, contact tests, and the production build.
