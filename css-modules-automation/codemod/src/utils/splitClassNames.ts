import * as t from "@babel/types";
import { print } from "./print";

/**
 * Split className={cx("1 2 3")} into className={cx("1", "2", "3")}
 * @param node - CallExpression
 */
export const splitClassNames = (node: t.CallExpression): t.JSXExpressionContainer => {
  const newArguments: (t.Expression | t.SpreadElement | t.JSXNamespacedName | t.ArgumentPlaceholder)[] = [];
  node.arguments.forEach(a => {
    if (t.isStringLiteral(a) && a.value.trim().includes(" ")) {
      const parts = a.value.trim().split(" ");
      parts.forEach(p => newArguments.push(t.stringLiteral(p)));
    } else {
      newArguments.push(a);
    }
  });
  const nodeCallee = node.callee as t.Identifier;
  const res = t.jsxExpressionContainer(t.callExpression(nodeCallee, newArguments));
  print("^^^ splitClassNames, newArguments", newArguments);
  return res;
};
