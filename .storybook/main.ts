import type { StorybookConfig } from "@storybook/react-webpack5";
import { storybookAddonStylingWebpackOptions } from "./addon-styling-webpack-options";

const getAddons = () => {
  const addons = [
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-themes",
    "@storybook/preset-scss",
    "@storybook/addon-styling-webpack",
    {
      name: "@storybook/addon-styling-webpack",
      options: storybookAddonStylingWebpackOptions
    }
  ];

  if (process.env.NODE_ENV !== "production") {
    addons.push("@storybook/addon-interactions");
  }

  return addons;
};

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx"],
  addons: getAddons(),
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: false
  },
  features: {
    legacyMdx1: true // 👈 Enables MDX v1 support
    // interactionsDebugger: true // from storybook 6 - not sure it'll work here, also probably requires "@storybook/addon-interactions
  }
};
export default config;
