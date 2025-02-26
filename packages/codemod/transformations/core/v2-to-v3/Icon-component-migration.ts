import {
  wrap,
  getCoreImportsForFile,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  removeProp,
  isPropExists,
  getPropValue,
  findProps
} from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. Remove clickable prop if it exists and it is false
 */
function transform({ j, root }: TransformationContext) {
  const imports = getCoreImportsForFile(root);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "Icon");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    if (!isPropExists(j, elementPath, "clickable")) return;
    const prop = findProps(j, elementPath, "clickable").get(0);
    const clickableValue = getPropValue(j, prop.node);
    if (clickableValue === false) {
      removeProp(j, elementPath, "clickable");
    }
  });
}

export default wrap(transform);
