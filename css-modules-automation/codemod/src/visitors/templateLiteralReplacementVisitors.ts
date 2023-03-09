import { Visitor } from "@babel/core";
import { NodePath } from "@babel/traverse";
import * as t from "@babel/types";
import { print, printWithCondition } from "../utils/commonProcess/print";
import { isClassNameJsxAttribute } from "../utils/logical/isClassNameJsxAttribute";
import { embedCxCallExpression } from "../utils/wrapWithCxCallExpression";
import { isCxCallExpression } from "../utils/logical/isCxCallExpression";
import { State } from "../index";
import { isTemplateLiteralNeedToBeSplit } from "../utils/logical/isTemplateLiteralNeedToBeSplit";
import { buildClassnameStringFromTemplateLiteral } from "../utils/templateLiterals/buildClassnameStringFromTemplateLiteral";
import { splitTemplateLiteralClassNames } from "../utils/templateLiterals/splitTemplateLiteralClassNames";

/**
 * 7: These visitors replace classNames inside template strings e.g. `monday-style-avatar_circle--${type}`
 * with `styles[`${camelCase("mondayStyleAvatarCircle"+type)}`]`
 */
export const templateLiteralReplacementVisitors: Visitor<State> = {
  TemplateLiteral: (path: NodePath<t.TemplateLiteral>, state) => {
    printWithCondition(false, "### templateLiteralReplacementVisitors, path.node", path.node);
    printWithCondition(false, "### templateLiteralReplacementVisitors, path.parent", path.parent);

    // TODO or const declaration
    if (
      (path.parentPath.parentPath && isClassNameJsxAttribute(path.parentPath.parentPath)) ||
      isCxCallExpression(path.parent)
    ) {
      // If 'className={...}' then convert to 'className={cx(...)}'
      if (t.isJSXExpressionContainer(path.parent) && !isCxCallExpression(path.parent.expression)) {
        const newPath = embedCxCallExpression(path.parent);
        path.parentPath.replaceWith(newPath);
        printWithCondition(false, "### templateLiteralReplacementVisitors, wrappedWithCxCallExpression");
        return;
      }

      // Split className={cx(`1 2-${type} 3`)} into className={cx("1", `2-${type}`, "3")}
      if (isCxCallExpression(path.parent) && isTemplateLiteralNeedToBeSplit(path.node)) {
        const callExpression = path.parent as t.CallExpression;
        if (callExpression.arguments.some(a => a.type === "TemplateLiteral")) {
          const newPath = splitTemplateLiteralClassNames(callExpression);
          printWithCondition(
            false,
            "### templateLiteralReplacementVisitors, splitTemplateLiteralClassNames, newPath",
            newPath
          );
          path.parentPath.replaceWith(newPath);
          return;
        }
      }
    }

    const modularClassnameString = buildClassnameStringFromTemplateLiteral(path.node, state);
    printWithCondition(
      false,
      "### templateLiteralReplacementVisitors, modularClassnameString = ",
      modularClassnameString
    );
    const modularClassnameNode =
      modularClassnameString.includes("+") || modularClassnameString.includes("${")
        ? t.identifier(modularClassnameString)
        : t.stringLiteral(modularClassnameString);
    const isModularClassnameNodeIdentifier = t.isIdentifier(modularClassnameNode);

    if (isCxCallExpression(path.parent)) {
      if (isModularClassnameNodeIdentifier) {
        const newPath = t.callExpression(t.identifier("getStyle"), [
          t.identifier(state.opts.importIdentifier),
          modularClassnameNode
        ]);
        printWithCondition(
          false,
          "### templateLiteralReplacementVisitors, modularClassnameString",
          modularClassnameString
        );

        const insertedPaths = path.replaceInline([newPath, t.templateLiteral(path.node.quasis, path.node.expressions)]);
        insertedPaths.forEach(p => {
          p.skip();
          p.getPrevSibling().skip();
        });

        printWithCondition(false, "### templateLiteralReplacementVisitors, replaced with newPath", newPath);

        state.camelCaseImportNeeded = true;
        state.getStyleImportNeeded = true;
      } else {
        path.replaceWith(modularClassnameNode);
      }
    }

    if (t.isObjectProperty(path.parent)) {
      printWithCondition(
        true,
        "### templateLiteralReplacementVisitors, isObjectProperty, parentNode.value = ",
        path.parent.value
      );
      if (isModularClassnameNodeIdentifier) {
        const parentNode = path.parentPath.node as t.ObjectProperty;

        printWithCondition(
          false,
          "### templateLiteralReplacementVisitors, isObjectProperty, parentNode.value = ",
          parentNode.value
        );

        const getStyleExpression = t.callExpression(t.identifier("getStyle"), [
          t.identifier(state.opts.importIdentifier),
          modularClassnameNode
        ]);

        printWithCondition(
          false,
          "### templateLiteralReplacementVisitors, path.getAllNextSiblings",
          path.getAllNextSiblings()
        );
        printWithCondition(false, "### templateLiteralReplacementVisitors, getStyleExpression", getStyleExpression);

        const prevSibling = path.getPrevSibling();
        if (
          prevSibling &&
          t.isCallExpression(prevSibling.node) &&
          prevSibling.node.callee === getStyleExpression.callee &&
          prevSibling.node.arguments === getStyleExpression.arguments
        ) {
          printWithCondition(false, "### templateLiteralReplacementVisitors, prev sibling is equal!!!");
          return;
        }

        const insertedPaths = path.parentPath.replaceInline([
          t.objectProperty(getStyleExpression, parentNode.value, true, false),
          t.objectProperty(t.templateLiteral(path.node.quasis, path.node.expressions), parentNode.value, true, false)
        ]);
        printWithCondition(
          false,
          "### templateLiteralReplacementVisitors, isObjectProperty, insertedPaths = ",
          insertedPaths
        );
        insertedPaths.forEach(p => {
          p.skip();
          p.getPrevSibling().skip();
        });

        state.camelCaseImportNeeded = true;
        state.getStyleImportNeeded = true;
      } else {
        const overrideNewPath = t.objectProperty(modularClassnameNode, path.parent.value, false, false);
        path.parentPath.replaceWith(overrideNewPath);
      }
    }
  }
};
