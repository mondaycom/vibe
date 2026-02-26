import {
  wrap,
  getCoreImportsForFile,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  removeProp
} from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * Dialog migration for v3 to v4:
 * 1. Remove enableNestedDialogLayer prop (LayerProvider is now always applied)
 */
function transform({ j, root }: TransformationContext) {
  const imports = getCoreImportsForFile(root);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "Dialog");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    removeProp(j, elementPath, "enableNestedDialogLayer");
  });
}

export default wrap(transform);
