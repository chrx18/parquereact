import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Ambas líneas añadidas:
  // nombre del repositorio
  base: '/parquesreact/',
  // Carpeta de salida configurada como 'docs'
  // para poder alojar en GitHub Pages (main branch, docs folder)
  build: {
    outDir: 'docs',
  },

  base: '/parquereact/',
  build: {
    outDir: 'docs',
  },
})
