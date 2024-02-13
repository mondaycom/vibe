import { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../storybook/**/*.stories.mdx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@storybook/preset-scss"
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
