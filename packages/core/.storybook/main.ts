import path from "path";
import type { StorybookConfig } from "@storybook/react-webpack5";
import { storybookAddonStylingWebpackOptions } from "./addon-styling-webpack-options";

const getAddons = () => {
  const addons = [
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false
      }
    },
    "@storybook/addon-themes",
    "@storybook/preset-scss",
    {
      name: "@storybook/addon-styling-webpack",
      options: storybookAddonStylingWebpackOptions
    },
    "storybook-addon-playground",
    "@chromatic-com/storybook",
    "@storybook/addon-storysource"
  ];

  if (process.env.NODE_ENV !== "production") {
    addons.push("@storybook/addon-interactions");
  }

  return addons;
};
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: getAddons(),
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: false
  },
  async webpackFinal(config, { configType }) {
    if (configType === "DEVELOPMENT") {
      if (config.resolve) {
        config.resolve.alias = {
          ...config.resolve.alias,
          "monday-ui-style/dist/index.min.css": path.resolve(__dirname, "../../style/src/index.scss"),
          "monday-ui-style/dist": path.resolve(__dirname, "../../style/src")
        };
      }
      return config;
    }
    return config;
  }
};
export default config;
