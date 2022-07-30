import { JSXAttribute, JSXExpressionContainer } from "@babel/types";
import { NodePath } from "@babel/traverse";
import { types as t } from "@babel/core";
import { printWithCondition } from "./print";

/**
 * Replace className="..." with className={"..."}
 * @param path Path to parrent JSXAttribute nodde
 */
export const wrapWithJSXExpressionContainer = (path: NodePath<JSXAttribute>): JSXExpressionContainer => {
  const node = path.node.value as t.StringLiteral;
  const stringValue = node.value;
  const res = t.jsxExpressionContainer(t.stringLiteral(stringValue));
  printWithCondition(false, "$$$ wrapWithJSXExpressionContainer, classname stringValue", stringValue);
  return res;
};
