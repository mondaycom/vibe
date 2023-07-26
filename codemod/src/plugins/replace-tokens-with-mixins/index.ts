import * as postcss from "postcss";
import { addImportsIfNeeded } from "../add-imports-if-needed";

type ConversionSet = { from: string; to: string; params: string[]; importStatement: string };
type ReplaceTokensParameters = ConversionSet[];

export const replaceTokensWithMixins = (root: postcss.Root, params: ReplaceTokensParameters) => {
  const importsToAdd: string[] = [];
  root.walkRules((rule: postcss.Rule) => {
    rule.walkDecls((declaration: postcss.Declaration) => {
      for (const { from, to, importStatement, params: parameters } of params) {
        if (declaration.value.includes(`var(--${from})`)) {
          if (importsToAdd.indexOf(importStatement) < 0) {
            importsToAdd.push(importStatement);
          }

          // Create a new PostCSS at-rule containing the mixin include
          const mixinInclude = postcss.atRule({
            name: "include",
            params: `${to}(${parameters.join(", ")})`
          });

          // Add the mixin include as a child of the rule
          rule.append(mixinInclude);
          declaration.remove();
        }
      }
    });
  });
  addImportsIfNeeded(root, importsToAdd);
};
