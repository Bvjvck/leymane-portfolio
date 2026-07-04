# Portfolio — Leymane

Portfolio one-page en **React + Vite + Tailwind CSS + Framer Motion**, direction "terminal créatif" (dégradés violet/magenta/ambre + éléments de code).

## Démarrer en local

```bash
npm install
npm run dev
```

Le site sera disponible sur `http://localhost:5173`.

## Build de production

```bash
npm run build
npm run preview
```

## À personnaliser avant mise en ligne

- `src/components/Contact.jsx` : remplace l'email, le lien GitHub et le lien LinkedIn par les tiens.
- `src/data/projects.js` : ajuste ou ajoute tes projets et compétences.
- `src/components/Hero.jsx` : le petit bloc "code" peut être modifié librement.
- Favicon : ajoute un fichier dans `public/` et référence-le dans `index.html`.

## Structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx       ← élément signature : carte "terminal" flottante + fond en dégradé animé
    Projects.jsx
    Skills.jsx
    Devis.jsx      ← formulaire de demande de devis (type de projet, budget, délai)
    Contact.jsx
  data/
    projects.js    ← contenu (projets + compétences), à modifier facilement
  App.jsx
  index.css
```

## À propos du formulaire de devis

Pour l'instant, le formulaire ouvre le client mail de l'utilisateur avec les informations pré-remplies
(pas de backend requis). Pour recevoir les demandes directement sans que le visiteur ait besoin d'un
client mail configuré, deux options simples :

- **EmailJS** (https://www.emailjs.com) : service gratuit qui envoie l'email directement depuis le
  front-end, sans backend à héberger.
- **Ton propre backend Express** (comme pour GlamShop / NAHFIK) : une route `POST /api/devis` qui
  enregistre la demande en base et/ou envoie un email via Nodemailer.

Le point à modifier se trouve dans `src/components/Devis.jsx`, fonction `handleSubmit`.


## Déploiement

Ce projet est prêt pour **Vercel** ou **Render** (comme GlamShop) :
- Build command : `npm run build`
- Output directory : `dist`
