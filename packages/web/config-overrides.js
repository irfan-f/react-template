const { override, babelInclude, removeModuleScopePlugin } = require('customize-cra');
const path = require('path');

module.exports = override(
  removeModuleScopePlugin(),
  babelInclude([
    path.resolve('src'), // Make sure you link your own source
    path.resolve('../shared'), // Link your shared module
  ])
);