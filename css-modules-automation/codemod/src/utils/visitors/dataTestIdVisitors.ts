import { Visitor } from "@babel/core";
import * as t from "@babel/types";
import { State } from "../../index";
import { printWithCondition } from "../commonProcess/print";
import { convertFileNameToUpperCase } from "../convertFileNameToUpperCase";

/**
 * 11. Replace data-testid attributes, added by babel-plugin-react-data-testid
 */
export const dataTestIdVisitors: Visitor<State> = {
  JSXAttribute: (path, state) => {
    // @ts-ignore
    const filename = path.hub.file.opts.filename;
    const { name } = path.node.name;

    if (name !== "data-testid") {
      return;
    }
    const node = path.node.value;

    printWithCondition(true, "::: dataTestIdVisitors, path.node", path.node);

    if (!t.isJSXExpressionContainer(node) && node?.type === "StringLiteral") {
      const newPath = t.binaryExpression(
        "|",
        t.identifier("dataTestId"),
        t.callExpression(t.identifier("getTestId"), [
          t.memberExpression(t.identifier("ELEMENT_TYPES"), t.identifier(convertFileNameToUpperCase(filename)))
        ])
      );
      path.replaceWith(t.jsxAttribute(path.node.name, t.jsxExpressionContainer(newPath)));
    }
  }
};
