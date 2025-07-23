const stylelint = require("stylelint");

const ruleName = "monday-ui-style/use-new-spacing-tokens";
const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected: (_property, value, replacement) =>
    `Use new spacing tokens instead of legacy ones. Replace "${value}" with "${replacement}".`
});

const legacyToNewSpacingMap = {
  "var(--spacing-xs)": "var(--space-4)",
  "var(--spacing-small)": "var(--space-8)",
  "var(--spacing-medium)": "var(--space-16)",
  "var(--spacing-large)": "var(--space-24)",
  "var(--spacing-xl)": "var(--space-32)",
  "var(--spacing-xxl)": "var(--space-48)",
  "var(--spacing-xxxl)": "var(--space-64)"
};

const meta = {
  fixable: true
};

const rule = stylelint.createPlugin(ruleName, (primaryOption, secondaryOptions, context) => {
  return (root, result) => {
    const validOptions = stylelint.utils.validateOptions(result, ruleName, {
      actual: primaryOption,
      possible: [true, false]
    });

    if (!validOptions || primaryOption === false) {
      return;
    }

    root.walkDecls(decl => {
      const { prop, value } = decl;
      let hasLegacyTokens = false;
      let newValue = value;

      // Check for legacy spacing tokens in the value
      Object.keys(legacyToNewSpacingMap).forEach(legacyToken => {
        if (value.includes(legacyToken)) {
          hasLegacyTokens = true;
          newValue = newValue.replace(
            new RegExp(legacyToken.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
            legacyToNewSpacingMap[legacyToken]
          );
        }
      });

      if (hasLegacyTokens) {
        // Support for deprecated context.fix approach (backward compatibility)
        if (context && context.fix) {
          decl.value = newValue;
          return;
        }

        // Modern fix callback approach (fix())
        stylelint.utils.report({
          result,
          ruleName,
          message: messages.rejected(prop, value, newValue),
          node: decl,
          fix: () => {
            decl.value = newValue;
          }
        });
      }
    });
  };
});

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;

module.exports = rule;
