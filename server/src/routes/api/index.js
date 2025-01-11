import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { inspoRouter } from './inspo-routes.js';

const router = Router();

router.use('/users', userRouter);
router.use('/inspo', inspoRouter);

export default router;
