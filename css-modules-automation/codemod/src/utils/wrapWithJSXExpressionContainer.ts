import * as t from "@babel/types";
import { NodePath } from "@babel/traverse";

export const wrapWithJSXExpressionContainer = (path: NodePath) => {
  const literalNode = path.node as t.StringLiteral;
  const node = literalNode.value as any as t.Node;
  // @ts-ignore
  const stringValue: string = node["value"];
  const res = t.jsxExpressionContainer(t.stringLiteral(stringValue));
  return res;
};
