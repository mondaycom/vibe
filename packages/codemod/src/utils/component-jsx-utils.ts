import { Collection, JSXOpeningElement } from "jscodeshift";

export function findComponentElements(root: Collection, componentName: string): Collection<JSXOpeningElement> {
  return root.find(JSXOpeningElement, {
    name: { type: "JSXIdentifier", name: componentName }
  });
}
