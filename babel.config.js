module.exports = api => {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          modules: "commonjs",
          targets: {
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
      "react-docgen"
    ],
    env: {
      test: {
        plugins: ["@babel/plugin-transform-modules-commonjs"],
        presets: [
          [
            "@babel/preset-env",
            {
              modules: "commonjs",
              targets: {
                node: "current"
              }
            }
          ],
          "@babel/preset-react"
        ]
      }
    }
  };
}
