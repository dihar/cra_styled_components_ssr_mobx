const { override, addDecoratorsLegacy, useEslintRc } = require('customize-cra');

module.exports = override(
    addDecoratorsLegacy(), // be sure to have @babel/plugin-proposal-decorators is installed
    useEslintRc()
);
