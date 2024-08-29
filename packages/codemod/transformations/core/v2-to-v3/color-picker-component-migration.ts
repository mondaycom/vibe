import {
  wrap,
  getCoreImportsForFile,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  updateStaticPropKeys
} from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. Update the 'colorStyle' prop static prop from 'COLOR_STYLES' to 'colorStyles'
 */
function transform({ j, root }: TransformationContext) {
  const imports = getCoreImportsForFile(root);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "ColorPicker");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    updateStaticPropKeys(j, elementPath, "colorStyle", { COLOR_STYLES: "colorStyles" });
  });
}

export default wrap(transform);
