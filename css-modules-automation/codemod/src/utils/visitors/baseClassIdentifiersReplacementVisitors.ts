import { Visitor } from "@babel/core";
import { NodePath } from "@babel/traverse";
import * as t from "@babel/types";
import { printWithCondition } from "../commonProcess/print";
import { State } from "../../index";
import { convertClassnameToModular } from "../convertClassnameToModular";
import { isCxCallExpression } from "../logical/isCxCallExpression";
import { embedCxCallExpression } from "../wrapWithCxCallExpression";

/**
 * 5: Replace CSS_BASE_NAME usages with cx(styles.*CSS_BASE_NAME.value*, CSS_BASE_NAME)
 * if CSS_BASE_NAME.value exists at oldClassnames list and do nothing if it doesn't exist there
 */
export const baseClassIdentifiersReplacementVisitors: Visitor<State> = {
  Identifier: (path: NodePath<t.Identifier>, state) => {
    const variableName = path.node.name;
    if (variableName && variableName === state.baseCssClass?.variableName) {
      const variableValue = state.baseCssClass?.value;
      // Skip variable declaration and templateLiterals
      if (t.isVariableDeclarator(path.parent) || t.isTemplateLiteral(path.parent)) {
        return;
      }

      printWithCondition(false, "___ baseClassIdentifiersReplacementVisitors, variableName", variableName);
      printWithCondition(false, "___ baseClassIdentifiersReplacementVisitors, path.parent", path.parent);

      const modularClassnameNode = convertClassnameToModular(
        state.classNames,
        state.opts.importIdentifier,
        variableValue
      );
      printWithCondition(
        false,
        "___ baseClassIdentifiersReplacementVisitors, modularClassnameNode",
        modularClassnameNode
      );

      if (!modularClassnameNode) {
        return;
      }

      if (!isCxCallExpression(path.parent) && t.isJSXExpressionContainer(path.parent)) {
        const newPath = embedCxCallExpression(path.parent);
        path.parentPath.replaceWith(newPath);
        return;
      }

      const insertedPaths = path.replaceInline([modularClassnameNode, t.identifier(variableName)]);
      insertedPaths.forEach(p => {
        p.skip();
        p.getPrevSibling().skip();
      });
    }
  }
};
