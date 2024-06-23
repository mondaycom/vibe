import { ASTPath, JSXOpeningElement } from "jscodeshift";

export function updatePropName(
  elementPath: ASTPath<JSXOpeningElement>,
  oldPropName: string,
  newPropName: string
): void {
  const attributes = elementPath.node?.attributes;
  if (!attributes) return;
  attributes.forEach(attr => {
    if (attr.type === "JSXAttribute" && attr.name.type === "JSXIdentifier" && attr.name.name === oldPropName) {
      attr.name.name = newPropName;
    }
  });
}

export function removeProp(elementPath: ASTPath<JSXOpeningElement>, propName: string): void {
  const attributes = elementPath.node?.attributes;
  if (!attributes) return;
  const propIndex = attributes.findIndex(
    attr => attr.type === "JSXAttribute" && attr.name.type === "JSXIdentifier" && attr.name.name === propName
  );
  if (propIndex < 0) return;
  attributes.splice(propIndex, 1);
}
