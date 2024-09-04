import {
  wrap,
  getCoreImportsForFile,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  migratePropsNames
} from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. Update the 'classname' prop to 'className'
 * 2. Update the 'disabledReason' prop to 'tooltipContent'
 * 1. Update the 'closeDialogOnContentClick' prop to 'closeMenuOnItemClick'
 */
function transform({ j, root, filePath }: TransformationContext) {
  const imports = getCoreImportsForFile(root);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "MenuButton");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    migratePropsNames(j, elementPath, filePath, componentName, {
      componentClassName: "className",
      disabledReason: "tooltipContent",
      closeDialogOnContentClick: "closeMenuOnItemClick"
    });
  });
}

export default wrap(transform);
