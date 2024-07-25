import { ASTPath, Collection, JSCodeshift, JSXElement } from "jscodeshift";

/**
 * Finds all JSX elements that match a component name.
 */
export function findComponentElements(root: Collection, componentName: string): Collection<JSXElement> {
  return root.findJSXElements(componentName);
}

/**
 * Updates the name of a JSX element.
 */
export function updateComponentName(j: JSCodeshift, elementPath: ASTPath<JSXElement>, newName: string) {
  const elements = [elementPath.node.openingElement, elementPath.node.closingElement];
  elements.forEach(element => {
    if (!element?.name) return;
    element.name = j.jsxIdentifier(newName);
  });
}
