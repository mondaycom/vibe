import { API, FileInfo } from "jscodeshift";
import { findComponentElements, getCoreImportsForFile, setup } from "@/utils";
import { updatePropName } from "@/utils";

/**
 * Transforms all instances of the AttentionBox component by renaming the 'componentClassName' prop to 'className'.
 *
 * This codemod targets any JSX element identified as an AttentionBox from Vibe and changes its prop name from
 * 'componentClassName' to 'className'.
 *
 * The function executes the following steps:
 * 1. Make sure there's an import for monday-ui-react-core in the file root.
 * 2. Traverse through the AST and identify all instances of AttentionBox.
 * 3. For each instance found, rename 'componentClassName' to 'className'.
 *
 * Notes:
 * - This function is designed to handle only JSX elements named 'AttentionBox'. If the component is imported under
 *   a different alias, those instances will not be transformed.
 * - The function ensures that the transformation maintains the semantic integrity of the JSX elements, focusing
 *   only on renaming the props without altering other attributes or children.
 * - It is assumed that no 'className' prop exists alongside 'componentClassName'; if both are present,
 *   manual review of the transformed code is recommended to resolve any conflicts.
 */
export default function attentionBoxPropComponentClassNameToClassName(fileInfo: FileInfo, api: API): string {
  const [_j, root] = setup(api, fileInfo);
  if (getCoreImportsForFile(root).length) {
    const attentionBoxElements = findComponentElements(root, "AttentionBox");
    attentionBoxElements.forEach(path => {
      updatePropName(path, "componentClassName", "className");
    });
  }

  return root.toSource();
}
