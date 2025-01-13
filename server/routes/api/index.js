import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { inspoRouter } from './inspo-routes.js';
import {authRouter} from './auth-routes.js'; // Ensure correct path

const apiRouter = Router();

apiRouter.use('/users', userRouter);
apiRouter.use('/inspo', inspoRouter); 
apiRouter.use('/auth', authRouter);

export default apiRouter;
