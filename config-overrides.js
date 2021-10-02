const { addDecoratorsLegacy, addWebpackAlias, override, disableEsLint } = require('customize-cra');
const path = require('path');

module.exports = override(
  addDecoratorsLegacy(),
  disableEsLint(),
  addWebpackAlias({
    constants: path.resolve(__dirname, './src/constants'),
  }),
);
