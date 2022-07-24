import { NodePath } from "@babel/traverse";
import { printWithCondition } from "./print";

/**
 * Returns true for cx(...) expression
 * @param node
 */
export const isCxCallExpression = (path: NodePath) => {
  const res = path.isCallExpression() && path.node.callee.type === "Identifier" && path.node.callee.name === "cx";
  printWithCondition(false, "@@@ isCxCallExpression, res, path", res, path);
  return res;
};
