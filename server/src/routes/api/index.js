import { Router } from 'express';
import { userRouter } from './user-routes.js';

const router = Router();

// Enter other API routes here //
router.use('/users', userRouter);

export default router;