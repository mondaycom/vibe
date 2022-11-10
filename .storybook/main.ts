const projectConfig = require("../webpack/storybook.config.js");
const vibeStorybookConfig = require("./vibe-storybook-config.ts");

const mergeConfigRules = (originalConfig: any, newConfigRules: any) => {
  return {
    ...originalConfig,
    module: { ...originalConfig.module, rules: [...originalConfig.module.rules, ...newConfigRules] },
    resolve: { ...originalConfig.resolve, alias: { ...originalConfig.resolve.alias, ...projectConfig.resolve.alias } }
  };
};

const getProjectConfigRules = () => {
  return projectConfig.module.rules;
};

const removeCssLoader = (config: any) => {
  return {
    ...config,
    module: { ...config.module, rules: config.module.rules.filter((r: Record<string, any>) => !r.test.test(".css")) }
  };
};

const buildConfig = (config: any) => {
  config = removeCssLoader(config); //remove storybook default css loader configuration
  config = mergeConfigRules(config, getProjectConfigRules());
  return config;
};

const getAddons = () => {
  const addons = [
    "@storybook/addon-controls",
    "storybook-addon-themes",
    "@storybook/addon-a11y",
    "storybook-addon-performance/register",
    "@storybook/addon-docs",
    "@storybook/addon-toolbars",
    "@storybook/addon-actions",
    "../dist/storybookAddon"
  ];

  return addons;
};

module.exports = {
  stories: ["../src/**/*.stories.mdx"],
  webpackFinal: async (config: any) => {
    return buildConfig(config);
  },
  features: vibeStorybookConfig.main.features,
  addons: getAddons(),
  core: {
    builder: "webpack5"
  }
};
