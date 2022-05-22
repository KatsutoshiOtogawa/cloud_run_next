// @ts-check
import { Router } from "express";
import { homeRoute } from "#server/routes/nologin/index";
// import { homeRoute } from "./index.mjs";

const nologinRouter = Router();

// /user/
homeRoute(nologinRouter);

export { nologinRouter };
