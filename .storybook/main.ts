import { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: [], // TODO "../storybook/**/*.stories.mdx"
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {
        sass: {
          // Require your Sass preprocessor here
          implementation: require("sass")
        }
      }
    }
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: true
  },
  core: {
    disableTelemetry: true
  }
};

export default config;
