import {
  findComponentElements,
  getComponentNameOrAliasFromImports,
  getCoreImportsForFile,
  updatePropName,
  wrap
} from "../../../utils";
import { TransformationContext } from "../../../types";

/**
 * 1. Update the 'isSquare' prop to 'square'
 * 2. Update the 'isDisabled' prop to 'disabled'
 */
function transform({ j, root }: TransformationContext) {
  if (!getCoreImportsForFile(root).length) return;
  const imports = getCoreImportsForFile(root);
  const actualComponentName = getComponentNameOrAliasFromImports(j, imports, "Avatar");
  if (!actualComponentName) return;

  const elements = findComponentElements(root, actualComponentName);
  if (!elements.length) return;

  elements.forEach(path => {
    updatePropName(path, { isSquare: "square", isDisabled: "disabled" });
  });
}

export default wrap(transform);
