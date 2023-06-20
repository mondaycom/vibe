import * as t from "@babel/types";
import { printAlways } from "../commonProcess/print";

/**
 * Returns member expression string representation
 * @param node MemberExpression node
 */
export const buildStringFromMemberExpression = (node: t.MemberExpression): string | undefined => {
  let res: string | undefined;
  if (node.object.type === "Identifier") {
    res = `${node.object.name}`;
    if (node.property.type === "Identifier") {
      res += `.${node.property.name}`;
    } else if (node.property.type === "StringLiteral") {
      res += `["${node.property.value}"]`;
    }
  }

  if (!res) {
    printAlways("... buildStringFromMemberExpression, empty ewsult string for node", node);
  }
  return res;
};
