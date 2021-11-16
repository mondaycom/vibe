const { testing } = process.env;
const TESTING_STORYBOOK = testing === "storybook";
module.exports = api => {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          modules: "commonjs",
          targets: TESTING_STORYBOOK
            ? {
                node: "current"
              }
            : {
                chrome: "49",
                ie: "11",
                firefox: "51",
                edge: "14"
              }
        }
      ],
      "@babel/preset-react"
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
