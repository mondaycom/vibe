import * as t from "@babel/types";
import { printWithCondition } from "../commonProcess/print";

/**
 * Returns call expression string representation
 * @param node CallExpression node
 */
export const buildStringFromCallExpression = (node: t.CallExpression): string | undefined => {
  let res: string | undefined;
  if (node.callee.type === "Identifier") {
    printWithCondition(false, "... buildStringFromCallExpression, node.arguments", node.arguments);
    const argumentsString = node.arguments
      .map(a => {
        if (a.type === "Identifier") {
          return a.name;
        }
        if (a.type === "StringLiteral") {
          return `"${a.value}"`;
        }
      })
      .join(", ");
    res = `${node.callee.name}(${argumentsString})`;
  }
  return res;
};
