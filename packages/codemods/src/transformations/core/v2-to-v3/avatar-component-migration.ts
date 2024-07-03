import { findComponentElements, getCoreImportsForFile, updatePropName, wrap } from "@/utils";
import { TransformationContext } from "@/types";

/**
 * 1. Update the 'isSquare' prop to 'square'
 * 2. Update the 'isDisabled' prop to 'disabled'
 */
function transform({ root }: TransformationContext) {
  if (!getCoreImportsForFile(root).length) return;

  const avatarElements = findComponentElements(root, "Avatar");
  avatarElements.forEach(path => {
    updatePropName(path, { isSquare: "square", isDisabled: "disabled" });
  });
}

export default wrap(transform);
