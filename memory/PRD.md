# Mezzora Pizza - PRD

## Original Problem Statement
Site vitrine pour "Mezzora Pizza" à Rueil-Malmaison (92500). Présenter menu, offres, formules, avis et contact.
**Pas de e-commerce.** Action principale = appel téléphonique (01 47 49 49 04).

## Architecture
- Frontend: React + TailwindCSS + Playfair Display + DM Sans
- Backend: FastAPI + MongoDB + Resend API
- Design: Dark hero (#0d0906) + warm sections (#FEF7ED) + mz-red (#C41E3A) + mz-gold (#D4A843)

## Key Files
- `Hero.js` - Dark hero with real pizza product photos (circular composition)
- `BestSellers.js` - 6 featured pizzas on dark background
- `Header.js` - Transparent-to-solid on scroll, "Commander" CTA
- `AboutSection.js` - Notre Histoire (28 ans)
- `RubricsSection.js` - Menu/Formules/Offres navigation
- `MenuSection.js` - Menu display with warm cards
- `FormulesMidi.js` - Formules midi (no cart)
- `OffresSection.js` - Offres spéciales
- `ReviewsCarousel.js` - Avis clients
- `ContactForm.js` - Contact + phone banner + Google Maps
- `Footer.js` - Dark brown footer
- `menuData.js` - Menu data source

## Implemented (March 5, 2026)

### Hero V3 - Real Pizza Photos
- Split layout: text left + 3 real pizza photos (circular, composed) right
- Generated dark slate background with herbs (AI)
- Warm glow effect behind main pizza
- "L'art de la vraie pizza artisanale" tagline
- Reduced phone number repetition ("Commander" in header)

### Hero V2 - Dark Immersive
- Dark stock photo hero with overlay (replaced)

### Redesign V1 - Warm Palette
- Warm cream/red/brown palette
- About section, Reviews with names, Contact with Maps
- All e-commerce code removed
- Mobile hamburger menu

### Bug Fixes
- Offres section no longer shows pizzas below
- FormulesMidi no longer has cart buttons
- Contact form trailing slash fix

## Backlog
- P1: Backend cleanup (remove orders.py/Stripe)
- P1: Integrate remaining product images (~10 unmapped)
- P2: Floating mobile CTA bar
- P2: SEO optimization
- P3: Admin panel for menu
- P3: Interactive Google Maps
