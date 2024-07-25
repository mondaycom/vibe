import { ASTPath, Collection, JSCodeshift, JSXElement } from "jscodeshift";

/**
 * Finds all JSX elements that match a component name.
 */
export function findComponentElements(root: Collection, componentName: string): Collection<JSXElement> {
  return root.findJSXElements(componentName);
}
