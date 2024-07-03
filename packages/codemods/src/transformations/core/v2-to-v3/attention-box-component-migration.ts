import { findComponentElements, getCoreImportsForFile, updatePropName, wrap } from "@/utils";
import { TransformationContext } from "@/types";

/**
 * 1. Update the 'componentClassName' prop to 'className'
 */
function transform({ root }: TransformationContext) {
  if (!getCoreImportsForFile(root).length) return;

  const attentionBoxElements = findComponentElements(root, "AttentionBox");
  attentionBoxElements.forEach(path => {
    updatePropName(path, "componentClassName", "className");
  });
}

export default wrap(transform);
