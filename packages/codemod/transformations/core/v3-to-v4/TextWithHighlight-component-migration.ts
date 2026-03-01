import {
  wrap,
  getCoreImportsForFile,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  removeProp,
  isPropExists,
  findProps,
  getPropValue
} from "../../../src/utils";
import { NEW_CORE_IMPORT_PATH } from "../../../src/consts";
import { TransformationContext } from "../../../types";

/**
 * TextWithHighlight migration for v3 to v4:
 * 1. Migrate tooltipPosition prop to tooltipProps={{ position: "..." }}
 */
function transform({ j, root, filePath }: TransformationContext) {
  const imports = getCoreImportsForFile(root, NEW_CORE_IMPORT_PATH);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "TextWithHighlight");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    if (isPropExists(j, elementPath, "tooltipPosition")) {
      // Get the tooltipPosition value
      const tooltipPositionProps = findProps(j, elementPath, "tooltipPosition");
      if (!tooltipPositionProps.length) return;

      const tooltipPositionValue = getPropValue(j, tooltipPositionProps.get().node);

      // Check if tooltipProps already exists
      const hasTooltipProps = isPropExists(j, elementPath, "tooltipProps");

      if (hasTooltipProps) {
        console.warn(
          `[MANUAL] ${filePath}: ${componentName} has both tooltipPosition and tooltipProps. ` +
          `Please manually merge tooltipPosition="${tooltipPositionValue}" into existing tooltipProps.`
        );
      } else {
        // Create new tooltipProps={{ position: value }}
        // Handle different value types: string literals, expressions, etc.
        const tooltipPositionProps = findProps(j, elementPath, "tooltipPosition");
        const tooltipPositionAttr = tooltipPositionProps.get().node;

        let positionValue;
        if (tooltipPositionAttr.value?.type === "JSXExpressionContainer") {
          // Use the expression directly (e.g., {pos} becomes pos)
          positionValue = tooltipPositionAttr.value.expression;
        } else {
          // Use literal value (e.g., "top" stays "top")
          positionValue = j.literal(String(tooltipPositionValue));
        }

        const tooltipPropsValue = j.jsxExpressionContainer(
          j.objectExpression([
            j.property("init", j.identifier("position"), positionValue)
          ])
        );

        const tooltipPropAttr = j.jsxAttribute(j.jsxIdentifier("tooltipProps"), tooltipPropsValue);
        elementPath.node.openingElement.attributes?.push(tooltipPropAttr);
      }

      // Remove the old tooltipPosition prop
      removeProp(j, elementPath, "tooltipPosition");
    }
  });
}

export default wrap(transform);
