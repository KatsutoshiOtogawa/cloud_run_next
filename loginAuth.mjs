// @ts-check

import express from 'express';
import crypto from 'crypto';

/**
 * @description 一般ユーザーのlogin処理を行う
 * @param {string} email - ログインしたいユーザーのメールアドレス
 * @param {string} password - ログインしたいユーザーのパスワード（ハッシュ前）
 * @returns {{username: string; validated: boolean}}
 */
function checkUserPassword (email, password) {

  console.log(`check password ${email}.}`)
  const hashedPassword = crypto.createHash('sha512').update(password).digest('hex');

// db をwhere検索して一致するかどうかを検索で検索
// emailとpasswordに複合インデックスを設定
// usernameを取得する形でもらう。
// 複数検索にかかったらエラーにして、管理者に問い合わせてくださいと表示。

  const username = 'HelloWorld';
  const validated = true;

  return { username, validated };
}

/**
 * @description 一般ユーザーのログインセッション作成
 * @param {express.Request} req 
 * @param {string} username - ログインしているユーザーのusername
 */
function createUserLoginSession (req, username) {
  req.session['username'] = username;
  req.session['userLogin'] = true;
}

/**
 * @description 一般ユーザーのログインチェック
 * @param {express.Request} req 
 * @returns {boolean}
 */
function checkUserLogin (req) {

  let judge = false
  if(req.session['userLogin']) {
    judge = true;
  // adminでログインしていた場合もユーザーで見れるようにする。
  }else if (req.session['adminLogin']) {
    judge = true;
  }

  return judge;
}

export {
    checkUserPassword
    ,createUserLoginSession
    ,checkUserLogin
}
