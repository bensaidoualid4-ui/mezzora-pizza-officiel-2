# Mezzora Pizza - PRD (Product Requirements Document)

## Original Problem Statement
Site vitrine (showcase website) pour la pizzeria "Mezzora Pizza" à Rueil-Malmaison (92500).
Le site doit présenter le menu, les offres, les formules midi, les avis clients et les informations de contact.
**Pas de e-commerce / panier / paiement en ligne.** L'action principale est l'appel téléphonique (01 47 49 49 04).

## User Personas
- **Client local** : Cherche le menu et le numéro pour commander par téléphone
- **Nouveau client** : Découvre la pizzeria, veut voir les avis et l'emplacement
- **Client midi** : Intéressé par les formules du midi (8,90€)

## Core Requirements
1. ~~E-commerce / Panier~~ **SUPPRIMÉ** — Site vitrine uniquement
2. Menu dynamique avec catégories (pizzas, pâtes, salades, etc.)
3. Section "Notre Histoire" pour l'authenticité
4. Offres spéciales (2+1 gratuite)
5. Formules midi (8,90€)
6. Avis clients Google
7. Formulaire de contact fonctionnel (via Resend)
8. Numéro de téléphone omniprésent
9. Google Maps intégré
10. Design responsive mobile/desktop
11. Navigation avec menu hamburger mobile
12. Hero sombre et immersif inspiré des concurrents (Domino's, Pizza Hut, Restaurant Passionné)
13. Section best-sellers avec vraies photos produits

## Architecture
```
Frontend: React + TailwindCSS
Backend: FastAPI + MongoDB
Email: Resend API
Hosting: Emergent Platform
```

## Tech Stack
- React, TailwindCSS, Playfair Display + DM Sans fonts
- FastAPI, Resend for contact emails
- Dual palette: Dark hero/bestsellers (#1a1410) + warm cream sections (#FEF7ED)
- Custom CSS: mz-red (#C41E3A), mz-gold (#D4A843), mz-brown (#3D2C1E)

## Key Files
- `frontend/src/pages/HomePage.js` - Main page
- `frontend/src/components/Header.js` - Transparent-to-solid navigation + phone CTA
- `frontend/src/components/Hero.js` - Dark immersive hero with stock photo
- `frontend/src/components/BestSellers.js` - Featured pizzas on dark background
- `frontend/src/components/AboutSection.js` - Notre Histoire
- `frontend/src/components/RubricsSection.js` - Menu/Formules/Offres navigation
- `frontend/src/components/MenuSection.js` - Menu display
- `frontend/src/components/FormulesMidi.js` - Lunch formulas (no cart)
- `frontend/src/components/OffresSection.js` - Special offers
- `frontend/src/components/ReviewsCarousel.js` - Reviews with names
- `frontend/src/components/ContactForm.js` - Contact + Google Maps
- `frontend/src/components/Footer.js` - Footer
- `frontend/src/data/menuData.js` - Menu data

## What's Been Implemented

### Redesign V2 - Dark Immersive Hero (March 5, 2026)
- Dark hero with professional stock pizza photo + gradient overlay
- "Pizzas Artisanales depuis 1997" with gold accent
- Transparent header that becomes solid dark on scroll
- New BestSellers section: 6 featured pizzas with real product photos on dark background
- "Voir toute la carte" CTA linking to full menu
- Scroll indicator on hero

### Redesign V1 - Warm Palette (March 5, 2026)
- Complete visual overhaul: warm cream/red/brown palette
- Playfair Display headings + DM Sans body
- "Notre Histoire" section (28 years, fresh dough, quality ingredients)
- Phone number prominent everywhere
- Hero CTA "Commander : 01 47 49 49 04"
- Reviews with real-looking names and initials avatars
- Contact section: phone banner + form + Google Maps
- Footer with warm brown theme
- All e-commerce code removed (Cart, Checkout, Orders, Admin)
- Mobile hamburger menu working

### Previous Sessions
- Responsive hero with separate desktop/mobile images
- Dynamic menu system (in-place content rendering)
- Sticky navigation for menu browsing
- Product images integrated (~30 items)
- Real Google reviews integrated
- Contact form working via Resend API
- lang="fr" set to prevent auto-translation

## Prioritized Backlog

### P1 - Next
- Backend cleanup: remove obsolete orders.py and Stripe code
- Integrate remaining product images (~10 unmapped)

### P2 - Future
- Admin panel for dynamic menu management
- Interactive Google Maps for "Itinéraire"
- SEO optimization (meta tags, structured data)
- Performance optimization (image lazy loading, compression)
- Floating mobile CTA bar ("Commander maintenant" sticky bottom)

### P3 - Nice to have
- Online ordering integration (if user pivots back)
- Instagram feed integration
- Special events/promotions page
