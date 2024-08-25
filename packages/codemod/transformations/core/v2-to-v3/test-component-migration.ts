import {
  wrap,
  getCoreImportsForFile,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  updatePropValues
} from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. TODO: What does this codemod do?
 */
function transform({ j, root }: TransformationContext) {
  const imports = getCoreImportsForFile(root);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "Box");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;
  elements.forEach(elementPath => {
    updatePropValues(j, elementPath, "border", {
      tt: true,
      true: "ttt",
      10: 20,
      "Dropdown.size.MEDIUM": true,
      "Dropdown.size.SMALL": "Dropdown.size.MEDIUM",
      false: "Dropdown.size.LARGE",
      ppp: "Dropdown.size.LARGE",
      "Dropdown.size.TEST": "test"
    });
  });
}

export default wrap(transform);
