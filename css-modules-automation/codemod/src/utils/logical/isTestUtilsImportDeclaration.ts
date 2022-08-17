import { ImportDeclaration } from "@babel/types";

/**
 * Returns true for 'import ... from ...utils/test-utils"' statement
 * @param node
 */
export const isTestUtilsImportDeclaration = (node: ImportDeclaration) => {
  return node.source.value.endsWith("utils/test-utils");
};
