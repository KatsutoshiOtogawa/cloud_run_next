// @ts-check
import {Router} from 'express';
import { checkUserLogin } from '../../loginAuth.mjs';

/**
 * 
 * @param {Router} router 
 */
function homeRoute (router) {
  router.get("/", (req, res, next) => {
    console.log(`Accessing the ${req.session['username']} ${req.originalUrl} from ip address: ${req.ip} method: GET`)
    // ログインしてないならログイン画面に移す。
    if (!checkUserLogin(req)) {
      res.redirect('/user/login');
    }
    // 描画処理に渡す
    next();
  });
}

export {
  homeRoute
}