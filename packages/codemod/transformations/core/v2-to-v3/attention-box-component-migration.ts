import {
  findComponentElements,
  getComponentNameOrAliasFromImports,
  getCoreImportsForFile,
  isPropExists,
  updatePropName,
  wrap
} from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. Update the 'componentClassName' prop to 'className'
 */
function transform({ j, root }: TransformationContext) {
  const imports = getCoreImportsForFile(root);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "AttentionBox");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(path => {
    if (!isPropExists(j, path, "className")) {
      updatePropName(path, { componentClassName: "className" });
    }
  });
}

export default wrap(transform);
