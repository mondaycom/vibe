import { JSXAttribute, JSXExpressionContainer } from "@babel/types";
import { NodePath } from "@babel/traverse";
import { types as t } from "@babel/core";

/**
 * Replace className="..." with className={"..."}
 * @param path Path to parrent JSXAttribute nodde
 */
export const wrapWithJSXExpressionContainer = (path: NodePath<JSXAttribute>): JSXExpressionContainer => {
  const node = path.node.value as t.StringLiteral;
  const stringValue = node.value;
  const res = t.jsxExpressionContainer(t.stringLiteral(stringValue));
  return res;
};
