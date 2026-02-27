# Propositions d'Améliorations & Roadmap

Ce document liste les améliorations suggérées pour faire évoluer le site **Healing Hands Concept** en 2026.

## 📧 Communication & Délivrabilité

### Email Professionnel (Priorité Haute)
Pour maximiser la délivrabilité des emails envoyés via le formulaire de contact et renforcer le professionnalisme :
- **Action** : Configurer une adresse email de type bonjour arboase healinghands-concept point ch ou fabio arobase healinghands-concept point ch au lieu d'utiliser une adresse générique (Gmail, etc.) ou l'adresse par défaut de Resend.
- **Bénéfice** : Réduit considérablement les risques de tomber en SPAM et renforce l'image de marque auprès des clients.
- **Lien** : Voir le guide [resend-guide.md](./resend-guide.md) pour la configuration DNS technique.

## 🚀 Performance & Technique

### Passage à Cloudflare Zaraz
- **Statut** : Recommandé.
- **Action** : Déplacer tous les scripts tiers (Tracking, Pixel Meta, etc.) sur Cloudflare Zaraz pour garantir un temps de chargement ultra-rapide et un score Google PageSpeed optimal.

### Monitoring des Fonctions
- **Action** : Utiliser les Logs de Cloudflare Pages pour surveiller les erreurs potentielles lors de l'envoi du formulaire de contact.

## 📈 Marketing & SEO

### Blog / Actualités
- **Action** : Ajouter une section "Conseils & Bien-être" pour publier des articles régulièrement.
- **Bénéfice** : Améliore le référencement naturel (SEO) sur des mots-clés liés au massage et à la santé à Fribourg.

### Google Business Profile
- **Action** : Assurer que les informations (horaires, adresse) correspondent exactement à celles indiquées dans le JSON-LD du site pour booster le référencement local.

## 🎨 Design & UX

### Système de Réservation en ligne
- **Action** : Intégrer un outil comme Calendly ou Fresha directement sur le site.
- **Bénéfice** : Permet aux clients de réserver et payer leur séance 24h/24 sans interaction manuelle.

### Témoignages Clients
- **Statut** : Aperçu statique ajouté sur l'accueil, envoi vers une intégration dynamique si souhaité.
- **Action** : Ajouter une section de témoignages (Google Reviews) sur la page d'accueil.

## 🌍 Multilingue

### Déploiement FR / PT / EN
- **Statut** : À planifier après validation complète du contenu FR.
- **Action** : Déployer le site en **FR, PT et EN** avec le **français comme langue maîtresse** (source de traduction et version de référence éditoriale).
- **Bonnes pratiques** : Garder une parité stricte des pages par langue, puis activer `hreflang` complet lorsque PT/EN seront publiées.
