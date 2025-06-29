const commonRules = {
  "react/display-name": "off",
  "object-curly-newline": "off",
  "no-debugger": "error",
  "global-require": "off",
  "no-unused-expressions": "off",
  "react/forbid-foreign-prop-types": "off",
  "no-console": "off",
  "consistent-return": "off",
  "no-use-before-define": "off",
  "one-var": "off",
  "default-case": "off",
  "func-names": "off",
  "react/sort-comp": "off",
  "class-methods-use-this": "off",
  radix: "off",
  "no-underscore-dangle": "off",
  "import/prefer-default-export": "off",
  "no-plusplus": "off",
  "react/react-in-jsx-scope": "error",
  "react/no-danger": "error",
  "react/jsx-one-expression-per-line": "off",
  "react/prop-types": 0,
  "react/forbid-prop-types": "off",
  "react/function-component-definition": "off",
  "default-param-last": "off",
  "react/require-default-props": ["error"],
  "jsx-a11y/anchor-is-valid": ["error"],
  "react/jsx-props-no-spreading": 0,
  "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
  "jsx-a11y/no-static-element-interactions": "off",
  "jsx-a11y/alt-text": "error",
  "jsx-a11y/no-noninteractive-element-interactions": [
    "error",
    {
      required: {
        some: ["nesting", "id"]
      },
      handlers: ["onClick", "onMouseDown", "onMouseUp", "onKeyPress", "onKeyDown", "onKeyUp"]
    }
  ],
  "jsx-a11y/role-has-required-aria-props": "error",
  "jsx-a11y/click-events-have-key-events": "error",
  "jsx-a11y/label-has-associated-control": "off",
  "react/default-props-match-prop-types": "error",
  "jsx-a11y/aria-activedescendant-has-tabindex": "error",
  "react/button-has-type": "error",
  "jsx-a11y/interactive-supports-focus": "error",
  "jsx-a11y/no-noninteractive-tabindex": "error",
  "react/jsx-boolean-value": "off",
  "arrow-parens": "off",
  "lodash/import-scope": [2, "member"],
  "implicit-arrow-linebreak": "off",
  "import/no-extraneous-dependencies": [
    "error",
    {
      devDependencies: [
        "src/scripts/**/*.ts",
        "src/storybook/**/*",
        "**/__tests__/**/*.{js,jsx,ts,tsx}",
        "**/__stories__/**/*.{js,jsx,ts,tsx}",
        "**/*.test.{js,jsx,ts,tsx}",
        "**/*.spec.{js,jsx,ts,tsx}",
        "**/*.snapshot.test.{js,jsx,ts,tsx}",
        "src/tests/**/*.{js,jsx,ts,tsx}",
        "vitest.config.ts"
      ]
    }
  ]
};
const commonPlugins = ["import", "lodash", "react", "jsx-a11y", "json", "markdown", "vitest"];
const commonExtends = [
  "plugin:react/recommended",
  "plugin:react-hooks/recommended",
  "plugin:prettier/recommended",
  "plugin:vitest/recommended"
];

module.exports = {
  overrides: [
    {
      files: ["*.test.js"]
    },
    {
      files: [
        "plopfile.js",
        "babel.config.js",
        ".eslintrc.js",
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
        "@typescript-eslint/ban-ts-comment": ["warn"],
        "no-unused-vars": "off",
        "react/require-default-props": "off",
        "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
        "@typescript-eslint/no-empty-function": "off"
      }
    },
    {
      files: ["*.stories.@(js|jsx)", "*.stories.helpers.@(js|jsx)", "src/storybook/decorators/**/with*.{js,jsx}"],
      rules: {
        ...commonRules,
        "react-hooks/rules-of-hooks": "off",
        "react/jsx-key": "off"
      }
    },
    {
      files: ["*.stories.@(ts|tsx)", "*.stories.helpers.@(ts|tsx)", "src/storybook/decorators/**/with*.{ts,tsx}"],
      rules: {
        ...commonRules,
        "react-hooks/rules-of-hooks": "off",
        "react/jsx-key": "off",
        "react/require-default-props": "off"
      }
    }
  ],
  env: {
    browser: true,
    es2021: true
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  extends: [...commonExtends, "eslint:recommended"],
  parserOptions: {
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
