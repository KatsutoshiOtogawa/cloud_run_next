// @ts-check
import { checkUserLogin } from "#server/loginAuth";
// import { checkUserLogin } from "../../loginAuth.mjs";
import joi from "joi";
import { csrfProtection } from "#server/csrf";
// import { csrfProtection } from "../../csrf.mjs";

/**
 *
 * @param {import("express").Router} router
 */
function purchaseRoute(router) {
  router.get("/cart", csrfProtection, (req, res, next) => {
    console.log(
      `Accessing the ${req.session["username"]} ${req.originalUrl} from ip address: ${req.ip} method: GET`
    );
    // ログインしてないならログイン画面に移す
    if (!checkUserLogin(req)) {
      res.redirect("/user/login");
    }
    // 描画処理に渡す
    next();
  });

  router.post("/cart", csrfProtection, (req, res, next) => {
    console.log(
      `Accessing the ${req.originalUrl} from ip address: ${req.ip} method: POST`
    );
    // ログインしてないならログイン画面に移す。
    if (!checkUserLogin(req)) {
      res.redirect("/user/login");
    }

    const { error: validationError } = joi
      .object()
      .keys({
        merchandise1: joi.string().required(),
      })
      .validate(req.body);

    if (validationError) {
      console.log("validation failure");
      // 描画処理に渡す
      // ユーザー名またはパスワードが空です。
      next();
      return;
    }

    /** @type {string} */
    // const merchandise1 = value["merchandise1"];

    // 購入処理に移る

    // successに送る。
    res.redirect("/user");
    next();
  });
}

export { purchaseRoute };
