import {
  findComponentElements,
  getCoreImportsForFile,
  removeProp,
  isPropExists,
  updatePropName,
  wrap,
  getComponentNameOrAliasFromImports,
  logPropMigrationError
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

  elements.forEach(path => {
    if (isPropExists(j, path, "onClick")) {
      removeProp(j, path, "clickable", "isClickable");
    }

    const hasOldDataTestId = isPropExists(j, path, "dataTestId");
    const hasNewDatatestid = isPropExists(j, path, "data-testid");

    if (hasOldDataTestId && hasNewDatatestid) {
      logPropMigrationError(filePath, componentName, "dataTestId", "data-testid");
    } else if (hasOldDataTestId) {
      updatePropName(path, { dataTestId: "data-testid" });
    }
  });
}

export default wrap(transform);
