# PRD - Mezzora Pizza - Site Web de Commande en Ligne

## Informations Générales
**Projet:** Site web one-page pour Mezzora Pizza  
**Date de création:** 17 Février 2025  
**Client:** Restaurant Mezzora Pizza - Rueil-Malmaison  
**Type:** Application web full-stack avec système de commande et paiement  

---

## 1. Vue d'ensemble du Projet

### Objectif
Créer un site web de commande en ligne pour Mezzora Pizza permettant aux clients de commander des pizzas, pâtes, salades et autres produits avec paiement en ligne sécurisé via Stripe.

### Persona Utilisateur
- **Client Principal:** Habitants de Rueil-Malmaison et environs
- **Âge:** 25-55 ans
- **Comportement:** Recherche de pizzas de qualité artisanale, pâte fraîche, commande rapide
- **Besoins:** Commander facilement en ligne, choisir entre emporter ou livraison, profiter des offres

---

## 2. Architecture Technique

### Stack Technologique
- **Frontend:** React 19, Tailwind CSS, Shadcn UI
- **Backend:** FastAPI (Python)
- **Base de données:** MongoDB
- **Paiement:** Stripe (mode test/sandbox)
- **Email:** Resend
- **Déploiement:** Emergent Cloud Platform

### Intégrations Tierces
1. **Stripe Payment Integration**
   - Publishable Key: `pk_test_51T1pBbBntb0WvYDrU9BMafcyrrZsMuT5rH6g1rYvrTMP8AgczkiTCCbDp1PrZJxAjqoyGvTAuYPmvyVtHi8LTCMa00DmNbmEEZ`
   - Mode: Test/Sandbox
   - Utilisé pour: Checkout session, gestion des paiements

2. **Resend Email Service**
   - API Key: `re_LQN5dYhA_8aa81sLAnQCrMZpcvwSS6VoA`
   - Email expéditeur: `bensaidoualid47@gmail.com`
   - Utilisé pour: Confirmation de commande par email

---

## 3. Fonctionnalités Implémentées ✅

### 3.1 Frontend (17 Février 2025)

#### Page d'Accueil (HomePage)
- ✅ Section Hero avec image de fond et offre mise en avant
- ✅ Header fixe avec navigation et panier
- ✅ Section Formules Midi (8,90€)
  - 4 formules: Pizza Junior, Pâtes, Salade, Le Switch
- ✅ Section Menu avec onglets interactifs
  - Pizzas Base Tomate (7 variétés)
  - Pizzas Base Crème (5 variétés)
  - Pizzas Base BBQ (2 variétés)
  - Pâtes (5 variétés)
  - Tex-Mex (4 produits)
  - Salades (5 variétés)
  - Desserts (5 produits)
  - Boissons (11 produits)
- ✅ Section Tarifs & Livraison
- ✅ Footer avec informations de contact et horaires

#### Système de Panier
- ✅ Panier latéral (CartSidebar) avec ajout/suppression d'articles
- ✅ Gestion des quantités (+/-)
- ✅ Choix du mode de retrait (À emporter / Livraison)
- ✅ Calcul automatique de l'offre "2 pizzas achetées = 3ème offerte"
- ✅ Calcul des frais de livraison (6€)
- ✅ Affichage du total avec réductions

#### Page de Checkout
- ✅ Formulaire de coordonnées client
  - Nom, prénom, email, téléphone (obligatoires)
  - Adresse complète (obligatoire si livraison)
  - Notes/instructions spéciales
- ✅ Récapitulatif de commande
- ✅ Bouton de paiement Stripe
- ✅ Validation des champs

#### Page de Confirmation
- ✅ Polling du statut de paiement
- ✅ Affichage de la confirmation de commande
- ✅ Détails de la commande (numéro, montant, mode de retrait)
- ✅ Informations sur le temps de préparation

#### Dashboard Admin
- ✅ Vue d'ensemble des statistiques
  - Total commandes
  - Commandes complétées
  - Commandes en attente
  - Revenu total
- ✅ Liste des commandes avec filtres
- ✅ Détails de chaque commande

### 3.2 Backend (17 Février 2025)

#### API Endpoints
- ✅ `POST /api/orders/create-checkout` - Créer une session de paiement Stripe
- ✅ `GET /api/orders/payment-status/{session_id}` - Vérifier le statut du paiement
- ✅ `POST /api/webhook/stripe` - Gérer les webhooks Stripe
- ✅ `GET /api/orders/` - Liste toutes les commandes (admin)
- ✅ `GET /api/orders/{order_id}` - Détails d'une commande

#### Base de Données (MongoDB)
**Collection: payment_transactions**
```javascript
{
  order_id: String,           // Format: MEZ-YYYYMMDDHHMMSS
  session_id: String,         // Stripe session ID
  customer: {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    postalCode: String,
    notes: String
  },
  items: Array,               // Liste des articles commandés
  deliveryMethod: String,     // "emporter" ou "livraison"
  subtotal: Float,
  discount: Float,
  deliveryFee: Float,
  total: Float,
  payment_status: String,     // "pending" ou "paid"
  status: String,             // "initiated" ou "completed"
  created_at: DateTime,
  updated_at: DateTime
}
```

#### Gestion des Emails
- ✅ Email de confirmation automatique après paiement réussi
- ✅ Template HTML professionnel
- ✅ Détails de la commande inclus
- ✅ Informations de contact et temps de préparation

---

## 4. Design & Style

### Palette de Couleurs
- **Primaire:** Lime-Yellow (#ECEC75) pour le fond
- **Secondaire:** Vert (#22c55e) pour les accents et boutons
- **Accent:** Rouge (#DC2626) pour les CTA importants
- **Neutre:** Noir (#0f172a), Gris, Blanc

### Typographie
- **Titres:** Crimson Text (Serif) - Élégant
- **Corps:** System fonts (Sans-serif) - Lisible

### Composants UI
- Utilisation de Shadcn UI pour les composants (Tabs, Buttons, Cards)
- Animations subtiles sur hover
- Design responsive mobile-first

---

## 5. Règles Métier

### Offre Spéciale "2+1"
- Applicable uniquement sur les pizzas
- Applicable uniquement en mode "À emporter"
- Tailles éligibles: Sénior et Méga
- La pizza la moins chère est offerte
- Calcul automatique: 1 pizza offerte pour 3 achetées

### Tarification
**À Emporter:**
- Pizza Sénior: 22,00 €
- Pizza Méga: 27,00 €

**En Livraison:**
- Pizza Sénior: 28,00 €
- Pizza Méga: 36,00 €
- Frais de livraison: +6,00 € (inclus dans les prix ci-dessus)

**Formules Midi (11h-14h30):**
- Toutes les formules: 8,90 €

### Paiement
- Mode test Stripe uniquement (clés sandbox)
- Paiement par carte bancaire
- Aucun paiement réel n'est effectué

---

## 6. Flux Utilisateur

### Flux de Commande
1. Client visite le site
2. Parcourt le menu et ajoute des articles au panier
3. Choisit le mode de retrait (emporter/livraison)
4. Vérifie le panier et clique sur "Commander"
5. Remplit le formulaire de checkout
6. Procède au paiement via Stripe
7. Est redirigé vers la page de confirmation
8. Reçoit un email de confirmation
9. Restaurant reçoit la commande dans le dashboard admin

---

## 7. Prochaines Étapes / Backlog

### P0 (Priorité Haute - Production)
- [ ] Passer en mode production Stripe (clés live)
- [ ] Configurer un vrai domaine (mezzorapizza.fr)
- [ ] Tester le flux complet end-to-end avec vrai paiement
- [ ] Configurer les webhooks Stripe en production

### P1 (Améliorations Importantes)
- [ ] Système de notification SMS pour les commandes
- [ ] Impression automatique des tickets de commande
- [ ] Gestion des créneaux horaires (fermeture dimanche midi)
- [ ] Validation de la zone de livraison (rayon 3km)
- [ ] Système de fidélité / points de récompense

### P2 (Nice-to-have)
- [ ] Programme de parrainage
- [ ] Codes promo personnalisés
- [ ] Historique des commandes pour clients
- [ ] Application mobile (PWA)
- [ ] Live tracking de la livraison
- [ ] Avis clients et notation

---

## 8. Informations de Contact

**Restaurant:**
- Nom: Mezzora Pizza
- Adresse: 4-6 Avenue du Président Georges Pompidou, 92500 Rueil-Malmaison
- Téléphone: 01.47.49.49.04
- Email: contact@mezzorapizza.fr

**Horaires:**
- Lundi - Samedi: 11h00-14h30 et 18h00-22h30
- Dimanche: 18h00-22h30 (fermé le midi)

---

## 9. Notes Techniques

### URLs
- **Frontend:** https://pizza-mezzora.preview.emergentagent.com
- **Backend:** https://pizza-mezzora.preview.emergentagent.com/api
- **Admin Dashboard:** https://pizza-mezzora.preview.emergentagent.com/admin

### Environnement Variables
```
# Backend .env
STRIPE_API_KEY=sk_test_***
STRIPE_PUBLISHABLE_KEY=pk_test_***
RESEND_API_KEY=re_***
SENDER_EMAIL=bensaidoualid47@gmail.com
MONGO_URL=mongodb://localhost:27017/
DB_NAME=template
```

### Commandes Utiles
```bash
# Redémarrer les services
sudo supervisorctl restart all

# Voir les logs backend
tail -f /var/log/supervisor/backend.err.log

# Voir les logs frontend
tail -f /var/log/supervisor/frontend.err.log
```

---

## Changelog

**17 Février 2025 - v1.0 - MVP Complet**
- ✅ Création du site web one-page
- ✅ Intégration Stripe pour les paiements
- ✅ Intégration Resend pour les emails
- ✅ Système de panier fonctionnel
- ✅ Dashboard admin
- ✅ Design responsive
- ✅ Calcul automatique des offres promotionnelles

---

*Document mis à jour le: 17 Février 2025*
