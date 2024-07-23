import {
  findComponentElements,
  getComponentNameOrAliasFromImports,
  getCoreImportsForFile,
  migratePropsNames,
  wrap
} from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. Update the 'isSquare' prop to 'square'
 * 2. Update the 'isDisabled' prop to 'disabled'
 */
function transform({ j, root, filePath }: TransformationContext) {
  if (!getCoreImportsForFile(root).length) return;
  const imports = getCoreImportsForFile(root);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "Avatar");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    migratePropsNames(j, elementPath, filePath, componentName, { isSquare: "square", isDisabled: "disabled" });
  });
}

export default wrap(transform);
