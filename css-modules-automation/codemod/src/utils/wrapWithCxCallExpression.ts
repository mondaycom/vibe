import * as t from "@babel/types";
import { NodePath } from "@babel/traverse";
import { print } from "./print";

/**
 * Adds cx(...) wrapper to the classNames
 * @param path Path to parrent JSXAttribute node
 */
export const wrapWithCxCallExpression = (
  path: NodePath<t.Node> & NodePath<t.JSXExpressionContainer>
): t.CallExpression => {
  print("%%% wrapWithCxCallExpression, path", path);
  const node = path.node as t.JSXExpressionContainer;
  const nodeExpressionValue = node.expression as t.StringLiteral;

  const res = t.callExpression(t.identifier("cx"), [nodeExpressionValue]);

  print("%%% wrapWithCxCallExpression, res", res);
  return res;
};

/**
 * Replace classnames(...) wrapper with cx(...) wrapper
 * @param path node path
 */
export const renameClassnamesToCxCallExpression = (
  path: NodePath<t.Node> & NodePath<t.CallExpression>
): t.CallExpression => {
  const node = path.node as t.CallExpression;
  const res = t.callExpression(t.identifier("cx"), [...node.arguments]);
  print("%%% wrapWithCxCallExpression, renameClassnamesToCxCallExpression, res", res);
  return res;
};
