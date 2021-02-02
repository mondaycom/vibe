import { useLayoutEffect, useState } from "react";

export default function useMergeRefs({ ref, maxLines = 1 }) {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const element = ref.current;
  const innerHtml = element && element.innerHTML;

  const overflowingFunction = maxLines > 1 ? isElementOverflowingY : isElementOverflowingX;

  useLayoutEffect(() => {
    if (!element) {
      setIsOverflowing(false);
      return;
    }

    setIsOverflowing(overflowingFunction(element));
  }, [element, overflowingFunction, innerHtml]);
  return isOverflowing;
}

function isElementOverflowingX(domElement) {
  return domElement.clientWidth < domElement.scrollWidth;
}

function isElementOverflowingY(domElement) {
  return domElement.clientHeight < domElement.scrollHeight;
}
