import * as t from "@babel/types";
import { NodePath } from "@babel/traverse";
import { printWithCondition } from "./print";

/**
 * Adds cx(...) wrapper to the classNames
 * @param path Path to parrent JSXAttribute nodde
 */
export const wrapWithCxCallExpression = (
  path: NodePath<t.Node> & NodePath<t.JSXExpressionContainer>
): t.CallExpression => {
  printWithCondition(true, "%%% wrapWithCxCallExpression, path", path);
  const node = path.node as t.JSXExpressionContainer;
  const nodeExpressionValue = node.expression as t.StringLiteral;
  printWithCondition(true, "%%% wrapWithCxCallExpression, nodeExpressionValue", nodeExpressionValue);

  const res = t.callExpression(t.identifier("cx"), [nodeExpressionValue]);

  printWithCondition(true, "%%% wrapWithCxCallExpression, res", res);
  return res;
};

export const renameClassnamesToCxCallExpression = (
  path: NodePath<t.Node> & NodePath<t.CallExpression>
): t.CallExpression => {
  const node = path.node as t.CallExpression;
  const res = t.callExpression(t.identifier("cx"), [...node.arguments]);
  printWithCondition(true, "%%% wrapWithCxCallExpression, renameClassnamesToCxCallExpression, res", res);
  return res;
};
