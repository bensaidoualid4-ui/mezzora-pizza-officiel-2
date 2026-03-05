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
- Warm color palette (cream, red, brown, gold)

## Key Files
- `frontend/src/pages/HomePage.js` - Main page
- `frontend/src/components/Header.js` - Navigation + phone CTA
- `frontend/src/components/Hero.js` - Hero section
- `frontend/src/components/AboutSection.js` - Notre Histoire
- `frontend/src/components/RubricsSection.js` - Menu/Formules/Offres navigation
- `frontend/src/components/MenuSection.js` - Menu display
- `frontend/src/components/FormulesMidi.js` - Lunch formulas
- `frontend/src/components/OffresSection.js` - Special offers
- `frontend/src/components/ReviewsCarousel.js` - Reviews
- `frontend/src/components/ContactForm.js` - Contact + Google Maps
- `frontend/src/components/Footer.js` - Footer
- `frontend/src/data/menuData.js` - Menu data
- `backend/routes/contact.py` - Contact API

## What's Been Implemented (as of March 5, 2026)

### Major Redesign (Current Session)
- Complete visual overhaul: warm cream/red/brown palette replacing cold white/green
- Playfair Display headings + DM Sans body for authentic Italian feel
- "Notre Histoire" section added (28 years, fresh dough, quality ingredients)
- Phone number now prominent everywhere (header, hero, contact)
- Hero CTA changed from misleading "COMMANDER" to "Appelez-nous : 01 47 49 49 04"
- 3-card intermediate wall simplified into clean rubric buttons
- Reviews improved with real-looking names (Marie L., Thomas D.) and initials avatars
- Contact section: large phone CTA banner + form + info cards + Google Maps
- Footer redesigned with warm brown theme
- Menu cards with warm styling (cream backgrounds, subtle borders)
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

### P3 - Nice to have
- Online ordering integration (if user pivots back)
- Instagram feed integration
- Special events/promotions page
