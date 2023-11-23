import type { StorybookConfig } from "@storybook/react-webpack5";
import { storybookAddonStylingWebpackOptions } from "./addon-styling-webpack-options";

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
    "@storybook/preset-scss",
    "@storybook/addon-styling-webpack",
    {
      name: "@storybook/addon-styling-webpack",
      options: storybookAddonStylingWebpackOptions
    }
  ],
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
