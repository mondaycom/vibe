import * as t from "@babel/types";
import { printWithCondition } from "../print";

/**
 * Returns true for cx(...) expression
 * @param node node
 */
export const isCxCallExpression = (node: t.Node) => {
  const res = t.isCallExpression(node) && node.callee.type === "Identifier" && node.callee.name === "cx";
  printWithCondition(false, "@@@ isCxCallExpression, res, node", res, node);
  return res;
};
