import { useMemo } from "react";

export function useHiddenOptionsData({ isMultiline, ref, selectedOptionsCount, chipClassName }) {
  const overflowingIndex = useMemo(() => {
    let finalOverflowingIndex = -1;
    if (ref?.children && !isMultiline) {
      const { bottom: parentBottom } = ref.getBoundingClientRect();
      let optionIndex = 0;
      const childIndex = 0;

      while (childIndex < ref.children.length && optionIndex < selectedOptionsCount) {
        const child = ref.children[childIndex];
        const isOption = child.classList.contains(chipClassName);
        if (isOption) {
          const { bottom: childBottom } = child.getBoundingClientRect();
          if (childBottom > parentBottom) {
            finalOverflowingIndex = optionIndex;
            break;
          }
          optionIndex++;
        }
      }
    }
    return finalOverflowingIndex;
  }, [ref, isMultiline, selectedOptionsCount, chipClassName]);
  const hiddenOptionsCount = overflowingIndex > -1 ? selectedOptionsCount - overflowingIndex + 1 : 0;
  return { overflowingIndex, hiddenOptionsCount };
}
