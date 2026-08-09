import {
  wrap,
  getImports,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  migratePropsNames
} from "../../../src/utils";
import { NEW_CORE_IMPORT_PATH } from "../../../src/consts";
import { TransformationContext } from "../../../types";

/**
 * Icon component migration for v3 to v4:
 * 1. Rename iconLabel prop to label
 * 2. Rename iconType prop to type
 * 3. Rename iconSize prop to size
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
      iconType: "type",
      iconSize: "size"
    });
  });
}

export default wrap(transform);
