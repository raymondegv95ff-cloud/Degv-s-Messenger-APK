import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // <-- ESTO genera las rutas relativas en la carpeta dist/ para Capacitor
})
