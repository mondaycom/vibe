// a temporary solution until we will move storybook utils to a different package
const { buildStorybookConfig } = require("../dist/storybookUtils");

module.exports = buildStorybookConfig();
