import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // <-- ESTO ES FUNDAMENTAL PARA QUE LAS RUTAS NO DEN PANTALLA BLANCA EN ANDROID
})
