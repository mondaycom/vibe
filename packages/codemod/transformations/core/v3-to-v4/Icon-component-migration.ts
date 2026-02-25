import {
  wrap,
  getCoreImportsForFile,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  renameProp,
  isPropExists
} from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * Icon component migration for v3 to v4:
 * 1. Rename iconLabel prop to label
 * 2. Rename iconType prop to type
 * 3. Rename iconSize prop to size
 */
function transform({ j, root }: TransformationContext) {
  const imports = getCoreImportsForFile(root);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "Icon");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    // Rename iconLabel to label
    if (isPropExists(j, elementPath, "iconLabel")) {
      renameProp(j, elementPath, "iconLabel", "label");
    }

    // Rename iconType to type
    if (isPropExists(j, elementPath, "iconType")) {
      renameProp(j, elementPath, "iconType", "type");
    }

    // Rename iconSize to size
    if (isPropExists(j, elementPath, "iconSize")) {
      renameProp(j, elementPath, "iconSize", "size");
    }
  });
}

export default wrap(transform);
