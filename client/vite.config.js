import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,                 
    port: process.env.PORT || 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5175',
      },
    },
  },
  plugins: [react()],
})
