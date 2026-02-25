import {
  wrap,
  getImports,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  isPropExists,
  removeProp
} from "../../../src/utils";
import { NEW_CORE_IMPORT_PATH } from "../../../src/consts";
import { TransformationContext } from "../../../types";

const ICON_IMPORT_PATH = "@vibe/icon";

/**
 * CustomSvgIcon component migration for v3 to v4:
 * 1. Remove `onClick` prop — CustomSvgIcon is a decorative SVG component
 *    and no longer supports click handlers.
 * 2. Remove `clickable` prop — removed along with onClick; use accessible
 *    wrappers for clickable icon patterns instead.
 */
function transform({ j, root }: TransformationContext) {
  // CustomSvgIcon can be imported from @vibe/icon or @vibe/core
  for (const importPath of [ICON_IMPORT_PATH, NEW_CORE_IMPORT_PATH]) {
    const imports = getImports(root, importPath);
    const componentName = getComponentNameOrAliasFromImports(j, imports, "CustomSvgIcon");
    if (!componentName) continue;

    const elements = findComponentElements(root, componentName);
    if (!elements.length) continue;

    elements.forEach(elementPath => {
      if (isPropExists(j, elementPath, "onClick")) {
        removeProp(j, elementPath, "onClick");
      }
      if (isPropExists(j, elementPath, "clickable")) {
        removeProp(j, elementPath, "clickable");
      }
    });
  }
}

export default wrap(transform);
