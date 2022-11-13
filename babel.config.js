const { testing } = process.env;
const TESTING_STORYBOOK = testing === "storybook";
module.exports = api => {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    env: {
      test: {
        plugins: ["@babel/plugin-transform-runtime"]
      }
    },
    presets: [
      "@babel/preset-react",
      [
        "@babel/preset-env",
        {
          modules: false,
          targets: TESTING_STORYBOOK
            ? {
                node: "current"
              }
            : {
                chrome: "66",
                ie: "11",
                firefox: "51",
                edge: "18",
                node: "current"
              }
        }
      ]
    ],
    plugins: [
      "react-require",
      [
        "@babel/plugin-proposal-class-properties",
        {
          loose: true
        }
      ],
      [
        "@babel/plugin-proposal-private-methods",
        {
          loose: true
        }
      ],
      [
        "@babel/plugin-proposal-private-property-in-object",
        {
          loose: true
        }
      ],
      "react-docgen"
    ]
  };
};
