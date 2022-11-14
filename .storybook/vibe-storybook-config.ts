// a temporary solution until we will move storybook utils to a different package
const { buildStorybookMainConfig } = require("../dist/storybook-utils/services");

module.exports = buildStorybookMainConfig();
