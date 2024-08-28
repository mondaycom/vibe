import {
  wrap,
  getCoreImportsForFile,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  removeProp
} from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. Remove the 'hideCloseButton' prop
 */
function transform({ j, root }: TransformationContext) {
  const imports = getCoreImportsForFile(root);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "ModalHeader");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    removeProp(j, elementPath, "hideCloseButton");
  });
}

export default wrap(transform);
