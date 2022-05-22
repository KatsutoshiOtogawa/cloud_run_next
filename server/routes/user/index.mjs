// @ts-check
// @ts-ignore
import { checkUserLogin } from "#server/loginAuth";
// import { checkUserLogin } from "../../loginAuth.mjs";
// import { db } from "lib/db.mjs";

/**
 *
 * @param {import("express").Router} router
 */
function homeRoute(router) {
  router.get("/", (req, res, next) => {
    console.log(
      `Accessing the ${req.session["username"]} ${req.originalUrl} from ip address: ${req.ip} method: GET`
    );
    // ログインしてないならログイン画面に移す。
    if (!checkUserLogin(req)) {
      res.redirect("/user/login");
    }

    // 描画処理に渡す
    next();
  });
}

export { homeRoute };
