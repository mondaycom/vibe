import {
  wrap,
  getImports,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  migratePropsNames,
  removeProp
} from "../../../src/utils";
import { NEW_CORE_IMPORT_PATH } from "../../../src/consts";
import { TransformationContext } from "../../../types";

/**
 * Icon component migration for v3 to v4:
 * 1. Rename iconLabel prop to label
 * 2. Rename iconSize prop to size
 * 3. Remove iconType/type prop (icon type is now auto-detected from the value)
 */
function transform({ j, root, filePath }: TransformationContext) {
  const imports = getImports(root, NEW_CORE_IMPORT_PATH);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "Icon");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    migratePropsNames(j, elementPath, filePath, componentName, {
      iconLabel: "label",
      iconSize: "size"
    });
    removeProp(j, elementPath, "iconType", "type");
  });
}

export default wrap(transform);
