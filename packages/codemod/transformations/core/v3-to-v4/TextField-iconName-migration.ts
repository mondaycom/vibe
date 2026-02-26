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
 * TextField migration for v3 to v4:
 * Rename `iconName` prop to `icon`
 */
function transform({ j, root, filePath }: TransformationContext) {
  const imports = getImports(root, NEW_CORE_IMPORT_PATH);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "TextField");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    migratePropsNames(j, elementPath, filePath, componentName, {
      iconName: "icon"
    });
  });
}

export default wrap(transform);
