import {
  wrap,
  getCoreImportsForFile,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  updatePropValues
} from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. "size" prop update 'Dialog.DialogSize.MEDIUM' to 'Dialog.DialogSize.SMALL'
 */
function transform({ j, root }: TransformationContext) {
  const imports = getCoreImportsForFile(root);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "DialogContentContainer");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    updatePropValues(j, elementPath, "size", {
      "DialogContentContainer.sizes.MEDIUM": {
        value: "DialogContentContainer.sizes.SMALL",
        type: j.memberExpression
      }
    });
  });
}

export default wrap(transform);
