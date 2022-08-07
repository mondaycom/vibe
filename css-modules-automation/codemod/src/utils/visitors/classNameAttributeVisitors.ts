import { Visitor } from "@babel/core";
import * as t from "@babel/types";
import { wrapWithJSXExpressionContainer } from "../wrapWithJSXExpressionContainer";
import {
  renameClassnamesToCxCallExpression,
  wrapStringLiteralWithCxCallExpression,
  wrapWithCxCallExpression
} from "../wrapWithCxCallExpression";
import { CX_NAMES_ALL, CX_NAMES_CLASSNAMES, isCxCallExpression } from "../logical/isCxCallExpression";
import { splitStringLiteralClassNames } from "../splitStringLiteralClassNames";
import { State } from "../../index";
import { classNameReplacementVisitors } from "./classNameReplacementVisitors";
import { printWithCondition } from "../commonProcess/print";

/**
 * 8: These visitors process all JSX `className` attributes and traverses them
 * using the `replacementVisitors`.
 */
export const classNameAttributeVisitors: Visitor<State> = {
  JSXAttribute: (path, state) => {
    const { name } = path.node.name;
    if (name !== "className") {
      return;
    }
    const node = path.node.value;

    // If 'className="..."' then convert to 'className={"..."}'
    if (!t.isJSXExpressionContainer(node) && node?.type === "StringLiteral") {
      // Converting to JSX expression
      const newPath = wrapWithJSXExpressionContainer(path);
      path.replaceWith(t.jsxAttribute(path.node.name, newPath));
      return;
    }

    // If 'className={classnames(...)}' then convert to 'className={cx(...)}'
    if (t.isJSXExpressionContainer(node)) {
      const nodeExpression = node.expression;
      if (isCxCallExpression(nodeExpression, CX_NAMES_CLASSNAMES)) {
        const newPath = renameClassnamesToCxCallExpression(nodeExpression as t.CallExpression);
        path.replaceWith(t.jsxAttribute(path.node.name, newPath));
        return;
      }
    }

    // If 'className={...}' then convert to 'className={cx(...)}'
    if (t.isJSXExpressionContainer(node) && !isCxCallExpression(node.expression)) {
      const newPath = wrapWithCxCallExpression(node);
      path.replaceWith(t.jsxAttribute(path.node.name, newPath));
      return;
    }

    // Split className={cx("1 2 3")} into className={cx("1", "2", "3")}
    if (t.isJSXExpressionContainer(node) && isCxCallExpression(node.expression)) {
      const callExpression = node.expression as t.CallExpression;
      if (callExpression.arguments.some(a => a.type === "StringLiteral" && a.value.includes(" "))) {
        const newPath = splitStringLiteralClassNames(callExpression);
        path.replaceWith(t.jsxAttribute(path.node.name, newPath));
        return;
      }
    }

    // 9: Replace StringLiteral and ObjectProperties classnames inside
    path.traverse(classNameReplacementVisitors, state);
  },
  ObjectProperty: (path, state) => {
    // Replace constructions like {"className": "..."}
    if (
      path.node.key.type === "Identifier" &&
      path.node.key.name === "className" &&
      path.node.value.type === "StringLiteral"
    ) {
      const stringLiteralNode = path.node.value as t.StringLiteral;

      // If 'className={...}' then convert to 'className={cx(...)}'
      if (!isCxCallExpression(path.node) && stringLiteralNode.value) {
        const newPath = wrapStringLiteralWithCxCallExpression(stringLiteralNode);
        path.replaceWith(t.objectProperty(t.identifier("className"), newPath));
        return;
      }

      // Split className={cx("1 2 3")} into className={cx("1", "2", "3")}
      // if (isCxCallExpression(node.expression)) {
      //   const callExpression = node.expression as t.CallExpression;
      //   if (callExpression.arguments.some(a => a.type === "StringLiteral" && a.value.includes(" "))) {
      //     const newPath = splitClassNames(callExpression);
      //     path.replaceWith(t.jsxAttribute(path.node.name, newPath));
      //     return;
      //   }
      // }

      // 9: Replace StringLiteral and ObjectProperties classnames inside
      path.traverse(classNameReplacementVisitors, state);
    }
  },
  CallExpression: (path, state) => {
    // cx(...) expression
    if (isCxCallExpression(path.node, CX_NAMES_ALL)) {
      // But not inside JSXAttribute - cause it's already processed
      if (t.isJSXExpressionContainer(path.parent) && t.isJSXAttribute(path.parentPath.parentPath)) {
        return;
      }
      printWithCondition(
        false,
        "@@@ classNameAttributeVisitors, CX CallExpression, not inside JSX attribute",
        path.node
      );

      // 9: Replace StringLiteral and ObjectProperties classnames inside
      path.traverse(classNameReplacementVisitors, state);
    }
  }
};
