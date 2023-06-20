import * as t from "@babel/types";
import { printWithCondition } from "./commonProcess/print";

/**
 * Adds cx(...) wrapper to the classNames
 * @param node JSXExpressionContainer node
 */
export const embedCxCallExpression = (node: t.JSXExpressionContainer): t.JSXExpressionContainer => {
  const nodeExpressionValue = node.expression as t.StringLiteral;
  const res = t.jsxExpressionContainer(t.callExpression(t.identifier("cx"), [nodeExpressionValue]));
  printWithCondition(false, "%%% wrapWithCxCallExpression, res", res);
  return res;
};

/**
 * Adds cx(...) wrapper to the classNames
 * @param node t.StringLiteral | t.Identifier node
 */
export const wrapWithCxCallExpression = (node: t.StringLiteral | t.Identifier): t.CallExpression => {
  const res = t.callExpression(t.identifier("cx"), [node]);
  printWithCondition(false, "%%% wrapWithCxCallExpression, res", res);
  return res;
};

/**
 * Replace classnames(...) wrapper with cx(...) wrapper
 * @param node
 */
export const renameClassnamesToCxCallExpression = (node: t.CallExpression): t.CallExpression => {
  const res = t.callExpression(t.identifier("cx"), [...node.arguments]);
  printWithCondition(false, "%%% wrapWithCxCallExpression, renameClassnamesToCxCallExpression, res", res);
  return res;
};
