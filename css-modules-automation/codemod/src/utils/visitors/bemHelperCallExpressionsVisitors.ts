import { Visitor } from "@babel/core";
import { NodePath } from "@babel/traverse";
import * as t from "@babel/types";
import { printWithCondition } from "../print";
import { replaceBemHelperCallExpression } from "../replaceBemHelperCallExpression";
import { State } from "../../index";

/**
 * 4: These visitors process all bemHelpers function calls
 */
export const bemHelperCallExpressionsVisitors: Visitor<State> = {
  CallExpression: (path: NodePath<t.CallExpression>, { classNames }) => {
    if (t.isIdentifier(path.node.callee)) {
      printWithCondition(
        false,
        "=== bemHelperCallExpressionsVisitors, isIdentifier, path.node.callee.name",
        path.node.callee?.name
      );

      // Replace bemHelper(...) functions
      if (path.node.callee?.name === "bemHelper") {
        const newPath = replaceBemHelperCallExpression(classNames, path);
        path.replaceWith(newPath as any);
      }

      // Remove BEMClass function calls
      if (path.node.callee?.name === "BEMClass") {
        path.parentPath.remove();
      }
    }
  }
};
