import { Visitor } from "@babel/core";
import { NodePath } from "@babel/traverse";
import * as t from "@babel/types";
import { State } from "../../index";
import { CX_NAMES_ALL, isCxCallExpression } from "../logical/isCxCallExpression";
import { printWithCondition } from "../commonProcess/print";

/**
 * 6: Replace className identifier in objectProperty with stringLiteral
 * classNames={cx(..., {active})} where 'active' exists in oldClassNames and in variables
 */
export const objectPropertyClassnameIdentifiersReplacementVisitors: Visitor<State> = {
  Identifier: (path: NodePath<t.Identifier>, state) => {
    const variableName = path.node.name;
    if (
      t.isObjectProperty(path.parent) &&
      t.isObjectExpression(path.parentPath.parent) &&
      path.parentPath.parentPath?.parent &&
      isCxCallExpression(path.parentPath.parentPath?.parent, CX_NAMES_ALL) &&
      state.classNames.has(variableName)
    ) {
      printWithCondition(
        false,
        "*** objectPropertyClassnameIdentifiersReplacementVisitors, replaced variableName with stringLiteral - ",
        variableName
      );
      path.replaceWith(t.stringLiteral(variableName));
    }
  }
};
