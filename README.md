# Healing Hands Concept - Site Web (2026)

Ce projet est le site vitrine statique pour **Healing Hands Concept**, cabinet de massage et bien-être à Fribourg.

## 🛠 Technologies

- **Générateur de site** : [Eleventy (11ty)](https://www.11ty.dev/)
- **Langage de template** : Nunjucks (`.njk`)
- **CSS** : CSS Moderne (Variables, Flexbox, Grid)
- **Hébergement** : Cloudflare Pages
- **Formulaire de Contact** : Cloudflare Pages Functions (Serverless)

## 🚀 Installation & Développement

1.  **Prérequis** : Node.js installé.
2.  **Cloner le projet** :
    ```bash
    git clone https://github.com/healinghandsconcept/healinghands-concept.ch.git
    cd healinghands-concept.ch
    ```
3.  **Installer les dépendances** :
    ```bash
    npm install
    ```
4.  **Lancer le serveur local** :
    ```bash
    npm run build -- --serve
    ```
    Le site sera accessible sur `http://localhost:8080`.
    *Note : Pour tester les fonctions Cloudflare en local, il est recommandé d'utiliser `wrangler pages dev`.*

## 📨 Configuration du Formulaire de Contact (Cloudflare Pages)

Le backend est géré par le fichier `functions/api/send.js`.

**NE JAMAIS METTRE VOTRE CLÉ API DANS LE CODE PUBLIC (GIT).**

### Étapes pour configurer l'envoi d'email :

1.  **Créer un compte** sur [Resend.com](https://resend.com) et obtenir une API Key.
2.  **Configurer la Clé API sur Cloudflare** :
    - Dans le dashboard Cloudflare Pages de votre projet : **Settings > Environment Variables**.
    - Ajoutez `RESEND_API_KEY` avec votre clé.
3.  **Deployer** :
    - Connectez votre repo GitHub à Cloudflare Pages.
    - Build command : `npm run build`
    - Build output directory : `_site`

## 🌍 SEO & Analytics (Cloudflare Zaraz)

Le suivi du trafic (Google Analytics 4) est géré via **Cloudflare Zaraz** pour ne pas impacter les performances du site.

### Configuration :
1.  Dans le dashboard Cloudflare, aller sous **Zaraz**.
2.  Ajouter un outil tiers : **Google Analytics 4**.
3.  Entrer votre **ID de mesure** (G-XXXXXXXXXX).
4.  Zaraz chargera GA4 automatiquement via le réseau Cloudflare sans ajouter de code lourd sur le site.
- **Schema.org** : Données structurées `LocalBusiness` incluses pour améliorer le référencement local.
- **Performance** : Images optimisées avec `eleventy-img` (WebP).
- **Mobile** : Design Responsive et Menu "Sticky" intelligent.

## 📝 Structure du Projet

- `src/` : Code source
  - `_data/` : Données globales (metadata)
  - `_includes/` : Layouts et partiels
  - `assets/` : CSS, JS, Images
  - `fr/` : Pages du site
- `eleventy.config.js` : Configuration du build

## 📈 Évolutions Futures
Pour consulter les propositions d'améliorations et la roadmap du projet, voir [roadmap.md](./roadmap.md).
