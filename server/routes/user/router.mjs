// @ts-check
import { Router } from "express";
import { loginRoute } from "#server/routes/user/login";
import { homeRoute } from "#server/routes/user/index";
import { logoutRoute } from "#server/routes/user/logout";
import { purchaseRoute } from "#server/routes/user/purchase";

const userRouter = Router();

// /user/login
loginRoute(userRouter);
// /user/logout
logoutRoute(userRouter);

// /user/
homeRoute(userRouter);

// /user/purchase
purchaseRoute(userRouter);

export { userRouter };
