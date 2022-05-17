// @ts-check
import {Router} from 'express';
import { homeRoute } from './home.mjs';

const apiRouter = Router();


// /api/
homeRoute(apiRouter);

export {
  apiRouter
}
