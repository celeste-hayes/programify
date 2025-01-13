import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { inspoRouter } from './inspo-routes.js';
import {authRouter} from './auth-routes.js'; // Ensure correct path

const router = Router();

router.use('/users', userRouter);
router.use('/inspo', inspoRouter);
router.use('/auth', authRouter);

export default router;
