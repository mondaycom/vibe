import {
  findComponentElements,
  getComponentNameOrAliasFromImports,
  getCoreImportsForFile,
  isPropExists,
  removeProp,
  updatePropName,
  wrap
} from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. Update the 'isSquare' prop to 'square'
 * 2. Update the 'isDisabled' prop to 'disabled'
 */
function transform({ j, root }: TransformationContext) {
  if (!getCoreImportsForFile(root).length) return;
  const imports = getCoreImportsForFile(root);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "Avatar");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(path => {
    const hasIsSquare = isPropExists(j, path, "isSquare");
    const hasSquare = isPropExists(j, path, "square");
    if (hasIsSquare && hasSquare) {
      removeProp(j, path, "isSquare");
    }

    const hasIsDisabled = isPropExists(j, path, "isDisabled");
    const hasDisabled = isPropExists(j, path, "disabled");
    if (hasIsDisabled && hasDisabled) {
      removeProp(j, path, "isDisabled");
    }

    updatePropName(path, { isSquare: "square", isDisabled: "disabled" });
  });
}

export default wrap(transform);
