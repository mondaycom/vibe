import {
  wrap,
  getCoreImportsForFile,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  migratePropsNames,
  removeProp,
  isPropExists
} from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. Change the 'dataTestId' prop to 'data-testid'
 * 2. Remove 'withReadOnlyStyle' prop
 * 3. Remove 'requiredAsterisk' prop if 'required' prop exists
 */
function transform({ j, root, filePath }: TransformationContext) {
  const imports = getCoreImportsForFile(root);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "TextField");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    migratePropsNames(j, elementPath, filePath, componentName, { dataTestId: "data-testid" });
    removeProp(j, elementPath, "withReadOnlyStyle");
    if (isPropExists(j, elementPath, "required")) {
      removeProp(j, elementPath, "requiredAsterisk");
    }
  });
}

export default wrap(transform);
