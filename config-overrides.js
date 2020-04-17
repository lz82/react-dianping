const { override, addWebpackAlias } = require('customize-cra');

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '.', dir);
}

const config = override(
  addWebpackAlias({
    '@': resolve('src')
  })
);

module.exports = config;
