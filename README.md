# ASTI — ASEAN Swiss TVET Initiative Website

A single-page marketing site for the ASTI programme, targeting youth in Cambodia, Laos, and Myanmar.

## Project Structure

```
asti/
├── index.html               ← Entry point (HTML only — no inline CSS or JS)
├── assets/
│   ├── css/
│   │   ├── main.css         ← @import entry: loads tokens → components → sections
│   │   ├── tokens.css       ← Design tokens (:root CSS custom properties only)
│   │   ├── components.css   ← Reusable UI: reset, nav, topbar, buttons, footer, kpi-bar, partner-bar, newsletter, scroll-reveal
│   │   └── sections.css     ← Page sections: hero, skills-banner, journey, helix, countries, eLMS, softskills, impact, news, quiz + @media
│   └── js/
│       └── main.js          ← All JS: togNav, switchTab, selectQ, runQuiz, IntersectionObserver scroll reveal
└── README.md
```

## CSS Architecture

| File | Purpose |
|---|---|
| `tokens.css` | Single `:root {}` block — all CSS custom properties (colours, fonts, radii, shadows) |
| `components.css` | Reset + reusable UI components shared across sections |
| `sections.css` | Per-section styles + responsive `@media` breakpoints |
| `main.css` | `@import` cascade — load order matters: tokens → components → sections |

## JavaScript

`main.js` runs inside a `DOMContentLoaded` listener with `'use strict'`. Functions called from inline `onclick` attributes (`togNav`, `switchTab`, `selectQ`, `runQuiz`) are exposed on `window`.

## Fonts

Loaded via Google Fonts CDN in `index.html`:
- **Sora** (Latin / numbers) — weights 300–800
- **Hanuman** (Khmer) — weights 100–900

## Sections

1. **Topbar** — partner logos, quick links, language switcher (KM / EN / LA)
2. **Nav** — sticky, with mobile hamburger
3. **Hero** — headline, WIIFM salary bar, CTA buttons, stat cards
4. **KPI Bar** — 4 headline numbers on gold background
5. **Skills Banner** — 8 skill cards + salary teaser table
6. **Journey** — 4-step WBL path
7. **Triple Helix** — 6 stakeholder cards (Govt, Intl, Private, TVET, Digital, Youth)
8. **Countries** — tabbed panels for Cambodia / Laos / Myanmar
9. **eLMS** — course list + platform stats
10. **Soft Skills** — digital literacy banner
11. **Impact** — numbers + success stories
12. **News** — featured article + 3-column grid with filter pills
13. **Quiz CTA** — interactive skill-match quiz
14. **Partners** — funder logo chips
15. **Newsletter** — email + sector subscribe form
16. **Footer** — 4-column links + copyright stripe

## Development

Open `index.html` directly in a browser, or serve with any static file server:

```bash
npx serve .
```

No build step, no dependencies, no framework — vanilla HTML, CSS, and JS only.
