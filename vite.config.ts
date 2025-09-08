import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { timeApiPlugin } from './vite-time-plugin.js'

// For GitHub Pages project page deployment
// We read the base from env. In Actions we set VITE_BASE='/AISUMMIT/'
const base = process.env.VITE_BASE || '/'

export default defineConfig({
  plugins: [react(), timeApiPlugin()],
  base,
  build: {
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    sourcemap: false,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 4173,
    open: true,
  },
})
