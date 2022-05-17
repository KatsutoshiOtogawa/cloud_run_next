// @ts-check
import {Router} from 'express';
import { loginRoute } from './login.mjs';
import { homeRoute } from './home.mjs';
import { logoutRoute } from './logout.mjs';

const userRouter = Router();

loginRoute(userRouter);
logoutRoute(userRouter);

// /user/
homeRoute(userRouter);


export {
  userRouter
}
