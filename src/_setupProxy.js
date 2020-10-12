const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/login",
    createProxyMiddleware({
      target: "https://api.saluderia.com",
      changeOrigin: true,
    })
  );
};
