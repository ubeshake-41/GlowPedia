import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/GlowPedia/',
  plugins: [react()],
  server: {
    host: true,
    strictPort: false,
    port: 5173,
  },
  preview: {
    host: true,
    port: 5173,
  }
})
