import {
  wrap,
  getImports,
  getComponentNameOrAliasFromImports,
  updateImportSpecifierName,
  findImportsThatIncludesSpecifier,
  findComponentElements,
  updateComponentName
} from "../../../src/utils";
import { NEW_CORE_IMPORT_PATH } from "../../../src/consts";
import { TransformationContext } from "../../../types";

/**
 * LinearProgressBar migration for v3 to v4:
 * 1. Rename `LinearProgressBar` import to `ProgressBar`
 * 2. Rename `LinearProgressBarProps` type import to `ProgressBarProps`
 * 3. Update all JSX usages and type references to use the new names
 */
function transform({ j, root }: TransformationContext) {
  const imports = getImports(root, NEW_CORE_IMPORT_PATH);

  // Check if LinearProgressBar is imported (before renaming)
  const componentName = getComponentNameOrAliasFromImports(j, imports, "LinearProgressBar");
  const hasDirectImport = componentName === "LinearProgressBar"; // no alias

  // Rename LinearProgressBar -> ProgressBar in import
  const componentImports = findImportsThatIncludesSpecifier(j, imports, "LinearProgressBar");
  componentImports.forEach(importPath => {
    updateImportSpecifierName(j, importPath, "LinearProgressBar", "ProgressBar");
  });

  // Rename LinearProgressBarProps -> ProgressBarProps in import
  const typeImports = findImportsThatIncludesSpecifier(j, imports, "LinearProgressBarProps");
  typeImports.forEach(importPath => {
    updateImportSpecifierName(j, importPath, "LinearProgressBarProps", "ProgressBarProps");
  });

  // If the component was imported directly (no alias), rename JSX usages
  if (hasDirectImport) {
    const elements = findComponentElements(root, "LinearProgressBar");
    elements.forEach(elementPath => {
      updateComponentName(j, elementPath, "ProgressBar");
    });
  }

  // Rename all LinearProgressBarProps type references in the code
  root
    .find(j.Identifier, { name: "LinearProgressBarProps" })
    .forEach(path => {
      path.node.name = "ProgressBarProps";
    });
}

export default wrap(transform);
