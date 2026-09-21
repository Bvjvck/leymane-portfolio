export const projects = [
  {
    id: 'xaalis',
    title: 'Xaalis',
    tag: 'Application de gestion financière',
    description:
      "Application complète de gestion financière personnelle pensée pour l'Afrique de l'Ouest (FCFA) : comptes multi-supports (espèces, banque, mobile money), budgets avec alertes, objectifs d'épargne, transactions récurrentes et rapports mensuels. Écosystème complet : API, web, back-office admin et apps mobiles (React Native + Android natif).",
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Expo / React Native', 'Java / Android'],
    accent: 'from-cyan to-violet',
    year: '2026',
    link: 'https://xaalis-front.vercel.app/',
  },
  {
    id: 'maurigp',
    title: 'MauriGP',
    tag: 'Marketplace / Transport de colis',
    description:
      "Plateforme mettant en relation des voyageurs (GP) et des expéditeurs pour le transport de colis entre la Mauritanie, l'Afrique et l'Europe : recherche de trajets par pays de départ/arrivée, profils GP vérifiés (identité, système de parrainage), avis publics, mise en contact via messagerie ou WhatsApp, et un service d'achat de produits à l'étranger livrés par un GP. Version web disponible, application mobile à venir.",
    stack: ['Next.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    accent: 'from-violet to-cyan',
    year: '2026',
    link: 'https://mauri-gp.vercel.app',
  },
  {
    id: 'glamshop',
    title: 'GlamShop',
    tag: 'E-commerce',
    description:
      "Plateforme e-commerce complète dédiée aux cosmétiques : catalogue produits, panier, authentification JWT et paiement mobile intégré (Wave, Orange Money). Déployée en production.",
    stack: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT'],
    accent: 'from-violet to-magenta',
    year: '2025',
    link: 'https://glamshop.vercel.app/',
  },
  {
    id: 'nahfik',
    title: 'NAHFIK GROUP',
    tag: 'Site vitrine & Branding',
    description:
      "Site vitrine pour un groupe multisectoriel : back-office d'administration, gestion des rôles (RBAC), upload d'images et identité de marque conçue en parallèle (logo, supports visuels).",
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    accent: 'from-magenta to-amber',
    year: '2026',
    link: 'https://nahfik.vercel.app/',
  },
  {
    id: 'cahier',
    title: 'Cahier de Texte Électronique',
    tag: 'Application mobile',
    description:
      "Application Android pensée pour digitaliser le suivi pédagogique en établissement scolaire : gestion des séances, persistance locale et interface pensée pour un usage quotidien.",
    stack: ['Java', 'Android Studio', 'SQLite'],
    accent: 'from-amber to-cyan',
    year: '2025',
  },
]

export const skillGroups = [
  {
    label: 'Frontend',
    items: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'JWT & RBAC', 'REST API'],
  },
  {
    label: 'Mobile',
    items: ['Java','Flutter', 'Dart'],
  },
  {
    label: 'Outils & Déploiement',
    items: ['Git & GitHub', 'Render', 'Vercel', 'Linux / Ubuntu'],
  },
  {
    label: 'Design & Branding',
    items: ['Figma', 'Canva'],
  },
  {
    label: 'Bases de données',
    items: ['MongoDB', 'SQLite', 'MySQL'],
  },
]
