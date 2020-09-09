const { createProxyMiddleware } = require('http-proxy-middleware');

// cra doc https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually
// http-proxy-middleware doc https://www.npmjs.com/package/http-proxy-middleware#example
module.exports = app => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://scantest.confluxscan.io',
      changeOrigin: true,
      secure: false,
    }),
  );
};
