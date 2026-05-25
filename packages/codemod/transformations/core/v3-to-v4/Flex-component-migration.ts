import {
  wrap,
  getCoreImportsForFile,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  isPropExists,
  findProps,
  getPropValue,
  removeProp
} from "../../../src/utils";
import { NEW_CORE_IMPORT_PATH } from "../../../src/consts";
import { TransformationContext } from "../../../types";

/**
 * Flex component migration for v3 to v4:
 * 1. Remove `justify="stretch"` — "stretch" is not a valid value for justify-content in flexbox
 *    and had no CSS implementation. The prop is removed entirely.
 * 2. Remove `justify={FlexJustify.STRETCH}` — same reason, enum value removed.
 */
function transform({ j, root }: TransformationContext) {
  const imports = getCoreImportsForFile(root, NEW_CORE_IMPORT_PATH);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "Flex");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    if (!isPropExists(j, elementPath, "justify")) return;
    const prop = findProps(j, elementPath, "justify").get(0);
    const justifyValue = getPropValue(j, prop.node);
    if (justifyValue === "stretch" || justifyValue === "FlexJustify.STRETCH") {
      removeProp(j, elementPath, "justify");
    }
  });
}

export default wrap(transform);
