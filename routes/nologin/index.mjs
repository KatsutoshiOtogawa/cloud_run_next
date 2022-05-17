// @ts-check
import {Router} from 'express';
import { homeRoute } from './home.mjs';

const nologinRouter = Router();


// /user/
homeRoute(nologinRouter);


export {
  nologinRouter
}
