import { Collection, JSXOpeningElement } from "jscodeshift";

export function findAllOccurrencesOfJsxOpeningTagInFile(root: Collection<JSXOpeningElement>, componentName: string) {
  return root.find(JSXOpeningElement, {
    name: { type: "JSXIdentifier", name: componentName }
  });
}
