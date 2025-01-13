import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.js';
import apiRouter from './api/index.js';

const router = Router();

// Other API routes that require authentication (protected by JWT) are under /api
//TODO: Restore the authenticateToken middleware
//TODO: MVP WITHOUT Auth since project is due by tomorrow..
//router.use('/api', authenticateToken, apiRoutes);
router.use('/api', apiRouter);

// Default route
router.get('/', (_req, res) => {
  res.send('Welcome to the API');
});

export default router;
