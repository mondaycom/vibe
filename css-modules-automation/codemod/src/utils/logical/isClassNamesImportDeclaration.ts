import { ImportDeclaration } from "@babel/types";

/**
 * Returns true for 'import cx from "classnames"' and 'import classnames from "classnames"' statements
 * @param node
 */
export const isClassNamesImportDeclaration = (node: ImportDeclaration) => {
  // printWithCondition(false, "^^^ isClassNamesImportDeclaration, node", node);

  if (
    node.source.value.toLowerCase() === "classnames" &&
    node.specifiers.length === 1 &&
    node.specifiers[0].type === "ImportDefaultSpecifier" &&
    (node.specifiers[0].local.name === "cx" || node.specifiers[0].local.name.toLowerCase() === "classnames")
  ) {
    return true;
  }
  return false;
};
