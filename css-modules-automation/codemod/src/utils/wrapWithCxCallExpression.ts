import * as t from "@babel/types";
import { print } from "./print";

/**
 * Adds cx(...) wrapper to the classNames
 * @param node JSXAttribute node
 */
export const wrapWithCxCallExpression = (node: t.JSXExpressionContainer): t.JSXExpressionContainer => {
  print("%%% wrapWithCxCallExpression, node", node);
  const nodeExpressionValue = node.expression as t.StringLiteral;

  const res = t.jsxExpressionContainer(t.callExpression(t.identifier("cx"), [nodeExpressionValue]));

  print("%%% wrapWithCxCallExpression, res", res);
  return res;
};

/**
 * Replace classnames(...) wrapper with cx(...) wrapper
 * @param node
 */
export const renameClassnamesToCxCallExpression = (node: t.CallExpression): t.JSXExpressionContainer => {
  const res = t.jSXExpressionContainer(t.callExpression(t.identifier("cx"), [...node.arguments]));
  print("%%% wrapWithCxCallExpression, renameClassnamesToCxCallExpression, res", res);
  return res;
};
