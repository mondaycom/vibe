import {
  wrap,
  getCoreImportsForFile,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  removeProp
} from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. Remove the 'noPadding' prop
 */
function transform({ j, root, filePath }: TransformationContext) {
  const imports = getCoreImportsForFile(root);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "TabList");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    removeProp(j, elementPath, "noPadding");
  });
}

export default wrap(transform);
