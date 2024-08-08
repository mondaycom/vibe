import { ImportDeclaration } from "jscodeshift";
import {
  getCoreImportsForFile,
  wrap,
  getComponentNameOrAliasFromImports,
  updateImportSpecifierName,
  findComponentElements,
  findImportsThatIncludesSpecifier,
  removeSpecifierFromImport,
  updateComponentName,
  updateComponentNamespaceProps
} from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * 1. Remove the 'SearchComponent' import if 'Search' is already imported from 'monday-ui-react-core'
 * 2. Update the 'SearchComponent' import to 'Search' (or 'Search as SearchComponent' if 'Search' is already imported from other source)
 * 3. Update the component name jsx usage from 'SearchComponent' to 'Search'
 */
function transform({ j, root }: TransformationContext) {
  const coreImports = getCoreImportsForFile(root);
  if (!coreImports.length) return;

  const coreOldSearchComponentImports = findImportsThatIncludesSpecifier(j, coreImports, "SearchComponent");
  if (!coreOldSearchComponentImports.length) return;

  const allImports = root.find(ImportDeclaration);

  // This finds all imports that has 'Search' as imported specifier
  const rootSearchImports = findImportsThatIncludesSpecifier(j, allImports, "Search");

  // Check in addition if the import of 'Search' that was found is from Vibe
  const isSearchAlreadyImportedFromCore = rootSearchImports.some(
    path => path.node.source?.value === "monday-ui-react-core"
  );

  // Keep the original alias if it exists
  const componentName = getComponentNameOrAliasFromImports(j, coreOldSearchComponentImports.at(0), "SearchComponent");
  const hasAlias = !!componentName && componentName !== "SearchComponent";

  // if 'Search' specifier already exists in file (not from Vibe!) alias should be added to the new import
  const newAlias = rootSearchImports.length ? "SearchComponent" : "";
  const alias = hasAlias ? componentName : newAlias;

  if (isSearchAlreadyImportedFromCore) {
    removeSpecifierFromImport(j, coreOldSearchComponentImports.at(0).get(), "SearchComponent");
  } else {
    updateImportSpecifierName(j, coreOldSearchComponentImports.at(0).get(), "SearchComponent", "Search", alias);
  }

  const elements = findComponentElements(root, componentName || "SearchComponent");
  if (!elements.length) return;

  elements.forEach(elementPath => {
    updateComponentName(j, elementPath, alias || "Search");
    updateComponentNamespaceProps(j, elementPath, "SearchComponent", alias || "Search");
  });
}

export default wrap(transform);
