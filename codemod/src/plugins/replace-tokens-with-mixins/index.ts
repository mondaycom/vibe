import * as postcss from "postcss";
import { addImportsIfNeeded } from "../add-imports-if-needed";

type ConversionSet = { from: string; to: string; params: string[]; importStatement: string };
type ReplaceTokensParameters = ConversionSet[];

export const replaceTokensWithMixins = (root: postcss.Root, params: ReplaceTokensParameters) => {
  root.walkDecls((declaration: postcss.Declaration) => {
    const importsToAdd: string[] = [];

    for (const { from, to, importStatement } of params) {
      if (declaration.value.includes(`var(--${from})`)) {
        if (importsToAdd.indexOf(importStatement) < 0) {
          importsToAdd.push(importStatement);
        }

        const newDeclaration = postcss.decl({
          prop: "",
          value: `@include ${to}(${params.join(", ")});`
        });
        declaration.replaceWith(newDeclaration);
      }
    }

    addImportsIfNeeded(root, importsToAdd);
  });
};
