import { useEffect, useState } from "react";

export function useHiddenOptionsData({
  isMultiline,
  ref,
  selectedOptionsCount,
  chipClassName,
  chipWrapperClassName,
  isCounterShown
}) {
  const [overflowIndex, setOverflowIndex] = useState(-1);
  useEffect(() => {
    let finalOverflowingIndex = -1;

    if (ref?.children && !isMultiline) {
      const { bottom: parentBottom } = ref.getBoundingClientRect();
      let optionIndex = 0;
      let childIndex = 0;

      while (childIndex < ref.children.length && optionIndex < selectedOptionsCount) {
        const child = ref.children[childIndex];
        const chipClasses = chipClassName.split(" ");

        const isOption =
          child.classList.contains(chipWrapperClassName) ||
          chipClasses.some(className => child.classList.contains(className));

        if (isOption) {
          const { bottom: childBottom } = child.getBoundingClientRect();
          if (childBottom > parentBottom) {
            finalOverflowingIndex = optionIndex;
            break;
          }
          optionIndex++;
        }
        childIndex++;
      }
    }

    setOverflowIndex(finalOverflowingIndex);
  }, [ref, isMultiline, selectedOptionsCount, chipWrapperClassName, chipClassName, isCounterShown]);

  const hiddenOptionsCount = overflowIndex > -1 ? selectedOptionsCount - overflowIndex : 0;
  return { overflowIndex, hiddenOptionsCount };
}
