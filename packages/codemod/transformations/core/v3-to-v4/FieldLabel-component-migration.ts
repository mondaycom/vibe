import {
  wrap,
  getCoreImportsForFile,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  isPropExists,
  removeProp
} from "../../../src/utils";
import { NEW_CORE_IMPORT_PATH } from "../../../src/consts";
import { TransformationContext } from "../../../types";

/**
 * FieldLabel component migration for v3 to v4:
 * 1. Remove `iconLabel` prop — it was a no-op in v3 (deprecated, not passed to Icon)
 *    and has been removed from the FieldLabel API in v4.
 */
function transform({ j, root }: TransformationContext) {
  const imports = getCoreImportsForFile(root, NEW_CORE_IMPORT_PATH);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "FieldLabel");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    if (!isPropExists(j, elementPath, "iconLabel")) return;
    removeProp(j, elementPath, "iconLabel");
  });
}

export default wrap(transform);
