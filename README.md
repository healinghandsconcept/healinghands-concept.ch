# Healing Hands Concept - Site Web (2026)

Ce projet est le site vitrine statique pour **Healing Hands Concept**, cabinet de massage et bien-être à Fribourg.

## 🛠 Technologies

- **Générateur de site** : [Eleventy (11ty)](https://www.11ty.dev/)
- **Langage de template** : Nunjucks (`.njk`)
- **CSS** : CSS Moderne (Variables, Flexbox, Grid)
- **Hébergement** : GitHub Pages
- **Formulaire de Contact** : Intégration prévue avec Resend via Serverless Functions.

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

## 📨 Configuration du Formulaire de Contact (Resend)

Le site étant statique, la logique d'envoi d'email doit être gérée par une fonction "Serverless" externe pour sécuriser votre clé API.

**NE JAMAIS METTRE VOTRE CLÉ API DANS LE CODE PUBLIC (GIT).**

### Étapes pour configurer l'envoi d'email :

1.  **Créer un compte** sur [Resend.com](https://resend.com) et obtenir une API Key.
2.  **Héberger une fonction backend** :
    - Utilisez un service gratuit comme **Vercel** ou **Netlify**.
    - Déployez le code fourni dans le fichier `resend-guide.md` à la racine de ce projet.
3.  **Configurer la Clé API** :
    - Dans le tableau de bord de votre hébergeur (ex: Vercel), allez dans **Settings > Environment Variables**.
    - Ajoutez une variable nommée `RESEND_API_KEY` avec la valeur de votre clé.
4.  **Connecter le Formulaire** :
    - Dans `src/fr/contact.njk`, mettez à jour l'URL de `fetch('/api/send-email', ...)` pour pointer vers l'URL de votre fonction déployée.

## 🌍 SEO & Bonnes Pratiques

- **Meta Tags** : Configurés automatiquement dans `_includes/base.njk`.
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
