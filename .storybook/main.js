// const projectConfig = require("../webpack/storybook.config.js");
//
// const mergeConfigRules = (originalConfig, newConfigRules) => {
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
//   return [];
// };
//
// const removeCssLoader = config => {
//   return { ...config, module: { ...config.module, rules: config.module.rules.filter(r => !r.test.test(".css")) } };
// };
//
// const buildConfig = config => {
//   config = removeCssLoader(config); //remove storybook default css loader configuration
//   config = mergeConfigRules(config, getProjectConfigRules());
//   config = mergeConfigRules(config, getDocsConfigRules());
//   return config;
// };
//
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
//
// module.exports = {
//   stories: ["../src/**/*.stories.mdx"],
//   webpackFinal: async config => {
//     return buildConfig(config);
//   },
//   features: {
//     interactionsDebugger: true
//   },
//   addons: getAddons(),
//   framework: {
//     name: "@storybook/react-webpack5",
//     options: {}
//   }
// };

// import type { StorybookConfig } from "@storybook/react-webpack5";
// import projectConfig from "../webpack/storybook.config.js";
const projectConfig = require("../webpack/storybook.config.js");

// const mergeConfigRules = (originalConfig: any, newConfigRules: any) => {
const mergeConfigRules = (originalConfig, newConfigRules) => {
  return {
    ...originalConfig,
    module: { ...originalConfig.module, rules: [...originalConfig.module.rules, ...newConfigRules] },
    resolve: { ...originalConfig.resolve, alias: { ...originalConfig.resolve.alias, ...projectConfig.resolve.alias } }
  };
};

const getProjectConfigRules = () => {
  return projectConfig.module.rules;
};

const getDocsConfigRules = () => {
  // return [] as any[];
  return [];
};

// const removeCssLoader = (config: any) => {
const removeCssLoader = config => {
  console.log("### config.module.rules", config.module.rules);
  return {
    ...config,
    // TODO r.test is undefined
    // module: { ...config.module, rules: config.module.rules.filter((r: any) => !r?.test?.test(".css")) }
    module: { ...config.module, rules: config.module.rules.filter(r => !r?.test?.test(".css")) }
  };
};

// const buildConfig = (config: any) => {
const buildConfig = config => {
  config = removeCssLoader(config); //remove storybook default css loader configuration
  config = mergeConfigRules(config, getProjectConfigRules());
  config = mergeConfigRules(config, getDocsConfigRules());
  return config;
};

// const config: StorybookConfig = {
const config = {
  // stories: ["../src/**/*.mdx"],
  stories: [
    "../src/storybook/stand-alone-documentaion/**/*.mdx",
    "../src/components/Accordion/**/*.mdx",
    "../src/components/AlertBanner/**/*.mdx",
    "../src/components/AttentionBox/**/*.mdx",
    "../src/components/Avatar/**/*.mdx",
    "../src/components/AvatarGroup/**/*.mdx",
    "../src/components/Badge/**/*.mdx",
    "../src/components/Box/**/*.mdx",
    "../src/components/BreadcrumbsBar/**/*.mdx",
    "../src/components/Button/**/*.mdx",
    "../src/components/ButtonGroup/**/*.mdx",
    "../src/components/Checkbox/**/*.mdx",
    "../src/components/Chips/**/*.mdx",
    "../src/components/Clickable/**/*.mdx",
    "../src/components/ColorPicker/**/*.mdx",
    "../src/components/Combobox/**/*.mdx",
    "../src/components/Counter/**/*.mdx",
    "../src/components/DatePicker/**/*.mdx",
    "../src/components/Dialog/**/*.mdx",
    // Checked
    // "../src/components/DialogContentContainer/**/*.mdx",
    "../src/components/Divider/**/*.mdx", // Checked
    // "../src/components/Dropdown/**/*.mdx",
    // "../src/components/EditableHeading/**/*.mdx",
    // "../src/components/EditableText/**/*.mdx",
    "../src/components/ExpandCollapse/**/*.mdx",
    // "../src/components/Flex/**/*.mdx",
    // "../src/components/GridKeyboardNavigationContext/**/*.mdx",
    // "../src/components/Heading/**/*.mdx",
    // "../src/components/HiddenText/**/*.mdx",
    // "../src/components/Icon/**/*.mdx",
    // "../src/components/IconButton/**/*.mdx",
    // "../src/components/Label/**/*.mdx",
    // "../src/components/LegacyEditableHeading/**/*.mdx",
    // "../src/components/LegacyHeading/**/*.mdx",
    // "../src/components/Link/**/*.mdx",
    // "../src/components/List/**/*.mdx",
    // "../src/components/ListItem/**/*.mdx",
    // "../src/components/ListItemAvatar/**/*.mdx",
    // "../src/components/ListItemIcon/**/*.mdx",
    // "../src/components/ListTitle/**/*.mdx",
    // "../src/components/Loader/**/*.mdx",
    // "../src/components/Menu/**/*.mdx",
    // "../src/components/MenuButton/**/*.mdx",
    // "../src/components/Modal/**/*.mdx",
    // "../src/components/MultiStepIndicator/**/*.mdx",
    // "../src/components/ProgressBars/**/*.mdx",
    // "../src/components/RadioButton/**/*.mdx",
    // "../src/components/Refable/**/*.mdx",
    // "../src/components/ResponsiveList/**/*.mdx",
    // "../src/components/Search/**/*.mdx",
    // "../src/components/Skeleton/**/*.mdx",
    // "../src/components/Slider/**/*.mdx",
    // "../src/components/SplitButton/**/*.mdx",
    // "../src/components/Steps/**/*.mdx",
    // "../src/components/Switch/**/*.mdx",
    // "../src/components/Table/**/*.mdx",
    // "../src/components/Tabs/**/*.mdx",
    // "../src/components/Text/**/*.mdx",
    "../src/components/TextField/**/*.mdx" // Checked
    // "../src/components/TextWithHighlight/**/*.mdx",
    // "../src/components/ThemeProvider/**/*.mdx",
    // "../src/components/Tipseen/**/*.mdx",
    // "../src/components/Toast/**/*.mdx",
    // "../src/components/Toggle/**/*.mdx",
    // "../src/components/Tooltip/**/*.mdx",
    // "../src/components/Typography/**/*.mdx",
    // "../src/components/VirtualizedGrid/**/*.mdx",
    // "../src/components/VirtualizedList/**/*.mdx",
  ],
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
  }
  // staticDirs: ["../public"]
};
export default config;
