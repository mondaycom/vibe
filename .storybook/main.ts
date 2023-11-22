import type { StorybookConfig } from "@storybook/react-webpack5";
// const projectConfig = require("../webpack/storybook.config.js");
//
// const mergeConfigRules = (originalConfig: any, newConfigRules: any) => {
//   return {
//     ...originalConfig,
//     module: { ...originalConfig.module, rules: [...originalConfig.module.rules, ...newConfigRules] },
//     resolve: { ...originalConfig.resolve, alias: { ...originalConfig.resolve.alias, ...projectConfig.resolve.alias } }
//   };
// };
//
// const getProjectConfigRules = () => {
//   return projectConfig.module.rules;
// };
//
// const getDocsConfigRules = () => {
//   return [] as any[];
// };
//
// const removeCssLoader = (config: any) => {
//   return {
//     ...config,
//     module: { ...config.module, rules: config.module.rules.filter((r: any) => !r?.test?.test(".css")) }
//   };
// };
//
// const buildConfig = (config: any) => {
//   config = removeCssLoader(config); //remove storybook default css loader configuration
//   config = mergeConfigRules(config, getProjectConfigRules());
//   config = mergeConfigRules(config, getDocsConfigRules());
//   return config;
// };

// Old addons
// const getAddons = () => {
//   const addons = [
//     "@storybook/addon-controls",
//     "storybook-addon-themes",
//     "@storybook/addon-a11y",
//     "storybook-addon-performance/register",
//     "@storybook/addon-docs",
//     "@storybook/addon-toolbars",
//     "@storybook/addon-actions"
//   ];
//
//   if (process.env.NODE_ENV !== "production") {
//     addons.push("@storybook/addon-interactions");
//   }
//
//   return addons;
// };

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@storybook/preset-scss"
  ],
  // webpackFinal: async config => {
  //   return buildConfig(config);
  // },
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: true
  },
  features: {
    legacyMdx1: true // 👈 Enables MDX v1 support
    // interactionsDebugger: true // from storybook 6 - not sure it'll work here, also probably requires "@storybook/addon-interactions
  }
};
export default config;
