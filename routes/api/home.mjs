// @ts-check
import {Router} from 'express';

/**
 * 
 * @param {Router} router 
 */
function homeRoute (router) {
  router.get("/", (req, res, next) => {
    console.log(`Accessing the ${req.originalUrl} from ip address: ${req.ip}`)
    // 描画処理に渡す
    next();
  });
}

export {
  homeRoute
}
