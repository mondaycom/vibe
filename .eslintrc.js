const commonRules = {
  "object-curly-newline": "off",
  "no-debugger": "error",
  "global-require": "off",
  "no-unused-expressions": "off",
  "no-console": "off",
  "consistent-return": "off",
  "no-use-before-define": "off",
  "one-var": "off",
  "default-case": "off",
  "func-names": "off",
  "class-methods-use-this": "off",
  radix: "off",
  "no-underscore-dangle": "off",
  "no-plusplus": "off",
  "arrow-parens": "off",
  "default-param-last": "off",
  "implicit-arrow-linebreak": "off",
  "react/display-name": "off",
  "react/forbid-foreign-prop-types": "off",
  "react/sort-comp": "off",
  "react/react-in-jsx-scope": 0,
  "react/no-danger": "error",
  "react/jsx-one-expression-per-line": "off",
  "react/prop-types": 0,
  "react/forbid-prop-types": "off",
  "react/function-component-definition": "off",
  "react/require-default-props": ["error"],
  "react/jsx-props-no-spreading": 0,
  "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
  "react/default-props-match-prop-types": "error",
  "react/jsx-boolean-value": "off",
  "import/prefer-default-export": "off",
  "import/no-extraneous-dependencies": ["error", { devDependencies: true }]
};

const commonPlugins = ["import", "react", "json", "markdown", "jest"];

const commonExtends = [
  "plugin:react/recommended",
  "plugin:prettier/recommended",
  "plugin:storybook/recommended",
  "plugin:react-hooks/recommended"
];

module.exports = {
  overrides: [
    {
      files: ["*.jest.js", "jest.setup.js", "jest.init.js"],
      env: {
        jest: true,
        "jest/globals": true
      }
    },
    {
      files: [
        "webpack.config.js",
        "plopfile.js",
        "babel.config.js",
        ".eslintrc.js",
        ".prettierrc.js",
        "scripts/**/*.js",
        "webpack/**/*.js",
        "__mocks__/**/*.js",
        "plop/**/*.js",
        "rollup.config.js"
      ],
      env: {
        node: true
      }
    },
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: [
        ...commonExtends,
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
      ],
      plugins: [...commonPlugins, "@typescript-eslint"],
      rules: {
        ...commonRules,
        "no-unused-vars": "off",
        "react/require-default-props": "off",
        "@typescript-eslint/ban-ts-comment": ["warn"],
        "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
        "@typescript-eslint/no-empty-function": "off"
      }
    },
    {
      files: ["*.stories.@(js|jsx|ts|tsx)", "*.stories.helpers.@(js|jsx|ts|tsx)"],
      rules: {
        ...commonRules,
        "react-hooks/rules-of-hooks": "off",
        "react/jsx-key": "off",
        "storybook/no-redundant-story-name": "off" // TODO remove the rule in the future and remove useless stories names
      }
    }
  ],
  env: {
    browser: true,
    es2021: true
  },
  settings: {
    jest: {
      version: 27
    },
    react: {
      version: "detect"
    }
  },
  extends: [...commonExtends, "eslint:recommended"],
  parserOptions: {
    project: ["./packages/*/tsconfig.json"],
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: "module"
  },
  plugins: [...commonPlugins],
  rules: {
    ...commonRules,
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }]
  }
};
