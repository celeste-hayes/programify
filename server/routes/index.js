import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.js';
import apiRouter from './api/index.js';

const router = Router();

// Other API routes that require authentication (protected by JWT) are under /api
//TODO: Restore the authenticateToken middleware
//TODO: MVP WITHOUT Auth since project is due by tomorrow..
//router.use('/api', authenticateToken, apiRoutes);
router.use('/api', apiRouter);

// Serve environment variables to the client
router.get('/env', (req, res) => {
  res.json({
    VITE_GITHUB_TOKEN: process.env.VITE_GITHUB_TOKEN,
    VITE_YOUTUBE_API_KEY: process.env.VITE_YOUTUBE_API_KEY,
    VITE_FREECODECAMP_API_URL: process.env.VITE_FREECODECAMP_API_URL,
    VITE_API_BASE_URL: process.env.VITE_API_BASE_URL,
  });
});

// Default route
router.get('/', (_req, res) => {
  res.send('Welcome to the API');
});

export default router;
