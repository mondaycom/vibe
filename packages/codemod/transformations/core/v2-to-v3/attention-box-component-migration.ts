import {
  findComponentElements,
  getComponentNameOrAliasFromImports,
  getCoreImportsForFile,
  isPropExists,
  logPropMigrationError,
  updatePropName,
  wrap
} from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. Update the 'componentClassName' prop to 'className'
 */
function transform({ j, root, filePath }: TransformationContext) {
  const imports = getCoreImportsForFile(root);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "AttentionBox");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(path => {
    const hasClassName = isPropExists(j, path, "className");
    const hasComponentClassName = isPropExists(j, path, "componentClassName");
    if (hasClassName && hasComponentClassName) {
      logPropMigrationError(filePath, componentName, "componentClassName", "className");
    } else if (hasComponentClassName) {
      updatePropName(path, { componentClassName: "className" });
    }
  });
}

export default wrap(transform);
