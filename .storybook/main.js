const projectConfig = require("../webpack/storybook.config.js");
const createCompiler = require("@storybook/addon-docs/mdx-compiler-plugin");

const mergeConfigRules = (originalConfig, newConfigRules) => {
  return {
    ...originalConfig,
    module: {
      ...originalConfig.module,
      rules: [...originalConfig.module.rules, ...newConfigRules]
    }
  };
};
const getProjectConfigRules = () => {
  return projectConfig.module.rules;
};
const getDocsConfigRules = () => {
  return [
    {
      test: /\.(stories|story)\.(mdx|jsx)$/,
      use: [
        {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-transform-react-jsx"]
          }
        }
      ]
    },
    {
      test: /\.(stories|story)\.mdx$/,
      use: [
        {
          loader: "@mdx-js/loader",
          options: {
            compilers: [createCompiler({})]
          }
        }
      ]
    },
    {
      test: /\.(stories|story)\.jsx?$/,
      loader: require.resolve("@storybook/source-loader"),
      exclude: [/node_modules/],
      enforce: "pre"
    }
  ];
};

const buildConfig = config => {
  config = mergeConfigRules(config, getProjectConfigRules());
  config = mergeConfigRules(config, getDocsConfigRules());

  return config;
};

module.exports = {
  stories: ["../src/**/*.stories.jsx"],
  webpackFinal: async config => {
    return buildConfig(config);
  },
  addons: [
    "@storybook/addon-controls",
    "storybook-addon-themes",
    "@storybook/addon-a11y",
    "storybook-addon-performance/register"
  ]
};
