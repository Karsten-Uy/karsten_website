import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Recompress raster images + minify SVGs at build time (sources untouched).
    // GIFs are excluded on purpose — they're animated (page backgrounds + the
    // Kirby mascot) and sharp would flatten them to a single frame.
    ViteImageOptimizer({
      test: /\.(jpe?g|png|svg|webp|avif|tiff)$/i,
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
    }),
  ],
  // Served from https://karsten-uy.github.io/karsten_website/.
  // When you move to a custom domain (served at the root), change this single line to "/".
  base: "/karsten_website/",
  build: {
    rollupOptions: {
      output: {
        // Split rarely-changing libraries into their own long-cache chunks so
        // app-code deploys don't invalidate them, and the big animation lib
        // downloads in parallel with the app bundle.
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})
