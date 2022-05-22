// @ts-check

/**
 *
 * @param {import("express").Router} router
 */
function logoutRoute(router) {
  router.get("/logout", (req, res) => {
    console.log(`Accessing the ${req.originalUrl} from ip address: ${req.ip}`);
    req.session.destroy((err) => {
      res.redirect("/user/login");
    });
  });
}

export { logoutRoute };
