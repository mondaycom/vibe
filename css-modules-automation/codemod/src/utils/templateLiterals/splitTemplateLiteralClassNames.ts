import * as t from "@babel/types";
import { printWithCondition } from "../commonProcess/print";
import { isTemplateLiteralNeedToBeSplit } from "../logical/isTemplateLiteralNeedToBeSplit";
import { createTemplateLiteralFromString } from "./createTemplateLiteralFromString";
import { createStringFromTemplateLiteral } from "./createStringFromTemplateLiteral";

/**
 * Split className={cx(`1 2-${type} 3`)} into className={cx("1", `2-${type}`, "3")}
 * @param node - CallExpression
 */
export const splitTemplateLiteralClassNames = (node: t.CallExpression): t.CallExpression => {
  const newArguments: (t.Expression | t.SpreadElement | t.JSXNamespacedName | t.ArgumentPlaceholder)[] = [];
  node.arguments.forEach(a => {
    if (t.isTemplateLiteral(a) && isTemplateLiteralNeedToBeSplit(a)) {
      const stringTemplateLiteral = createStringFromTemplateLiteral(a);

      if (stringTemplateLiteral.includes(" ")) {
        const spaceParts = stringTemplateLiteral.split(" ");
        printWithCondition(false, "^^^ splitTemplateLiteralClassNames, stringTemplateLiteral", stringTemplateLiteral);
        spaceParts.forEach(sp => {
          if (sp.includes("${")) {
            newArguments.push(createTemplateLiteralFromString(sp));
          } else {
            newArguments.push(t.stringLiteral(sp));
          }
        });
      }
    } else {
      newArguments.push(a);
    }
  });
  const nodeCallee = node.callee as t.Identifier;
  const res = t.callExpression(nodeCallee, newArguments);
  printWithCondition(false, "^^^ splitTemplateLiteralClassNames, newArguments", newArguments);
  return res;
};
