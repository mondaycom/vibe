import { Visitor } from "@babel/core";
import { NodePath } from "@babel/traverse";
import * as t from "@babel/types";
import { printWithCondition } from "../print";
import { isClassNameJsxAttribute } from "../logical/isClassNameJsxAttribute";
import { renameClassnamesToCxCallExpression, wrapWithCxCallExpression } from "../wrapWithCxCallExpression";
import { isCxCallExpression } from "../logical/isCxCallExpression";
import { buildClassnameStringFromTemplateLiteral } from "../buildClassnameStringFromTemplateLiteral";
import { State } from "../../index";

/**
 * 5: These visitors replace classNames inside template strings e.g. `monday-style-avatar_circle--${type}`
 * with `styles[`${camelCase("mondayStyleAvatarCircle"+type)}`]`
 */
export const templateLiteralReplacementVisitors: Visitor<State> = {
  TemplateLiteral: (path: NodePath<t.TemplateLiteral>, state) => {
    printWithCondition(false, "### templateLiteralReplacementVisitors, path.node", path.node);

    // TODO or const declaration
    if (isClassNameJsxAttribute(path.parentPath.parentPath)) {
      // If 'className={classnames(...)}' then convert to 'className={cx(...)}'
      if (t.isJSXExpressionContainer(path.parent)) {
        const nodeExpression = path.parent.expression;
        if (
          t.isCallExpression(nodeExpression) &&
          nodeExpression.callee.type === "Identifier" &&
          nodeExpression.callee.name.toLowerCase() === "classnames"
        ) {
          const newPath = renameClassnamesToCxCallExpression(nodeExpression);
          path.parentPath.replaceWith(newPath);
          return;
        }
      }

      // If 'className={...}' then convert to 'className={cx(...)}'
      if (t.isJSXExpressionContainer(path.parent) && !isCxCallExpression(path.parent.expression)) {
        const newPath = wrapWithCxCallExpression(path.parent);
        path.parentPath.replaceWith(newPath);
        return;
      }
    }

    if (isCxCallExpression(path.parent)) {
      const newString = buildClassnameStringFromTemplateLiteral(path.node);
      const newPath = t.memberExpression(t.identifier(state.opts.importIdentifier), t.identifier(newString), true);
      printWithCondition(false, "### templateLiteralReplacementVisitors, newString", newString);
      printWithCondition(false, "### templateLiteralReplacementVisitors, path.parent", path.parent);
      printWithCondition(
        false,
        "### templateLiteralReplacementVisitors, isCxCallExpression, path.parentPath.parent",
        path.parentPath.parent
      );

      const insertedPaths = path.replaceInline([newPath, t.templateLiteral(path.node.quasis, path.node.expressions)]);
      insertedPaths.forEach(p => {
        p.skip();
        p.getPrevSibling().skip();
      });

      printWithCondition(false, "### templateLiteralReplacementVisitors, replaced with newPath", newPath);

      state.camelCaseImportNeeded = true;
    } else {
      printWithCondition(
        false,
        "### templateLiteralReplacementVisitors, not processed, path.parentPath",
        path.parentPath
      );
    }
  }
};
