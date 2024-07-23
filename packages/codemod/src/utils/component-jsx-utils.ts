import { Collection, JSXElement } from "jscodeshift";

/**
 * Finds all JSX elements that match a component name.
 */
export function findComponentElements(root: Collection, componentName: string): Collection<JSXElement> {
  return root.find(JSXElement, { openingElement: { name: { name: componentName } } });
}
