import * as t from "@babel/types";
import { printWithCondition } from "../print";

/**
 * Returns true for cx(...) expression
 * @param node node
 * @param validFunctionNames ['cx', 'classNames']...
 */
export const isCxCallExpression = (node: t.Node, validFunctionNames: string[] = ["cx"]) => {
  const res =
    t.isCallExpression(node) && node.callee.type === "Identifier" && validFunctionNames.includes(node.callee.name);
  printWithCondition(false, "@@@ isCxCallExpression, res, node", res, node);
  return res;
};
