// @ts-check
import {Router} from 'express';
import { loginRoute } from './login.mjs';
import { homeRoute } from './index.mjs';
import { logoutRoute } from './logout.mjs';
import { purchaseRoute } from './purchase.mjs';

const userRouter = Router();

// /user/login
loginRoute(userRouter);
// /user/logout
logoutRoute(userRouter);

// /user/
homeRoute(userRouter);

// /user/purchase
purchaseRoute(userRouter);

export {
  userRouter
}
