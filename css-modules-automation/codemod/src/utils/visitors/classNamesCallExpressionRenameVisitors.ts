import { Visitor } from "@babel/core";
import { NodePath } from "@babel/traverse";
import * as t from "@babel/types";
import { State } from "../../index";
import { CX_NAMES_CLASSNAMES, isCxCallExpression } from "../logical/isCxCallExpression";
import { renameClassnamesToCxCallExpression } from "../wrapWithCxCallExpression";

/**
 * 4*: Rename all classNames(...) occurrences to cx(...)
 */
export const classNamesCallExpressionRenameVisitors: Visitor<State> = {
  CallExpression: (path: NodePath<t.CallExpression>) => {
    if (isCxCallExpression(path.node, CX_NAMES_CLASSNAMES)) {
      const newPath: t.CallExpression = renameClassnamesToCxCallExpression(path.node as t.CallExpression);
      path.replaceWith(newPath);
      return;
    }
  }
};
