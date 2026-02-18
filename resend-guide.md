# Intégration de Resend sur un site statique

Comme le site est hébergé sur GitHub Pages (statique), vous ne pouvez pas exécuter de code Node.js côté serveur directement sur cette plateforme pour envoyer des emails avec votre clé API Resend sans l'exposer.

## Option Recommandée : Fonction Serverless (Vercel ou Netlify)

La méthode la plus simple consiste à déployer une petite fonction "Serverless" sur une plateforme comme Vercel ou Netlify (gratuit).

### 1. Où mettre la clé API ?
Indiquez la clé dans les **Variables d'Environnement** de votre plateforme de déploiement (ex: Vercel Dashboard -> Settings -> Environment Variables) sous le nom `RESEND_API_KEY`.

### 2. Exemple de code (Node.js)

Voici à quoi ressemblerait votre fonction backend (ex: `api/send.js`) :

```javascript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  const { name, email, subject, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Healing Hands <contact@healinghands-concept.ch>',
      to: ['votre-email@exemple.com'],
      subject: `[Contact Site] ${subject} - de ${name}`,
      html: `<p><strong>Nom:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
}
```

### 3. Mise à jour du formulaire
Dans `src/fr/contact.njk`, remplacez l'URL `/api/send-email` par l'URL de votre fonction déployée.
