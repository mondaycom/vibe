import { State } from "../index";
import { NodePath } from "@babel/traverse";
import * as t from "@babel/types";
import { Visitor } from "@babel/core";
import { printWithCondition } from "../utils/commonProcess/print";
import * as p from "path";
import { isTestIdsUtilsImportDeclaration } from "../utils/logical/isTestIdsUtilsImportDeclaration";
import { isTestConstantsImportDeclaration } from "../utils/logical/isTestConstantsImportDeclaration";

// 12: Adds `import { ComponentDefaultTestId, getTestId } from "src/tests/test-ids-utils";` to the top of the imports
export const addDataTestIdImportVisitors: Visitor<State> = {
  ImportDeclaration: (path: NodePath<t.ImportDeclaration>, state: State) => {
    if (state.dataTestIdImported) {
      // Remove previously existed imports
      if (
        (isTestIdsUtilsImportDeclaration(path.node) || isTestConstantsImportDeclaration(path.node)) &&
        path.node.start !== undefined
      ) {
        path.remove();
      }
      return;
    }

    // @ts-ignore
    const filename: string = path.hub.file.opts.filename;

    const srcAbsolutePath = filename.slice(0, filename.indexOf("/components"));
    const relativePathToTestUtils = p.relative(p.dirname(filename), `${srcAbsolutePath}/tests/test-ids-utils`);
    printWithCondition(false, "+++ addDataTestIdImport, filename, srcAbsolutePath", srcAbsolutePath);
    printWithCondition(
      false,
      "+++ addDataTestIdImport, filename, relativePathToTestUtils",
      filename,
      relativePathToTestUtils
    );

    const dataTestIdImportDeclaration = t.importDeclaration(
      [
        t.importSpecifier(t.identifier("ComponentDefaultTestId"), t.identifier("ComponentDefaultTestId")),
        t.importSpecifier(t.identifier("getTestId"), t.identifier("getTestId"))
      ],
      t.stringLiteral(relativePathToTestUtils)
    );

    const newPaths = path.insertBefore(dataTestIdImportDeclaration);
    newPaths.forEach(p => p.skip());
    state.dataTestIdImported = true;
    printWithCondition(false, "+++ addDataTestIdImport, new dataTestId import inserted");

    // writeDownFileWithDataTestId(filename);
  }
};
