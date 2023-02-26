import { ImportDeclaration } from "@babel/types";

/**
 * Returns true for 'import ... from ...tests/test-ids-utils"' statement
 * @param node
 */
export const isTestIdsUtilsImportDeclaration = (node: ImportDeclaration) => {
  return node.source.value.endsWith("tests/test-ids-utils");
};
