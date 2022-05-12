const stylelint = require("stylelint");
const valueParser = require("postcss-value-parser");
const { getPropsToAllowedCssVars } = require("./parse-monday-css");

const { report, ruleMessages, validateOptions } = stylelint.utils;

const RULE_NAME = "monday-ui-style/use-defined-css-var-when-available";
const CONFIGS_THAT_MEAN_IGNORE_FILE = ["disabled", "disable", "off", "0"];

const messages = ruleMessages(RULE_NAME, {
  expected: (original, expected) => {
    const asArray = Array.isArray(expected) ? expected : [expected];
    const multipleValues = asArray.length > 1;
    const expectedMsg = multipleValues ? `one of vars: \n${asArray.join("\n")}\n` : `"var(${asArray[0]})"`;
    return `Expected "${original}" to be ${expectedMsg}`;
  },
});

module.exports = stylelint.createPlugin(RULE_NAME, (primaryOption, secondaryOptionObject, context) => {
  const propsToAllowedCssVars = getPropsToAllowedCssVars();

  return function lint(postcssRoot, postcssResult) {
    const validOptions = validateOptions(
      postcssResult,
      RULE_NAME,
      {
        actual: primaryOption,
        possible: [...CONFIGS_THAT_MEAN_IGNORE_FILE, true, "true"],
        optional: true,
      },
      {
        actual: secondaryOptionObject && secondaryOptionObject.useRecommendedFixes,
        possible: [true, "true", false, "false"],
        optional: true,
      }
    );

    primaryOption = primaryOption || true;
    const shouldNotLint =
      !validOptions || CONFIGS_THAT_MEAN_IGNORE_FILE.includes(primaryOption.toString().toLowerCase());
    if (shouldNotLint) {
      return;
    }

    const isAutoFixing = Boolean(context.fix);
    postcssRoot.walkDecls((decl) => {
      // Iterate CSS declarations

      const valuesToVars = propsToAllowedCssVars[decl.prop];
      if (!valuesToVars) {
        return;
      }

      const parsedValue = valueParser(decl.value);
      parsedValue.walk((node) => {
        // iterate nodes inside values, e.g. "padding: 16px 20px" will have two value nodes: "16px" and "20px"
        if (node.type !== "word") {
          return;
        }

        const { allowedVars: varReplacementsForValue, recommended } = valuesToVars[node.value] || {};

        if (!varReplacementsForValue || !varReplacementsForValue.length) {
          return;
        }
        const hasSingleReplacement = varReplacementsForValue.length === 1;

        const useRecommendedFixes = secondaryOptionObject && secondaryOptionObject.useRecommendedFixes;

        if (isAutoFixing) {
          // We are in “fix” mode
          let replacementVar;
          if (hasSingleReplacement) {
            replacementVar = varReplacementsForValue[0];
          } else if (useRecommendedFixes) {
            replacementVar = recommended;
          } else {
            // we have multiple options, but the user chose not to follow recommendations
            return;
          }
          const replacement = `var(${replacementVar})`;
          const newValue = decl.value.replace(node.value, replacement);
          // Apply the fix. It's not pretty, but that's the way to do it
          if (decl.raws.value) {
            decl.raws.value.raw = newValue;
          } else {
            decl.value = newValue;
          }
        } else {
          // We are in “report only” mode
          report({
            ruleName: RULE_NAME,
            result: postcssResult,
            message: messages.expected(node.value, varReplacementsForValue), // Build the reported message
            node: decl, // Specify the reported node
            word: node.value, // Which exact word caused the error? This positions the error properly
          });
        }
      });
    });
  };
});

module.exports.ruleName = RULE_NAME;
module.exports.messages = messages;
