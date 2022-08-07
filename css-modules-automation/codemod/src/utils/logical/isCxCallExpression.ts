import * as t from "@babel/types";
import { printWithCondition } from "../commonProcess/print";

export const CX_NAMES_CX = ["cx"];
export const CX_NAMES_ALL = ["cx", "classNames", "classnames"];
export const CX_NAMES_CLASSNAMES = ["classNames", "classnames"];

/**
 * Returns true for cx(...) expression
 * @param node node
 * @param validFunctionNames ['cx', 'classNames']...
 */
export const isCxCallExpression = (node: t.Node, validFunctionNames: string[] = CX_NAMES_CX) => {
  const res =
    t.isCallExpression(node) && node.callee.type === "Identifier" && validFunctionNames.includes(node.callee.name);
  printWithCondition(false, "@@@ isCxCallExpression, res, node", res, node);
  return res;
};
