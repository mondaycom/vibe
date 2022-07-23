import { JSXAttribute, JSXExpressionContainer } from "@babel/types";
import { NodePath } from "@babel/traverse";
import { types as t } from "@babel/core";

/**
 * Replace className="..." with className={"..."}
 * @param path Path to parrent JSXAttribute nodde
 */
export const wrapWithJSXExpressionContainer = (path: NodePath<JSXAttribute>): JSXExpressionContainer | JSXAttribute => {
  if (path.node.value?.type === "StringLiteral") {
    const stringValue = path.node.value["value"];
    const res = t.jsxExpressionContainer(t.stringLiteral(stringValue));
    return res;
  } else {
    return path.node;
  }
};
