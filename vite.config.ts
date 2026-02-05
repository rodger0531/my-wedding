import react from '@vitejs/plugin-react-swc'
import * as path from 'path'
import { defineConfig } from 'vite'
import Font from 'vite-plugin-font'

// https://vite.dev/config/
export default defineConfig({
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
})
