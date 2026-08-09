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
 * VirtualizedList component migration for v3 to v4:
 * 1. Rename getItemHeight prop to getItemSize
 * 2. Rename onVerticalScrollbarVisiblityChange prop to onLayoutDirectionScrollbarVisibilityChange
 */
function transform({ j, root, filePath }: TransformationContext) {
  const imports = getImports(root, NEW_CORE_IMPORT_PATH);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "VirtualizedList");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    migratePropsNames(j, elementPath, filePath, componentName, {
      getItemHeight: "getItemSize",
      onVerticalScrollbarVisiblityChange: "onLayoutDirectionScrollbarVisibilityChange"
    });
  });
}

export default wrap(transform);
