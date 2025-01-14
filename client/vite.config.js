import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3001,  // Port for the Vite dev server
    open: true,  // Automatically open the browser when the server starts
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // Proxy requests to /api to this target
        changeOrigin: true,  // This is useful if the target server uses different origins
        secure: false,       // Disable SSL verification for the proxy (useful for dev)
      },
      '/auth': {
        target: 'http://localhost:3001', // Proxy requests to /auth to this target
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

