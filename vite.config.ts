import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    hmr: {
      overlay: false
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      'pages': '/src/pages',
      'widgets': '/src/widgets',
      'features': '/src/features',
      'entities': '/src/entities',
      'shared': '/src/shared'
    }
  },
})

