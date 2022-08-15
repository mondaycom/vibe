import { State } from "../../index";
import { NodePath } from "@babel/traverse";
import * as t from "@babel/types";
import { Visitor } from "@babel/core";
import { printWithCondition } from "../commonProcess/print";

const dataTestIdImportDeclaration = t.importDeclaration(
  [
    t.importSpecifier(t.identifier("ELEMENT_TYPES"), t.identifier("ELEMENT_TYPES")),
    t.importSpecifier(t.identifier("getTestId"), t.identifier("getTestId"))
  ],
  t.stringLiteral("src/utils/test-utils")
);

// 12: Adds `import { ELEMENT_TYPES, getTestId } from "src/utils/test-utils";` to the top of the imports
export const addDataTestIdImportVisitors: Visitor<State> = {
  ImportDeclaration: (path: NodePath<t.ImportDeclaration>, state: State) => {
    if (state.dataTestIdImported) {
      path.skip();
      return;
    }

    const newPaths = path.insertBefore(dataTestIdImportDeclaration);
    newPaths.forEach(p => p.skip());
    state.dataTestIdImported = true;
    printWithCondition(false, "=== addDataTestIdImport, new dataTestId import inserted");

    // @ts-ignore
    const filename = path.hub.file.opts.filename;
    // writeDownFileWithDataTestId(filename);
  }
};
