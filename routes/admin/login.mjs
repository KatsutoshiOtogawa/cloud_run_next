// @ts-check
import {Router} from 'express';
import { checkUserPassword, checkUserLogin } from '../../loginAuth.mjs';
import joi from 'joi'

/**
 * 
 * @param {Router} router 
 */
function loginRoute (router) {

  router.get("/login", (req, res, next) => {

    console.log(`Accessing the ${req.originalUrl} from ip address: ${req.ip}`)
    if (checkUserLogin(req)) {
      // dashboardに回す
      // res.redirect('/user/login');
    }
    // すでにログインしている場合はユーザーダッシュボードに移る
    // if(req.session.username) {
    //   next();
    // }
    // 描画処理に渡す
    next();
  });

  router.post("/login", (req, res, next) => {

    const { error: validationError, value } = joi.object().keys({
      email: joi.string().required(),
      password: joi.string().required(),
    }).validate(req.body)

    if (validationError) {
      // 描画処理に渡す
      // ユーザー名またはパスワードが空です。
      next()
      return;
      // return err.clErrCls(validationError)
    }

    /** @type {string} */
    const email = value["email"];

    /** @type {string} */
    const password = value["password"];

    console.log(`Accessing the ${req.originalUrl} from ip address: ${req.ip}`)
    if (checkUserLogin(req)) {
      // dashboardに回す
      // res.redirect('/user/login');
    }

    console.log(`Accessing the ${email} ${password}`)

    if (! checkUserPassword(email, password)) {
      // パスワードが一致しません。
      next();
      return;
    }

    // dashboardにリダイレクト
    // 描画処理に渡す
    next();
  });

}

export {
  loginRoute
}
