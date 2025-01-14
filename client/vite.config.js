import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3001,  // Port for the Vite dev server
    open: true,  // Automatically open the browser when the server starts
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // Proxy API requests to this target
        changeOrigin: true,  // This is useful if the target server uses different origins
        secure: false,       // Disable SSL verification for the proxy (useful for dev)
      },
      '/auth': {
        target: 'http://localhost:3001', // Proxy /auth requests to this target
        changeOrigin: true,
        secure: false,
      },
    },
    hmr: {
      protocol: 'ws',  // Use WebSocket for HMR (important if you're using http or https)
      host: 'localhost',  // Ensure the correct host for WebSocket connections
      port: 3001, // The same port as your Vite dev server
      clientPort: 3001, // The port that the client connects on (defaults to 3000)
      timeout: 30000, // Optional: Set timeout for HMR to avoid issues in slow networks
    },
  },
});

