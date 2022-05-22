// @ts-check
import { Router } from "express";
import { loginRoute } from "#server/routes/admin/login";
import { homeRoute } from "#server/routes/admin/index";
import { logoutRoute } from "#server/routes/admin/logout";
// import { loginRoute } from "./login.mjs";
// import { homeRoute } from "./index.mjs";
// import { logoutRoute } from "./logout.mjs";

const adminRouter = Router();

loginRoute(adminRouter);
logoutRoute(adminRouter);

// /user/
homeRoute(adminRouter);

export { adminRouter };
