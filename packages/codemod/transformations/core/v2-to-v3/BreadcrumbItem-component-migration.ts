import {
  wrap,
  getCoreImportsForFile,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  migratePropsNames
} from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. Update the 'isDisabled' prop to 'disabled'
 */
function transform({ j, root, filePath }: TransformationContext) {
  const imports = getCoreImportsForFile(root);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "BreadcrumbItem");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    migratePropsNames(j, elementPath, filePath, componentName, { isDisabled: "disabled" });
  });
}

export default wrap(transform);
