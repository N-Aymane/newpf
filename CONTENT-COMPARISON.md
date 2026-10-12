# Portfolio content comparison

Source: the LinkedIn profile PDF supplied by the owner. The PDF is not included in the repository.

| Area | Previous content | Updated content |
| --- | --- | --- |
| Headline | Software Engineering Student | AI & Data Engineering Student |
| Royal Air Maroc | Missing | AI Engineer Intern, July-August 2026, Casablanca; airline disruption dashboard with Next.js, FastAPI, and XGBoost, based on the supplied flight_rerouting repository |
| EMSI AI Nexus | Innovation & R&D Lead, 2025-Present | Vice President, August 2025-July 2026; R&D contribution described separately |
| OCP Group | Data Analyst Intern, 2025 | Data Analyst, July-August 2025; Ben Guerir, Big Data, visualization, Power BI |
| Digisystems | Full-Stack Developer, 2023 | July-September 2023; Casablanca-Settat; supported development experience |
| Education | Missing | EMSI engineering degree in Computer Science, 2022-2027, in progress |
| Skills | Development, data, and tools | Existing skills retained; AI, ML, deep learning, quantitative finance/analysis, React Native, networking, information systems added |
| Certifications | Four entries | Eight entries; React Basics deduplicated under the existing Meta title |
| Contact | Inactive form, social links | Professional email protected by server-verified Cloudflare Turnstile; LinkedIn and GitHub links |
| Projects | Four existing entries | Added Quant Research Dashboard and FORMD Fitness Tracker with supplied repository links and descriptions verified from their source |

## Editorial decisions

- Dated Experience entries take precedence over the conflicting summary for the EMSI role and end date.
- English copy is a faithful, concise adaptation of the supplied French profile.
- Existing projects and certifications absent from the PDF remain intact.
- Existing projects without known repository URLs retain the general GitHub profile link. The two newly supplied projects link directly to their repositories; no screenshots were invented.

## Local review

Run `npm ci` and `npm run dev`, then open http://127.0.0.1:3000.

`npm run lint` checks the active portfolio surface. `npm run lint:all` also checks unused legacy components and currently reports pre-existing issues. `npx tsc --noEmit` checks the entire TypeScript project; `npm run build` validates types and the production build.

Changes must remain local until the owner reviews the design and explicitly requests a push.
