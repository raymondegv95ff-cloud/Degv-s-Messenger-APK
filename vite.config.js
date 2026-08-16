import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Esto es vital
  build: {
    rollupOptions: {
      input: 'index.html' // Le decimos explícitamente dónde empezar
    }
  }
})
