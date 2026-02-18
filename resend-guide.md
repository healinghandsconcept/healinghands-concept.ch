# Intégration de Resend sur Cloudflare Pages

Le site étant déployé sur **Cloudflare Pages**, nous utilisons les **Cloudflare Pages Functions** pour gérer l'envoi d'email de manière sécurisée (Serverless).

## 1. Structure du Code
Le code backend a été créé automatiquement dans le fichier :
`functions/api/send.js`

Ce fichier intercepte les requêtes `POST` envoyées à `/api/send` et utilise l'API Fetch pour communiquer avec Resend.

## 2. Configuration sur Cloudflare

Pour que l'envoi d'email fonctionne, vous devez configurer votre clé API Resend dans Cloudflare :

1.  Connectez-vous à votre tableau de bord **Cloudflare**.
2.  Allez dans **Workers & Pages** et sélectionnez votre projet `healinghands-concept`.
3.  Allez dans **Settings** > **Environment variables**.
4.  Ajoutez une variable :
    - **Variable name** : `RESEND_API_KEY`
    - **Value** : Votre clé API Resend (commençant par `re_...`)
5.  (Optionnel) Pour tester en local, vous pouvez créer un fichier `.dev.vars` (non commité) avec `RESEND_API_KEY=votre_clé`.

## 3. Configuration du Domaine (Obligatoire pour Production)

Pour envoyer des emails depuis `contact@healinghands-concept.ch` et éviter le dossier SPAM, vous devez configurer votre domaine sur Resend :

1.  Allez sur **Resend Dashboard > Domains**.
2.  Cliquez sur **Add Domain** et entrez `healinghands-concept.ch`.
3.  Resend vous donnera des enregistrements DNS (DKIM, SPF, DMARC) à ajouter.
4.  Allez sur votre gestionnaire DNS (Cloudflare pour vous) et ajoutez ces enregistrements.
5.  Une fois le statut **Verified**, mettez à jour votre code :

### Mise à jour du code (`functions/api/send.js`)
Une fois le domaine vérifié, modifiez la ligne `from` dans `functions/api/send.js` :

```javascript
// AVANT (Test)
from: 'Healing Hands Contact <onboarding@resend.dev>',

// APRÈS (Production)
from: 'Healing Hands Contact <contact@healinghands-concept.ch>',
```
