const { createProxyMiddleware } = require('http-proxy-middleware');

// cra doc https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually
// http-proxy-middleware doc https://www.npmjs.com/package/http-proxy-middleware#example
module.exports = app => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://182.92.71.168:8885/v1',
      pathRewrite: {
        '/api': '',
      },
      changeOrigin: true,
      secure: false,
    }),
  );
  app.use(
    '/rpc',
    createProxyMiddleware({
      target: 'http://testnet-jsonrpc.conflux-chain.org:12537',
    }),
  );
};
