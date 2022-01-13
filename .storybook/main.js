const projectConfig = require("../webpack/storybook.config.js");

const createCompiler = require("@storybook/addon-docs/mdx-compiler-plugin");

const mergeConfigRules = (originalConfig, newConfigRules) => {
  return {
    ...originalConfig,
    module: { ...originalConfig.module, rules: [...originalConfig.module.rules, ...newConfigRules] }
  };
};

const getProjectConfigRules = () => {
  return projectConfig.module.rules;
};

const getDocsConfigRules = () => {
  return [];
};

const buildConfig = config => {
  config = mergeConfigRules(config, getProjectConfigRules());
  config = mergeConfigRules(config, getDocsConfigRules());
  return config;
};

module.exports = {
  stories: ["../src/**/*.stories.mdx"],
  webpackFinal: async config => {
    return buildConfig(config);
  },
  addons: [
    "@storybook/addon-controls",
    "storybook-addon-themes",
    "@storybook/addon-a11y",
    "storybook-addon-performance/register",
    "@storybook/addon-docs",
    "@storybook/addon-actions",
  ],
  core: {
    builder: "webpack5"
  }
};
