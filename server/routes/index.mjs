// @ts-check

// ルーティング
import { apiRouter } from "#server/routes/api/router";
import { userRouter } from "#server/routes/user/router";
import { adminRouter } from "#server/routes/admin/router";
import { nologinRouter } from "#server/routes/nologin/router";

/**
 * @description 各々のルーティングをミドルウェアに登録する関数.
 * @param {import('express').Express} server/rules/no-unused-vars
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

export { routing };
