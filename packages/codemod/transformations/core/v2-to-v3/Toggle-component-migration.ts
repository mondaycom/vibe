import {
  wrap,
  getCoreImportsForFile,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  migratePropsNames
} from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. Update the 'componentClassName' prop to 'className'
 * 2. Update the 'isDisabled' prop to 'disabled'
 */
function transform({ j, root, filePath }: TransformationContext) {
  const imports = getCoreImportsForFile(root);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "Toggle");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    migratePropsNames(j, elementPath, filePath, componentName, {
      componentClassName: "className",
      isDisabled: "disabled"
    });
  });
}

export default wrap(transform);
