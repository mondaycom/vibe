module.exports = {
  customSyntax: require.resolve("postcss-scss"),
  plugins: ["./rules/use-defined-css-var-when-available/index.js"],
  rules: {
    "monday-ui-style/use-defined-css-var-when-available": true,
  },
};
