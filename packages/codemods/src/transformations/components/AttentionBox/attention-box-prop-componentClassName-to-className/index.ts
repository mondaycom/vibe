import { API, FileInfo } from "jscodeshift";
import { getCoreImportsForFile, setup } from "@/utils";
import { updateComponentPropName } from "@/utils";

/**
 * Transforms all instances of the AttentionBox component by renaming the 'componentClassName' prop to 'className'.
 *
 * This codemod targets any JSX element identified as an AttentionBox from Vibe and changes its prop name from
 * 'componentClassName' to 'className'.
 *
 * The function executes the following steps:
 * 1. Make sure there's an import for monday-ui-react-core in the file root
 * 2. Utilize a utility function to traverse through the AST and identify any instances of AttentionBox.
 * 3. For each instance found, check if the 'componentClassName' prop exists.
 *    - If it exists, rename it to 'className'.
 * 4. If multiple AttentionBox instances are found, each is processed in isolation to ensure that all relevant props are updated.
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
  const [j, root] = setup(api, fileInfo);
  if (getCoreImportsForFile(root).length) {
    updateComponentPropName(j, root, "AttentionBox", "componentClassName", "className");
  }

  return root.toSource();
}
