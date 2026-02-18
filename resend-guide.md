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

## 3. Important : Vérification du Domaine
Si vous n'avez pas encore configuré de domaine personnalisé sur Resend, vous ne pouvez envoyer des emails qu'à l'adresse email utilisée pour créer votre compte Resend, et l'adresse d'envoi sera `onboarding@resend.dev`.

Une fois votre domaine `healinghands-concept.ch` vérifié sur Resend :
1.  Modifiez le fichier `functions/api/send.js`.
2.  Changez `from: 'onboarding@resend.dev'` par `from: 'contact@healinghands-concept.ch'`.
