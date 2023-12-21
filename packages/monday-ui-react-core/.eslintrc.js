const packageSpecificRules = {
  "react/button-has-type": "error",
  "@typescript-eslint/no-explicit-any": "warn",
  "lodash/import-scope": [2, "member"],
  "jsx-a11y/anchor-is-valid": ["error"],
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
  "jsx-a11y/aria-activedescendant-has-tabindex": "error",
  "jsx-a11y/interactive-supports-focus": "error",
  "jsx-a11y/no-noninteractive-tabindex": "error"
};
const packageSpecificPlugins = ["lodash", "jsx-a11y"];
const packageSpecificExtends = [];

module.exports = {
  extends: ["../../.eslintrc.js", ...packageSpecificExtends],
  plugins: [...packageSpecificPlugins],
  rules: {
    ...packageSpecificRules
  }
};
