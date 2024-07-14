import {
  findComponentElements,
  getCoreImportsForFile,
  removeProp,
  isPropExists,
  wrap,
  getComponentNameOrAliasFromImports,
  migratePropsNames
} from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. Remove the 'clickable' prop when 'onClick' prop exists
 * 2. Remove the 'isClickable' prop when 'onClick' prop exists
 * 3. Update the 'dataTestId' prop to 'data-testid'
 */
function transform({ j, root, filePath }: TransformationContext) {
  const imports = getCoreImportsForFile(root);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "Chips");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    if (isPropExists(j, elementPath, "onClick")) {
      removeProp(j, elementPath, "clickable", "isClickable");
    }

    migratePropsNames(j, elementPath, filePath, componentName, { dataTestId: "data-testid" });
  });
}

export default wrap(transform);
