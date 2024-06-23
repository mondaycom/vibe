import { API, FileInfo } from "jscodeshift";
import { findComponentElements, getCoreImportsForFile, setup, removeProp } from "@/utils";

/**
 * Removes the 'clickable' prop from all instances of the 'Chips' component across the codebase.
 *
 * This codemod targets all JSX elements identified as 'Chips' and ensures that the 'clickable' prop,
 * which may be deprecated or no longer needed, is completely removed to comply with updated component APIs.
 *
 * The function executes the following steps:
 * 1. Ensure there is an import for 'monday-ui-react-core' in the file root.
 * 2. Traverse through the AST and identify all instances of Chips.
 * 3. For each instance found, remove the 'clickable' prop.
 *
 * Notes:
 * - This function is designed to handle only JSX elements named 'Chips'. If the component is imported under
 *   a different alias, those instances will not be transformed.
 * - The removal of the 'clickable' prop is expected to not affect the rendering or functionality of the 'Chips'
 *   components, assuming the prop is not required for essential behaviors.
 */
export default function chipsRemovePropClickable(fileInfo: FileInfo, api: API): string {
  const [_j, root] = setup(api, fileInfo);
  if (getCoreImportsForFile(root).length) {
    const chipsElements = findComponentElements(root, "Chips");
    chipsElements.forEach(path => {
      removeProp(path, "clickable");
    });
  }

  return root.toSource();
}
