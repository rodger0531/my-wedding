# My Wedding

This is a modern wedding website built with React, TypeScript, Vite, and Bun. It features:

- Multi-language support (English/Chinese) with i18next
- Beautiful UI using Material-UI (MUI)
- Optimized font loading for Chinese and English (vite-plugin-font, cn-font-split)
- Animated transitions and effects (framer-motion)
- Firebase analytics integration
- Responsive design and custom font themes
- Linting and formatting with ESLint and Prettier

## Features

- ⚡️ Fast development with [Vite](https://vitejs.dev/) and [Bun](https://bun.sh/)
- 🎨 UI with [Material-UI (MUI)](https://mui.com/)
- 🌏 Internationalization with [i18next](https://www.i18next.com/) and [react-i18next](https://react.i18next.com/)
- 🔥 Analytics with [Firebase](https://firebase.google.com/)
- 🅰️ Font optimization using [vite-plugin-font](https://github.com/feat-agency/vite-plugin-font) and [cn-font-split](https://github.com/ccqgithub/cn-font-split)
- 🖼️ Animated transitions and effects with [framer-motion](https://www.framer.com/motion/)
- 🧹 Linting and formatting with ESLint and Prettier
- 🗂️ Responsive design, custom font themes, and optimized assets

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended for scripts)
- [Node.js](https://nodejs.org/) (for compatibility)

### Install dependencies

```sh
bun install
```

### Development

```sh
bun run dev
```

Starts the Vite dev server with HMR.

### Build

```sh
bun run build
```

Builds the app for production (TypeScript and Vite build).

### Preview

```sh
bun run preview
```

Locally preview the production build.

### Lint

```sh
bun run lint
```

Runs ESLint on the project.

### Font Split (for Chinese font optimization)

```sh
bun run install-font-split
```

Runs [cn-font-split](https://github.com/ccqgithub/cn-font-split) to optimize font loading.

### Additional Scripts

- `bun run pre-build`: Installs dependencies and runs font split before build (used in CI)

## Main Dependencies

- React 19
- @mui/material & @mui/icons-material
- Firebase
- i18next, react-i18next, i18next-browser-languagedetector
- framer-motion
- react-router
- react-timer-hook

## Dev Dependencies

- ESLint, Prettier, prettier-plugin-organize-imports
- @vitejs/plugin-react-swc
- vite-plugin-font
- typescript, typescript-eslint

## Tooling & Configuration

- **Vite** with [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react-swc) and [vite-plugin-font](https://github.com/feat-agency/vite-plugin-font)
- **ESLint** with Prettier, React Hooks, and Vite plugin configs
- **TypeScript**
- **Bun** for fast scripting and package management
- **Firebase Hosting** and GitHub Actions for CI/CD

- **Vite config:** see `vite.config.ts` for plugins and aliases
- **ESLint config:** see `eslint.config.js` for rules and extensions
- **TypeScript config:** see `tsconfig*.json`

## Project Structure

- `src/` — Main source code
  - `pages/` — App pages (Landing, RSVP, Timeline, etc.)
  - `components/` — Reusable UI components
  - `i18n/` — Internationalization setup and locale files
  - `firebase/` — Firebase analytics integration
  - `constants/` — App constants (fonts, colours, language, location)
  - `hooks/` — Custom React hooks
  - `styles/` — CSS files for base, fonts, animations, loading
  - `types/` — TypeScript type definitions
- `public/` — Static assets and fonts
- `index.html` — Main HTML entry
- `vite.config.ts` — Vite configuration
- `eslint.config.js` — ESLint configuration
- `firebase.json` — Firebase hosting config
- `.github/workflows/` — CI/CD workflows for Firebase and GitHub Pages

## Project Structure

- `src/` — Main source code
- `src/pages/` — App pages (Landing, RSVP, Timeline, etc.)
- `src/components/` — Reusable UI components
- `src/i18n/` — Internationalization setup and locale files
- `src/firebase/` — Firebase analytics integration
- `public/` — Static assets and fonts

## Configuration

- **Vite config:** see `vite.config.ts` for plugins and aliases
- **ESLint config:** see `eslint.config.js` for rules and extensions
- **TypeScript config:** see `tsconfig*.json`

---

Feel free to fork or adapt for your own event!
