import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Served from https://karsten-uy.github.io/karsten_website/.
  // When you move to a custom domain (served at the root), change this single line to "/".
  base: "/karsten_website/",
})
