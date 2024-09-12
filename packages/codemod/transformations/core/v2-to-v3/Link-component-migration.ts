import {
  wrap,
  getCoreImportsForFile,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  updateStaticPropKeys,
  migratePropsNames
} from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. Update the 'target' prop static prop from 'target' to 'targets'
 * 2. Update the 'componentClassName' prop to 'className'
 */
function transform({ j, root, filePath }: TransformationContext) {
  const imports = getCoreImportsForFile(root);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "Link");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    updateStaticPropKeys(j, elementPath, "target", { target: "targets" });
    migratePropsNames(j, elementPath, filePath, componentName, { componentClassName: "className" });
  });
}

export default wrap(transform);
