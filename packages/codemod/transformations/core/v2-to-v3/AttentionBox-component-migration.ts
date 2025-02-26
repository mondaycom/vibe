import {
  findComponentElements,
  getComponentNameOrAliasFromImports,
  getCoreImportsForFile,
  migratePropsNames,
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

  elements.forEach(elementPath => {
    migratePropsNames(j, elementPath, filePath, componentName, { componentClassName: "className" });
  });
}

export default wrap(transform);
