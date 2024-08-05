module.exports = api => {
  const env = process.env.NODE_ENV;
  api.cache.using(() => env);

  const plugins = [
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
    "transform-react-remove-prop-types"
  ].filter(Boolean);

  return {
    env: {
      test: {
        plugins: ["@babel/plugin-transform-runtime"]
      }
    },
    presets: [
      [
        "@babel/preset-env",
        {
          modules: env === "test" ? "commonjs" : false
        }
      ],
      "@babel/preset-typescript",
      "@babel/preset-react"
    ],
    plugins
  };
};
