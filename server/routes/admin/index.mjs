// @ts-check
import { checkUserLogin } from "#server/loginAuth";
// import { checkUserLogin } from "../../loginAuth.mjs";

/**
 *
 * @param {import("express").Router} router
 */
function homeRoute(router) {
  router.get("/", (req, res, next) => {
    console.log(`Accessing the ${req.originalUrl} from ip address: ${req.ip}`);
    if (!checkUserLogin(req)) {
      res.redirect("/user/login");
    }
    // 描画処理に渡す
    next();
  });
}

export { homeRoute };
