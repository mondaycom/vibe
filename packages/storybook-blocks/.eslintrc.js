const commonRules = {
  'react/display-name': 'off',
  'object-curly-newline': 'off',
  'no-debugger': 'error',
  'global-require': 'off',
  'no-unused-expressions': 'off',
  'react/forbid-foreign-prop-types': 'off',
  'no-console': 'off',
  'consistent-return': 'off',
  'no-use-before-define': 'off',
  'one-var': 'off',
  'default-case': 'off',
  'func-names': 'off',
  'react/sort-comp': 'off',
  'class-methods-use-this': 'off',
  radix: 'off',
  'no-underscore-dangle': 'off',
  'import/prefer-default-export': 'off',
  'no-plusplus': 'off',
  'react/react-in-jsx-scope': 0,
  'react/no-danger': 'error',
  'react/jsx-one-expression-per-line': 'off',
  'react/prop-types': 0,
  'react/forbid-prop-types': 'off',
  'react/function-component-definition': 'off',
  'default-param-last': 'off',
  'react/require-default-props': ['error'],
  'react/jsx-props-no-spreading': 0,
  'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
  'react/default-props-match-prop-types': 'error',
  'react/jsx-boolean-value': 'off',
  'arrow-parens': 'off',
  'implicit-arrow-linebreak': 'off',
  'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
};
const commonPlugins = ['import', 'react', 'json', 'markdown', 'jest'];
const commonExtends = ['plugin:react/recommended', 'plugin:prettier/recommended', 'plugin:storybook/recommended'];

module.exports = {
  overrides: [
    {
      files: ['*.test.js', 'jest.init.js'],
      env: {
        jest: true,
        'jest/globals': true,
      },
    },
    {
      files: ['.eslintrc.js', 'scripts/**/*.js', '__mocks__/**/*.js', 'rollup.config.js'],
      env: {
        node: true,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        ...commonExtends,
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      plugins: [...commonPlugins, '@typescript-eslint'],
      rules: {
        ...commonRules,
        '@typescript-eslint/ban-ts-comment': ['warn'],
        'no-unused-vars': 'off',
        'react/require-default-props': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
  ],
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    jest: {
      version: 29,
    },
    react: {
      version: 'detect',
    },
  },
  extends: [...commonExtends, 'eslint:recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [...commonPlugins],
  rules: {
    ...commonRules,
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
};
