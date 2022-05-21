// @ts-check
import {Router} from 'express';
import { checkUserPassword, createUserLoginSession ,checkUserLogin } from '../../loginAuth.mjs';
import joi from 'joi'

/**
 * 
 * @param {Router} router 
 */
function loginRoute (router) {

  router.get("/login", (req, res, next) => {

    console.log(`Accessing the ${req.originalUrl} from ip address: ${req.ip} method: GET`)
    // すでにログインしている場合はユーザーダッシュボードに移る
    if (checkUserLogin(req)) {
      // dashboardに回す
      res.redirect('/user');
    }

    // 描画処理に渡す
    next();
  });

  router.post("/login", (req, res, next) => {

    console.log(`Accessing the ${req.originalUrl} from ip address: ${req.ip} method: POST`)
    // すでにログインしている場合はユーザーダッシュボードに移る
    if (checkUserLogin(req)) {
      console.log('all ready login');
      // dashboardに回す
      res.redirect('/user');
    }

    const { error: validationError, value } = joi.object().keys({
      email: joi.string().required(),
      password: joi.string().required(),
    }).validate(req.body)

    if (validationError) {
      console.log('validation failure');
      // 描画処理に渡す
      // ユーザー名またはパスワードが空です。
      next()
      return;
    }

    /** @type {string} */
    const email = value["email"];

    /** @type {string} */
    const password = value["password"];


    console.log(`Accessing the ${email} ${password}`);

    const {username, validated } = checkUserPassword(email, password);

    if (! validated ) {
      console.log('password unmatch');
      // パスワードが一致しません。
      next();
      return;
    }

    createUserLoginSession(req, username);
    res.redirect('/user');
  });

}

export {
  loginRoute
}
