import { State } from "../../index";
import { Hub, NodePath } from "@babel/traverse";
import * as t from "@babel/types";
import { Visitor } from "@babel/core";
import { printWithCondition } from "../print";

// 8. Adds `import { camelCase } from "lodash"` to the top of the imports
export const addCamelCaseImport = (hub: Hub, state: State) => {
  // @ts-ignore
  const file = hub["file"];
  file.path.traverse(camelCaseImportVisitors, state);
};

const camelCaseImportVisitors: Visitor<State> = {
  ImportDeclaration: (path: NodePath<t.ImportDeclaration>, state: State) => {
    if (state.camelCaseImported) {
      path.skip();
      return;
    }

    const newPaths = path.insertBefore(
      t.importDeclaration(
        [t.importSpecifier(t.identifier("camelCase"), t.identifier("camelCase"))],
        t.stringLiteral("lodash")
      )
    );
    newPaths.forEach(p => p.skip());
    state.camelCaseImported = true;
    printWithCondition(false, "=== addCamelCaseImport, new camelCase import inserted");
  }
};
