import { ASTPath, JSXOpeningElement, JSCodeshift, JSXAttribute, JSXIdentifier } from "jscodeshift";

export function updatePropName(
  elementPath: ASTPath<JSXOpeningElement>,
  propsNamesMappingOldToNew: Record<string, string>
): void {
  const attributes = elementPath.node?.attributes;
  if (!attributes) return;
  attributes.forEach(attr => {
    if (
      attr.type === "JSXAttribute" &&
      attr.name.type === "JSXIdentifier" &&
      propsNamesMappingOldToNew[attr.name.name]
    ) {
      attr.name.name = propsNamesMappingOldToNew[attr.name.name];
    }
  });
}

export function isPropExists(j: JSCodeshift, elementPath: ASTPath<JSXOpeningElement>, propName: string): boolean {
  const attributes = elementPath.node?.attributes;
  if (!attributes) return false;
  return j(elementPath).find(JSXIdentifier, { name: propName }).size() > 0;
}

export function removeProp(j: JSCodeshift, elementPath: ASTPath<JSXOpeningElement>, ...propsNames: string[]): void {
  const attributes = elementPath.node?.attributes;
  if (!attributes) return;
  j(elementPath)
    .find(JSXAttribute)
    .forEach(attrPath => {
      if (attrPath.node.name.type === "JSXIdentifier" && propsNames.includes(attrPath.node.name.name)) {
        j(attrPath).remove();
      }
    });
}
