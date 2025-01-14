import { Router } from 'express';
import apiRouter from './api/index.js';

const router = Router();

router.use('/api', apiRouter);

// Serve environment variables to the client
router.get('/env', (req, res) => {
  res.json({
    VITE_GITHUB_TOKEN: process.env.VITE_GITHUB_TOKEN,
    VITE_YOUTUBE_API_KEY: process.env.VITE_YOUTUBE_API_KEY,
    VITE_FREECODECAMP_API_URL: process.env.VITE_FREECODECAMP_API_URL,
    VITE_API_BASE_URL_DEV: process.env.VITE_API_BASE_URL_DEV,
    VITE_API_BASE_URL_PROD: process.env.VITE_API_BASE_URL_PROD,
  });
});

// Default route
router.get('/', (_req, res) => {
  res.send('Welcome to the API');
});

export default router;
