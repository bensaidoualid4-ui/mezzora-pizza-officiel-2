# Mezzora Pizza - PRD

## Problem Statement
Site vitrine pizzeria "Mezzora Pizza" Rueil-Malmaison. Menu, offres, contact. Pas de e-commerce.

## Design Approach
**FOOD-FIRST** — La pizza prend 80% de l'écran. Pas de poésie. Le client voit de la pizza et a faim.

## Key Files
- `Hero.js` — Full-bleed pizza images (desktop + mobile), minimal text overlay
- `BestSellers.js` — 6 best-sellers avec vraies photos sur fond sombre
- `Header.js` — Transparent → solid on scroll, "Commander" CTA
- `AboutSection.js` — Notre Histoire (28 ans)
- `RubricsSection.js` — Menu/Formules/Offres tabs
- `MenuSection.js` — Warm pizza cards
- `FormulesMidi.js` — Formules midi (no cart)
- `OffresSection.js` — Offres 2+1
- `ReviewsCarousel.js` — Avis clients
- `ContactForm.js` — Contact + Google Maps
- `Footer.js` — Dark brown footer

## Implemented (March 5, 2026)
- Hero V4: Full-bleed AI-generated pizza photos (desktop landscape + mobile portrait). Food = 80% screen. Minimal text.
- Header: "Commander" button, transparent on hero
- BestSellers: 6 pizzas with real product photos
- About section, Reviews, Contact with Google Maps, Footer
- All e-commerce removed
- Bugs fixed: Offres, FormulesMidi cart buttons

## Backlog
- P1: Backend cleanup (remove orders.py)
- P2: Floating mobile CTA bar
- P2: SEO
- P3: Admin panel
