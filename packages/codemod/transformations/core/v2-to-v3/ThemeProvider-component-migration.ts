import {
  wrap,
  getCoreImportsForFile,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  migratePropsNames
} from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. Update the 'theme' prop to 'themeConfig'
 */
function transform({ j, root, filePath }: TransformationContext) {
  const imports = getCoreImportsForFile(root);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "ThemeProvider");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    migratePropsNames(j, elementPath, filePath, componentName, { theme: "themeConfig" });
  });
}

export default wrap(transform);
