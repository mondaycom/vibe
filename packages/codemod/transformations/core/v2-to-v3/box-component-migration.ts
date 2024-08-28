import {
  wrap,
  getCoreImportsForFile,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  updatePropValues
} from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. "Border" prop update 'Box.borders.DEFAULT' to true
 */
function transform({ j, root }: TransformationContext) {
  const imports = getCoreImportsForFile(root);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "Box");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    updatePropValues(j, elementPath, "border", {
      "Box.borders.DEFAULT": {
        value: true,
        type: j.MemberExpression
      }
    });
  });
}

export default wrap(transform);
