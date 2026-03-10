module.exports = {
  customSyntax: require.resolve("postcss-scss"),
  plugins: ["./rules/use-defined-css-var-when-available/index.js", "./rules/use-new-spacing-tokens/index.js"],
  rules: {
    "@ezds/web/use-defined-css-var-when-available": true
  }
};
