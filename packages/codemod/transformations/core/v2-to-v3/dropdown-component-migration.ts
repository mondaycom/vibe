import {
  wrap,
  getCoreImportsForFile,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  updateStaticPropKeys,
  removeProp
} from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. Update the 'size' prop static prop from 'size' to 'sizes'
 */
function transform({ j, root }: TransformationContext) {
  const imports = getCoreImportsForFile(root);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "Dropdown");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    updateStaticPropKeys(j, elementPath, "size", { size: "sizes" });
    removeProp(j, elementPath, "withReadOnlyStyle");
  });
}

export default wrap(transform);
