import { ASTPath, Collection, JSCodeshift, JSXAttribute, JSXOpeningElement } from "jscodeshift";
import { findAllOccurrencesOfJsxOpeningTagInFile } from "./jsx-utils";

export function findAllOccurrencesOfPropInJsxOpeningPath(
  j: JSCodeshift,
  path: ASTPath<JSXOpeningElement>,
  propName: string
): Collection<JSXAttribute> {
  return j(path).find(JSXAttribute, {
    name: { type: "JSXIdentifier", name: propName }
  });
}

export function updateComponentPropName(
  j: JSCodeshift,
  root: Collection<JSXOpeningElement>,
  componentName: string,
  oldPropName: string,
  newPropName: string
): void {
  const replaceName = (path: ASTPath<JSXOpeningElement>) => {
    findAllOccurrencesOfPropInJsxOpeningPath(j, path, oldPropName).forEach(attrPath => {
      attrPath.node.name = j.jsxIdentifier(newPropName);
    });
  };
  findAllOccurrencesOfJsxOpeningTagInFile(root, componentName).forEach(replaceName);
}
