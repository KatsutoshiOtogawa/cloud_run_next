// @ts-check
import {Router} from 'express';
import { checkUserLogin } from '../../loginAuth.mjs';
import { db } from '../../db.mjs';

function aaa () {

  const data = {
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  }
  console.log('register data')

  try {
    const docRef = db.collection('users').doc('alovelace');

    console.log(data);
    docRef.set(data);
  } catch (err) {
    console.log(err)

  }
}

async function bbb () {

  try {

    const colRef = await db.collection('users').get();
    console.log(colRef);
    colRef.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  } catch (err) {
    console.log(err)

  }
}

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
    // aaa();
    bbb();
    
    // 描画処理に渡す
    next();
  });
}

export {
  homeRoute
}
