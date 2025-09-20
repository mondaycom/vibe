import {
  wrap,
  getImports,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  removeProp,
  migratePropsNames
} from "../../../src/utils";
import { NEW_CORE_NEXT_IMPORT_PATH } from "../../../src/consts";
import { TransformationContext } from "../../../types";

/**
 * 1. Remove deprecated props that are no longer supported
 * 2. Replace 'tooltipContent' with 'tooltipProps' (needs manual value structure update)
 */
function transform({ j, root, filePath }: TransformationContext) {
  const imports = getImports(root, NEW_CORE_NEXT_IMPORT_PATH);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "Dropdown");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  // Props that should be completely removed
  const removedProps = [
    "extraStyles",
    "menuPortalTarget",
    "isVirtualized",
    "asyncOptions",
    "cacheOptions",
    "loadingMessage",
    "onMenuScrollToBottom",
    "captureMenuScroll",
    "insideOverflowContainer",
    "insideOverflowWithTransformContainer",
    "insideLayerContext",
    "popupsContainerSelector"
  ];

  // Props that need to be renamed
  const renamedProps = {
    tooltipContent: "tooltipProps"
  };

  elements.forEach(elementPath => {
    // Remove deprecated props
    removedProps.forEach(prop => {
      removeProp(j, elementPath, prop);
    });

    // Rename props (this will need manual attention for tooltipContent -> tooltipProps)
    migratePropsNames(j, elementPath, filePath, componentName, renamedProps);
  });
}

export default wrap(transform);
