# Portfolio Professionnel — React + Vite + Tailwind CSS

Portfolio prêt à l'emploi, construit avec React, Vite et Tailwind CSS v4.

## Installation

```bash
npm install
npm run dev
```

Le site sera disponible sur `http://localhost:5173`.

## Build de production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

## Personnalisation

Tous les contenus texte se trouvent dans `src/components/` :

- **Navbar.jsx** — nom affiché dans le menu
- **Hero.jsx** — nom, titre, présentation, liens sociaux, terminal animé
- **About.jsx** — texte de présentation, chiffres clés
- **Skills.jsx** — liste de vos compétences (tableau `GROUPS`)
- **Projects.jsx** — vos projets (tableau `PROJECTS`)
- **Experience.jsx** — votre parcours professionnel (tableau `EXPERIENCE`)
- **Contact.jsx** — email et liens sociaux
- **Footer.jsx** — copyright

Remplacez les liens `href="#"` (GitHub, LinkedIn) et l'adresse `vous@example.com`
par vos propres informations.

## Couleurs et typographie

Les couleurs et polices sont centralisées dans `src/index.css` (variables CSS
en haut du fichier) :

```css
--bg: #0E1511;         /* fond principal */
--accent: #D6A34C;     /* couleur d'accent (boutons, liens) */
```

Polices utilisées : **Fraunces** (titres), **Inter** (texte), **JetBrains Mono**
(éléments techniques / terminal).

## Déploiement

Le dossier `dist/` généré après `npm run build` peut être déployé directement sur
Vercel, Netlify, GitHub Pages ou tout hébergeur de fichiers statiques.
