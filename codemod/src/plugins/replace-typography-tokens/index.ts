import { Plugin } from "postcss";
import { replaceTokensPlugin } from "../replace-tokens";

const TYPOGRAPHY_TOKENS_INFO = [
  { from: "font-h1", to: "vibe-heading", params: ["h1", "normal"], import: "~monday-ui-style/dist/mixins" },
  { from: "font-h2", to: "vibe-heading", params: ["h2", "normal"], import: "~monday-ui-style/dist/mixins" },
  { from: "font-h3", to: "vibe-heading", params: ["h2", "light"], import: "~monday-ui-style/dist/mixins" },
  { from: "font-h4", to: "vibe-heading", params: ["h3", "normal"], import: "~monday-ui-style/dist/mixins" },
  { from: "font-h5", to: "vibe-text1", params: ["1", "bold"], import: "~monday-ui-style/dist/mixins" },
  { from: "paragraph-h6", to: "vibe-text", params: ["1", "normal"], import: "~monday-ui-style/dist/mixins" },
  { from: "font-general-label", to: "vibe-text", params: ["2", "normal"], import: "~monday-ui-style/dist/mixins" },
  { from: "font-subtext", to: "vibe-text", params: ["2", "normal"], import: "~monday-ui-style/dist/mixins" }
];

const FONT_SIZE_TO_MIXIN = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"]
]);
export const replaceTypographyTokensPlugin: Plugin = {
  postcssPlugin: "replace-typography-tokens",
  Once(root) {
    // If implementation include font declaration token, replace it with the new mixin
    replaceTokensPlugin(root, TYPOGRAPHY_TOKENS_INFO);

    // If implementation use different tokens for font-size, font-family, line-height, font-weight,
  }
};

function replaceSubTokensWithMixin(root) {
  root.walkRules(function (rule) {
    // Iterate over the list of objects
    options.forEach(function (obj) {
      // Check if all mandatory properties exist in the rule
      if (
        obj.props.every(function (prop) {
          return rule.some(function (decl) {
            return decl.prop === prop;
          });
        })
      ) {
        // Check if the values match the specific constants
        if (
          obj.values.some(function (value) {
            return rule.some(function (decl) {
              return decl.value === value;
            });
          })
        ) {
          // Create a new rule
          const newRule = postcss.rule({ selector: rule.selector });

          // Move existing declarations to the new rule
          rule.each(function (decl) {
            newRule.append(decl.clone());
            decl.remove();
          });

          // Add new declaration to the new rule
          newRule.append({ prop: obj.newProp, value: obj.newValue });

          // Insert the new rule after the original rule
          rule.parent.insertAfter(rule, newRule);
        }
      }
    });
  });
}
