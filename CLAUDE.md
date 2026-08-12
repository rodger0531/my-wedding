# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **Bun** (`bun.lock`); Vite is run through `bunx --bun`.

```sh
bun install              # install deps
bun run dev              # Vite dev server with HMR
bun run build            # tsc -b (typecheck) + vite build → dist/
bun run preview          # serve the production build
bun run lint             # eslint .
bun run install-font-split  # fetch the cn-font-split binary (needed once before build)
bun run pre-build        # frozen-lockfile install + install-font-split (what CI runs)
```

There is no test suite and no test runner configured.

## Architecture

Single-page React 19 + TypeScript + Vite wedding invitation site (Rodger & Claire, 2026-04-18), bilingual EN / zh-TW, deployed to Firebase Hosting at `rodgerclaire.wedding`.

### Routing & page composition

`main.tsx` → `I18nextProvider` → `App.tsx` (MUI `ThemeProvider` + `LazyMotion` + `BrowserRouter`). Three routes: `/` (`Welcome`, eagerly loaded — it's the first paint), `/main` (`LandingPage`, lazy), `/loading`, plus a `*` NotFound.

`pages/LandingPage.tsx` is not a route tree; it is one long scrolling page that composes every section (`Greetings`, `CountDown`, `SaveTheDate`, `Location`, `Timeline`, `Details`, `AttireGuide`, `LoveStory`, `WeddingShoots`, `Rsvp`, `Footer`). Sections below the fold are `lazy()` + `<Suspense>` with a `<Skeleton>` fallback. To add a section, create it in `src/pages/` and wire it into this list. `Welcome` preloads `LandingPage` in an effect so the nav to `/main` is instant.

### Theme is language-dependent

`getTheme(isEnglish)` in `App.tsx` swaps font families and heading sizes based on the active language — English and Chinese need different fonts, sizes, letter-spacing and line-heights throughout. Three custom typography slots (`titleFont`, `subtitleFont`, `handWriting`) are added to the MUI theme and declared in `src/types/theme.d.ts`; use them as `fontFamily="handWriting"` etc. rather than naming a font directly. Font names live in `src/constants/fonts.ts`, the single brand colour in `src/constants/colour.ts`.

Components read language via `useLanguage()` (`src/hooks/useLanguage.ts`), which returns `{ isEnglish, isChinese }` from i18next's `resolvedLanguage`. Per-component `isEnglish ? … : …` branching for sizing/spacing is the established pattern, not an exception.

### i18n

`src/i18n/index.ts` registers `en` and `zh_TW` JSON under language-only keys (`en`, `zh`), with browser language detection and `fallbackLng: 'en'`. The `Header` language switch writes `localStorage['i18nextLng']` and calls `i18n.changeLanguage`. Both locale files must be kept in sync — and see the font note below, because locale JSON drives which Chinese glyphs get shipped.

Language-change re-animations use `key={i18n.language}` plus the `.flip-animate` class from `src/styles/animations.css`.

### Fonts (the non-obvious part)

Chinese fonts are subset by `vite-plugin-font` / `cn-font-split`. Two rules follow:

1. Font files are pulled in by **side-effect imports of the `.ttf`/`.otf`** in the component that first needs them (`App.tsx` imports the fonts used by `Welcome`; `LandingPage.tsx` imports `honya.ttf` and `lihsianti.ttf`). Splitting the imports this way keeps the large Chinese subsets off the critical path — don't consolidate them into one place.
2. The plugin decides which glyphs to keep by scanning `src/**/*.{ts,tsx,js,jsx}` and `src/i18n/locales/*.json` (`scanFiles` in `vite.config.ts`). Chinese text that reaches the page from anywhere else will render with missing glyphs.

Latin display fonts (`Better Together`, `Halimun`) are plain `@font-face` rules in `src/styles/fonts.css` / `fonts_2.css` pointing at `public/fonts/`, and are preloaded in `index.html`.

### Animation

`LazyMotion` runs in **strict** mode with `domAnimation` only, so use `m.div` / `m.span` from framer-motion — importing `motion` throws. Section entrances use `whileInView` with `viewport={{ once: true }}`; `LandingPage` sets `history.scrollRestoration = 'manual'` so reloads don't replay them mid-page.

### Firebase

`src/firebase/config.ts` reads `VITE_FIREBASE_*` from `.env` (mirrored as GitHub secrets in the deploy workflow). `getAnalyticsInstance()` returns `null` unless `import.meta.env.PROD`, so analytics is inert in dev; `AnalyticsTracker` logs a `page_view` per route change (console-only in dev).

### Dev-only affordances

`BottomNavBar` (scroll-to-top) renders only under `import.meta.env.DEV`, and `Header` is sticky only in dev. Keep dev-only UI gated this way.

### Countdown state machine

`pages/CountDown.tsx` branches on `WEDDING_DATE` / `WEDDING_FINISH_DATE` (`src/constants/date.ts`): before → `CountdownTimer` counting down, during → an animated "happening right now" banner, after → `StopWatchTimer` counting up since the wedding ended. Both timers render the same `Timer` component.

## Conventions

- Imports use the `src/` alias (`import X from 'src/components/X'`); `@/` maps to the same place but `src/` is what the codebase uses. Aliases are declared in both `vite.config.ts` and `tsconfig.app.json`.
- Prettier: single quotes, **no semicolons**, with `prettier-plugin-organize-imports` (import order is tool-managed — don't hand-sort).
- MUI components are imported from their deep paths (`@mui/material/Box`), not the barrel.
- Styling is MUI `sx` with responsive `{ xs, sm }` objects; no CSS-in-JS files beyond the four in `src/styles/`.
- British spelling `colour`/`Colours` is intentional (see `.vscode/settings.json` cSpell list).
- Images are `.webp`/`.svg` in `src/assets/`, rendered through the `StyledImage` wrapper (non-draggable, non-selectable, `objectFit: contain`).
- TS is strict with `noUnusedLocals`/`noUnusedParameters` and `verbatimModuleSyntax` — type-only imports need `import type`.

## Deployment

Push to `main` triggers `.github/workflows/` → `pre-build` + `build` + `FirebaseExtended/action-hosting-deploy` to project `wedding-tw` (live channel), serving `dist/` with SPA rewrites and long-lived asset caching (`firebase.json`). A GitHub Pages workflow also exists but is gated behind the `ENABLE_GH_PAGES` repo variable; enabling it requires switching `base` in `vite.config.ts` back to `/my-wedding/`.
