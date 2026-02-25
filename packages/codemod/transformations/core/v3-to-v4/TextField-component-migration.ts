import {
  wrap,
  getImports,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  isPropExists,
  findProps,
  removeProp
} from "../../../src/utils";
import { NEW_CORE_IMPORT_PATH } from "../../../src/consts";
import { TransformationContext } from "../../../types";

/**
 * TextField migration for v3 to v4:
 * Replace object prop `iconsNames={{ primary, secondary }}` with flat props `iconLabel` and `secondaryIconLabel`
 */
function transform({ j, root }: TransformationContext) {
  const imports = getImports(root, NEW_CORE_IMPORT_PATH);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "TextField");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    if (!isPropExists(j, elementPath, "iconsNames")) return;

    const iconsNamesProp = findProps(j, elementPath, "iconsNames");
    if (!iconsNamesProp.length) return;

    const propNode = iconsNamesProp.at(0).get().node;
    const value = propNode.value;

    // Handle object expression: iconsNames={{ primary: "X", secondary: "Y" }}
    if (value?.type === "JSXExpressionContainer" && value.expression.type === "ObjectExpression") {
      const properties = value.expression.properties;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      properties.forEach((prop: any) => {
        if (prop.type !== "ObjectProperty" && prop.type !== "Property") return;

        const key = prop.key;
        const keyName = key.type === "Identifier" ? key.name : key.type === "StringLiteral" ? key.value : null;

        if (!keyName) return;

        let newPropName: string | null = null;
        if (keyName === "primary") {
          newPropName = "iconLabel";
        } else if (keyName === "secondary") {
          newPropName = "secondaryIconLabel";
        }

        if (!newPropName) return;

        // Skip if the new prop already exists
        if (isPropExists(j, elementPath, newPropName)) return;

        const propValue = prop.value;

        let newAttr;
        if (propValue.type === "StringLiteral") {
          // Static string: primary: "Search" -> iconLabel="Search"
          newAttr = j.jsxAttribute(j.jsxIdentifier(newPropName), j.literal(propValue.value));
        } else {
          // Dynamic expression: primary: dynamicLabel -> iconLabel={dynamicLabel}
          newAttr = j.jsxAttribute(j.jsxIdentifier(newPropName), j.jsxExpressionContainer(propValue));
        }

        elementPath.node.openingElement.attributes?.push(newAttr);
      });

      // Remove the old iconsNames prop
      removeProp(j, elementPath, "iconsNames");
    }
    // For non-object expressions (e.g. iconsNames={someVariable}), we can't safely transform
    // Leave as-is and let the developer handle manually
  });
}

export default wrap(transform);
