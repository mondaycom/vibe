import { ImportDeclaration } from "@babel/types";

/**
 * Returns true for 'import cx from "classnames"' and 'import classnames from "classnames"' statements
 * @param node
 */
export const isClassNamesImportDeclaration = (node: ImportDeclaration) => {
  // print("^^^ isClassNamesImportDeclaration, node", node);

  if (
    node.source.value === "classnames" &&
    node.specifiers.length === 1 &&
    node.specifiers[0].type === "ImportDefaultSpecifier" &&
    (node.specifiers[0].local.name === "cx" || node.specifiers[0].local.name === "classnames")
  ) {
    return true;
  }
  return false;
};
