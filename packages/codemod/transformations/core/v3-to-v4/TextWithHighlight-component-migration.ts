import {
  wrap,
  getCoreImportsForFile,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  removeProp,
  isPropExists
} from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * TextWithHighlight migration for v3 to v4:
 * 1. Remove deprecated tooltipPosition prop
 *    Migration: use tooltipProps={{ position: "..." }} instead
 */
function transform({ j, root, filePath }: TransformationContext) {
  const imports = getCoreImportsForFile(root);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "TextWithHighlight");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    if (isPropExists(j, elementPath, "tooltipPosition")) {
      console.warn(
        `[MANUAL] ${filePath}: ${componentName} uses "tooltipPosition". ` +
          `Migrate to tooltipProps={{ position: "..." }} and remove tooltipPosition.`
      );
      removeProp(j, elementPath, "tooltipPosition");
    }
  });
}

export default wrap(transform);
