// @ts-check
import express from "express";

import { registerMiddleware } from "#@/server/middleware";
// import { registerMiddleware } from "./middleware.mjs";

import next from "next";

let port = 3000;

if (process.env.PORT) {
  port = parseInt(process.env.PORT, 10);
}

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  registerMiddleware(server);

  // nextに渡して描画処理
  server.all("*", (req, res) => {
    // pages配下のgetServerSidePropsに渡される。
    return handle(req, res);
  });
  // @ts-ignore
  server.listen(port, (err) => {
    if (err) {
      throw err;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
});
