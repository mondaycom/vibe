import { findComponentElements, getCoreImportsForFile, removeProp, isPropExists, updatePropName, wrap } from "@/utils";
import { TransformationContext } from "@/types";

/**
 * 1. Remove the 'clickable' prop when 'onClick' prop exists
 * 2. Remove the 'isClickable' prop when 'onClick' prop exists
 * 3. Update the 'dataTestId' prop to 'data-testid'
 */
function transform({ root, j }: TransformationContext) {
  if (!getCoreImportsForFile(root).length) return;

  const chipsElements = findComponentElements(root, "Chips");
  chipsElements.forEach(path => {
    if (isPropExists(j, path, "onClick")) {
      removeProp(j, path, "clickable", "isClickable");
    }
    updatePropName(path, { dataTestId: "data-testid" });
  });
}

export default wrap(transform);
