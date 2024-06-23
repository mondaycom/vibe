import { API, FileInfo } from "jscodeshift";
import {
  findComponentElements,
  getCoreImportsForFile,
  renameComponentIdentifierName,
  setup,
  updateComponentImportName
} from "@/utils";

/**
 * Renames 'SearchComponent' to 'Search' in both import declarations and JSX usages throughout the entire file.
 *
 * This codemod targets any JSX element identified as 'SearchComponent' and changes its import and usage to 'Search'.
 * This involves updating both the import declaration and all corresponding JSX usages to reflect the new component name.
 *
 * The function executes the following steps:
 * 1. Check if there is an import for 'SearchComponent' and if so, update it to 'Search'.
 * 2. Traverse through the AST and identify all instances of 'SearchComponent'.
 * 3. For each instance found, rename 'SearchComponent' to 'Search' within the JSX.
 *
 * Notes:
 * - This function is designed to handle only JSX elements and imports specifically named 'SearchComponent'.
 *   If the component is imported under a different alias, those instances will need to be handled separately.
 */
export default function searchComponentRenameToSearch(fileInfo: FileInfo, api: API): string {
  const [j, root] = setup(api, fileInfo);
  const oldName = "SearchComponent";
  const newName = "Search";

  const imports = getCoreImportsForFile(root);
  if (!imports.length) return root.toSource();

  imports.forEach(importDeclaration => updateComponentImportName(j, importDeclaration, oldName, newName));

  const searchComponentElements = findComponentElements(root, oldName);
  searchComponentElements.forEach(path => {
    renameComponentIdentifierName(path, oldName, newName);
  });

  return root.toSource();
}
