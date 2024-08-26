import {
  wrap,
  getCoreImportsForFile,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  removeProp,
  isPropExists,
  addNewProp,
  getPropValue,
  findProps
} from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. remove 'isOnPrimary' prop if exists and is true
 * 2. add color={Steps.colors.PRIMARY} if 'isOnPrimary' exists and is true
 */
function transform({ j, root }: TransformationContext) {
  const imports = getCoreImportsForFile(root);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "Steps");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    if (isPropExists(j, elementPath, "isOnPrimary")) {
      const prop = findProps(j, elementPath, "isOnPrimary").get(0);
      const propValue = getPropValue(j, prop.node);
      if (propValue) {
        removeProp(j, elementPath, "isOnPrimary");
        addNewProp(j, elementPath, "color", "Steps.colors.PRIMARY", j.memberExpression);
      }
    }
  });
}

export default wrap(transform);
