import { ASTPath, Collection, JSXOpeningElement } from "jscodeshift";

export function findComponentElements(root: Collection, componentName: string): Collection<JSXOpeningElement> {
  return root.find(JSXOpeningElement, {
    name: { type: "JSXIdentifier", name: componentName }
  });
}

export function renameComponentIdentifierName(path: ASTPath<JSXOpeningElement>, oldName: string, newName: string) {
  if (path.node.name.type === "JSXIdentifier" && path.node.name.name === oldName) {
    path.node.name.name = newName;
  }
}
