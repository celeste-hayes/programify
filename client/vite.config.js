import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: true,
    port: process.env.PORT || 3001,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      // WebSocket proxy configuration
      '/socket.io': {
        target: 'http://localhost:3001', // Backend WebSocket server port
        ws: true,  // This is important for WebSocket connections
      },
      '/auth': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false
      },
    },
  },
  plugins: [react()],
})

