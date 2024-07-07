import { ASTPath, JSXOpeningElement } from "jscodeshift";

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
