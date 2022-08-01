import { ImportDeclaration } from "@babel/types";

export const isBemHelperImportDeclaration = (node: ImportDeclaration) => {
  return node.source.value === "helpers/bem-helper";
};
