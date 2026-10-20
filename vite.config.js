import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Served from https://pravindu-bhashitha.github.io/Personal-Website/
  base: '/Personal-Website/',
})
