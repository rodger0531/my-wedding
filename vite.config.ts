import react from '@vitejs/plugin-react-swc'
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
      src: path.resolve(__dirname, './src'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Split rarely-changing libraries away from app code. firebase.json
        // serves hashed assets with `max-age=31536000, immutable`, so without
        // this every deploy invalidates the whole ~177 KB gzip bundle for
        // returning guests; now only the app chunk changes.
        // Only split libraries that are already fully loaded on the first
        // route. Grouping @mui or framer-motion here would drag the parts used
        // solely by the lazy LandingPage into an eager chunk (measured: +28 KB
        // gzip on first paint), so those are deliberately left alone.
        manualChunks(id) {
          if (!id.includes('node_modules')) return

          // react and react-dom must stay together: splitting them risks
          // evaluating react-dom before react's internals are initialised.
          if (/[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id))
            return 'react'
          if (id.includes('react-router')) return 'router'
          if (id.includes('i18next')) return 'i18n'
        },
      },
    },
  },
}))
