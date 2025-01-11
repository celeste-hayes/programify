import { Router } from 'express';
import authRoutes from './auth-routes.js';
import { authenticateToken } from '../middleware/auth.js';
import apiRoutes from './api/index.js';

const router = Router();

// Authentication routes are available under /auth
router.use('/auth', authRoutes); 

// Other API routes that require authentication (protected by JWT) are under /api
router.use('/api', authenticateToken, apiRoutes);

// Default route
router.get('/', (req, res) => {
  res.send('Welcome to the API');
});

export default router;
