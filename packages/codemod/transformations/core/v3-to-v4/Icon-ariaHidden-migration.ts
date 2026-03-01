import {
  wrap,
  getImports,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  isPropExists
} from "../../../src/utils";
import { NEW_CORE_IMPORT_PATH } from "../../../src/consts";
import { TransformationContext } from "../../../types";

/**
 * Icon ariaHidden migration for v3 to v4:
 *
 * In v4, Icon's `ariaHidden` prop defaults to `true` (previously auto-detected).
 * This codemod finds Icon elements that have a `label` prop but no `ariaHidden`,
 * and adds `ariaHidden={false}` to preserve the previous accessible behavior.
 *
 * Also handles CustomSvgIcon (checks for `ariaLabel` instead of `label`).
 */
function transform({ j, root }: TransformationContext) {
  const imports = getImports(root, NEW_CORE_IMPORT_PATH);

  // Handle Icon with label prop
  const iconName = getComponentNameOrAliasFromImports(j, imports, "Icon");
  if (iconName) {
    const iconElements = findComponentElements(root, iconName);
    iconElements.forEach(elementPath => {
      if (isPropExists(j, elementPath, "label") && !isPropExists(j, elementPath, "ariaHidden")) {
        const ariaHiddenValue = j.jsxExpressionContainer(j.booleanLiteral(false));
        const ariaHiddenAttr = j.jsxAttribute(j.jsxIdentifier("ariaHidden"), ariaHiddenValue);
        elementPath.node.openingElement.attributes?.push(ariaHiddenAttr);
      }
    });
  }

  // Handle CustomSvgIcon with ariaLabel prop
  const customSvgIconName = getComponentNameOrAliasFromImports(j, imports, "CustomSvgIcon");
  if (customSvgIconName) {
    const customSvgElements = findComponentElements(root, customSvgIconName);
    customSvgElements.forEach(elementPath => {
      if (isPropExists(j, elementPath, "ariaLabel") && !isPropExists(j, elementPath, "ariaHidden")) {
        const ariaHiddenValue = j.jsxExpressionContainer(j.booleanLiteral(false));
        const ariaHiddenAttr = j.jsxAttribute(j.jsxIdentifier("ariaHidden"), ariaHiddenValue);
        elementPath.node.openingElement.attributes?.push(ariaHiddenAttr);
      }
    });
  }
}

export default wrap(transform);
