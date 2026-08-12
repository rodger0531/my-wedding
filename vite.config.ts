// Vite 8 transforms JSX with Oxc, so the SWC plugin is redundant work unless
// SWC-specific plugins are used (this project uses none) — vite:react-swc
// itself recommends switching. See https://vite.dev/rolldown
import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defineConfig } from 'vite'
import Font from 'vite-plugin-font'

// https://vite.dev/config/
export default defineConfig(() => ({
  // base: command === 'build' ? '/my-wedding/' : '/', // For github pages deployment
  base: '/',
  plugins: [
    react(),
    Font.vite({
      scanFiles: ['src/**/*.{ts,tsx,js,jsx}', 'src/i18n/locales/*.json'],
    }),
  ],
  resolve: {
    alias: {
      // `import.meta.dirname` rather than `__dirname`: Vite 8's native config
      // loader (planned to become the default) cannot evaluate `__dirname`.
      src: path.resolve(import.meta.dirname, './src'),
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  build: {
    // Vite 8 runs Rolldown, so this is `rolldownOptions` rather than the
    // deprecated `rollupOptions` alias, and chunking is expressed as
    // `codeSplitting.groups` instead of the deprecated `manualChunks`.
    rolldownOptions: {
      output: {
        codeSplitting: {
          // Split rarely-changing libraries away from app code. firebase.json
          // serves hashed assets with `max-age=31536000, immutable`, so
          // without this every deploy invalidates the whole ~177 KB gzip
          // bundle for returning guests; now only the app chunk changes.
          //
          // Only libraries that are already fully loaded on the first route
          // belong here. Grouping @mui or framer-motion would drag the parts
          // used solely by the lazy LandingPage into an eager chunk (measured:
          // +28 KB gzip on first paint), so those are deliberately left out.
          //
          // The trailing separator in each pattern matters: it stops
          // `react-router` and `react-i18next` from being captured by the
          // react group, which must keep react, react-dom and scheduler
          // together so react-dom cannot evaluate before react's internals.
          groups: [
            {
              name: 'react',
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
            },
            { name: 'router', test: /[\\/]node_modules[\\/]react-router[\\/]/ },
            { name: 'i18n', test: /[\\/]node_modules[\\/][^\\/]*i18next/ },
          ],
        },
      },
    },
  },
}))
