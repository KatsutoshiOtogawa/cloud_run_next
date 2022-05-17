// @ts-check
import {Router} from 'express';
import { loginRoute } from './login.mjs';
import { homeRoute } from './home.mjs';
import { logoutRoute } from './logout.mjs';

const adminRouter = Router();

loginRoute(adminRouter);
logoutRoute(adminRouter);

// /user/
homeRoute(adminRouter);


export {
  adminRouter
}
