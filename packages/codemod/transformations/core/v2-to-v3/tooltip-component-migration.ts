import {
  wrap,
  getCoreImportsForFile,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  removeProp
} from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. Remove the 'withMaxWidth' prop
 */
function transform({ j, root }: TransformationContext) {
  const imports = getCoreImportsForFile(root);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "Tooltip");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    removeProp(j, elementPath, "withMaxWidth");
  });
}

export default wrap(transform);
