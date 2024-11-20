const defaultPlugins = ["prettier"];
const defaultExtends = ["eslint:recommended", "plugin:prettier/recommended"];
const defaultRules = {
  "prettier/prettier": "error"
};

const commonJsPlugins = defaultPlugins;
const commonJsExtends = defaultExtends;
const commonJsRules = {
  ...defaultRules,
  "no-unused-vars": ["error", { argsIgnorePattern: "^_" }]
};

const commonTsPlugins = [...defaultPlugins, "@typescript-eslint"];
const commonTsExtends = [...defaultExtends, "plugin:@typescript-eslint/recommended"];
const commonTsRules = {
  ...defaultRules,
  "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  "@typescript-eslint/no-explicit-any": "warn"
};

module.exports = {
  ignorePatterns: ["node_modules", "dist"],
  parserOptions: {
    sourceType: "module"
  },
  env: {
    es2021: true,
    node: true
  },
  overrides: [
    {
      files: ["**/*.js"],
      extends: commonJsExtends,
      plugins: commonJsPlugins,
      rules: commonJsRules
    },
    {
      files: ["**/*.ts"],
      parser: "@typescript-eslint/parser",
      plugins: commonTsPlugins,
      extends: commonTsExtends,
      rules: commonTsRules
    },
    {
      files: ["./__tests__/*.test.js"],
      plugins: [...commonJsPlugins, "playwright"],
      extends: [...commonJsExtends, "plugin:playwright/recommended"],
      rules: commonJsRules
    },
    {
      files: ["./__tests__/*.test.ts"],
      parser: "@typescript-eslint/parser",
      plugins: [...commonTsPlugins, "playwright"],
      extends: [...commonTsExtends, "plugin:playwright/recommended"],
      rules: commonTsRules
    }
  ]
};
