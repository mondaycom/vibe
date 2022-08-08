import { Visitor } from "@babel/core";
import { NodePath } from "@babel/traverse";
import * as t from "@babel/types";
import { State } from "../../index";
import { isCxCallExpression } from "../logical/isCxCallExpression";
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
      isCxCallExpression(path.parentPath.parentPath?.parent) &&
      path.parent.key.type === "Identifier" &&
      state.classNames.has(variableName)
    ) {
      printWithCondition(
        true,
        "*** objectPropertyClassnameIdentifiersReplacementVisitors, replaced variableName with stringLiteral - ",
        variableName
      );

      if (!path.parent.shorthand) {
        path.replaceWith(t.stringLiteral(variableName));
      } else {
        path.parentPath.replaceWith(
          t.objectProperty(t.stringLiteral(variableName), t.identifier(variableName), false, false)
        );
      }
    }
  }
};
