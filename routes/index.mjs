// @ts-check

import express from 'express';

// ルーティング
import { apiRouter } from './api/router.mjs';
import { userRouter } from './user/router.mjs';
import { adminRouter } from './admin/router.mjs';
import { nologinRouter } from './nologin/router.mjs';

/**
 * @description 各々のルーティングをミドルウェアに登録する関数.
 * @param {express.Express} server
 */
function routing(server) {

  // 特定のipアドレスならルーティングするとか書く。
  // if () {
    server.use("/api", apiRouter);
  // }
  // 特定のipアドレスならルーティングするとか書く。
  // if () {

    server.use("/admin", adminRouter);
  // }
  server.use("/user", userRouter);
  server.use("/", nologinRouter);
}

export {
  routing
}
