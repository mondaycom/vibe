import { Visitor } from "@babel/core";
import { NodePath } from "@babel/traverse";
import * as t from "@babel/types";
import { printWithCondition } from "../commonProcess/print";
import { State } from "../../index";

/**
 * 5: Wrap cssBaseClass usages with template literal
 */
export const baseClassIdentifiersReplacementVisitors: Visitor<State> = {
  Identifier: (path: NodePath<t.Identifier>, state) => {
    const variableName = path.node.name;
    if (variableName && variableName === state.baseCssClass?.variableName) {
      // Skip variable declaration and templateLiterals
      if (t.isVariableDeclarator(path.parent) || t.isTemplateLiteral(path.parent)) {
        return;
      }

      printWithCondition(false, "___ baseClassIdentifiersReplacementVisitors, variableName", variableName);
      printWithCondition(false, "___ baseClassIdentifiersReplacementVisitors, path.parent", path.parent);

      let start = 0;
      const quasis: t.TemplateElement[] = [{ ...t.templateElement({ raw: "", cooked: "" }, false), start: ++start }];
      const expressions: (t.Expression | t.TSType)[] = [{ ...t.identifier(path.node.name), start: start }];
      quasis.push({ ...t.templateElement({ raw: "", cooked: "" }, true), start: ++start });
      path.replaceWith(t.templateLiteral(quasis, expressions));
    }
  }
};
