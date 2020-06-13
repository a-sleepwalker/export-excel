const merge = require('lodash/merge');

process.env.PROXY_ENV = 'development';

const {PROXY_ENV, NODE_ENV} = process.env;

const proxyTable = {};

if (NODE_ENV === 'development') {
  merge(proxyTable, {
    '/api': {
      target: 'http://localhost:8008/api/export',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
  });
}

module.exports = proxyTable;
