import { ImportDeclaration } from "@babel/types";

/**
 * Returns true for 'import { ComponentDefaultTestId } from ...tests/constants";' statement
 * @param node
 */
export const isTestConstantsImportDeclaration = (node: ImportDeclaration) => {
  return (
    node.specifiers.length === 1 &&
    node.specifiers[0].type === "ImportSpecifier" &&
    node.specifiers[0].local.name === "ComponentDefaultTestId" &&
    node.source.value.endsWith("tests/constants")
  );
};
