// @ts-check

import express from 'express';
import crypto from 'crypto';

/**
 * @description 一般ユーザーのlogin処理を行う
 * @param {string} email - ログインしたいユーザーの名前
 * @param {string} password - ログインしたいユーザーのパスワード（ハッシュ前）
 * @returns {boolean}
 */
function checkUserPassword (email, password) {

  console.log(`check password ${email}.}`)
  const hashedPassword = crypto.createHash('sha512').update(password).digest('hex');

//   db をwhere検索して一致するかどうかを検索 existsで検索
// usernameとpasswordに複合インデックスを設定
  return true;
}

/**
 * @description 一般ユーザーのログインチェック
 * @param {express.Request} req 
 * @returns {boolean}
 */
function checkUserLogin (req) {

  let judge = false;
  // if(req.session.username) {
  //   judge = true;
  // }

  return judge;
}

export {
    checkUserPassword
    ,checkUserLogin
}
