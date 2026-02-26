import {
  wrap,
  getImports,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  removeProp
} from "../../../src/utils";
import { NEW_CORE_IMPORT_PATH } from "../../../src/consts";
import { TransformationContext } from "../../../types";

/**
 * Dialog migration for v3 to v4:
 * 1. Remove enableNestedDialogLayer prop (LayerProvider is now always applied)
 */
function transform({ j, root }: TransformationContext) {
  const imports = getImports(root, NEW_CORE_IMPORT_PATH);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "Dialog");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    removeProp(j, elementPath, "enableNestedDialogLayer");
  });
}

export default wrap(transform);
