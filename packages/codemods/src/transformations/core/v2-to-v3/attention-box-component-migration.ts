import {
  findComponentElements,
  getComponentNameOrAliasFromImports,
  getCoreImportsForFile,
  updatePropName,
  wrap
} from "../../../utils";
import { TransformationContext } from "../../../types";

/**
 * 1. Update the 'componentClassName' prop to 'className'
 */
function transform({ j, root }: TransformationContext) {
  const imports = getCoreImportsForFile(root);
  const actualComponentName = getComponentNameOrAliasFromImports(j, imports, "AttentionBox");
  if (!actualComponentName) return;

  const elements = findComponentElements(root, actualComponentName);
  if (!elements.length) return;

  elements.forEach(path => {
    updatePropName(path, { componentClassName: "className" });
  });
}

export default wrap(transform);
