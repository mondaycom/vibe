import { State } from "../index";
import { NodePath } from "@babel/traverse";
import * as t from "@babel/types";
import { Visitor } from "@babel/core";
import { printWithCondition } from "../utils/commonProcess/print";

const getStyleImportDeclaration = t.importDeclaration(
  [t.importSpecifier(t.identifier("getStyle"), t.identifier("getStyle"))],
  t.stringLiteral("../../helpers/typesciptCssModulesHelper")
);

// 14: Adds `import { getStyle } from "../../helpers/typesciptCssModulesHelper";` to the top of the imports
export const addGetStyleImportVisitors: Visitor<State> = {
  ImportDeclaration: (path: NodePath<t.ImportDeclaration>, state: State) => {
    if (state.getStyleImported) {
      path.skip();
      return;
    }

    const newPaths = path.insertBefore(getStyleImportDeclaration);
    newPaths.forEach(p => p.skip());
    state.getStyleImported = true;
    printWithCondition(false, "=== addGetStyleImportVisitors, new getStyle import inserted");
  }
};
