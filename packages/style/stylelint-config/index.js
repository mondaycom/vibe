module.exports = {
  customSyntax: require.resolve("postcss-scss"),
  plugins: ["./rules/use-defined-css-var-when-available/index.js", "./rules/use-new-spacing-tokens/index.js"],
  rules: {
    "monday-ui-style/use-defined-css-var-when-available": true,
    "monday-ui-style/use-new-spacing-tokens": [true, { severity: "warning" }]
  }
};
