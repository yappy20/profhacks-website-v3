import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 8000,
    open: true,
    hmr: {
      overlay: true
    },
    watch: {
      usePolling: false
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})

