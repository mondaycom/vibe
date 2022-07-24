import { NodePath } from "@babel/traverse";
import { print } from "./print";

/**
 * Returns true for cx(...) expression
 * @param path node path
 */
export const isCxCallExpression = (path: NodePath) => {
  const res = path.isCallExpression() && path.node.callee.type === "Identifier" && path.node.callee.name === "cx";
  print("@@@ isCxCallExpression, res, path", res, path);
  return res;
};
