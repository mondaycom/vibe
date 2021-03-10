import { useCallback, useEffect, useRef, useState } from "react";
import useResizeObserver from "./useResizeObserver";

// Use this hook when you want to get the index of the child which should be hidden from

function useElementsOverflowingIndex({ ref, children, paddingSize, resizeDebounceTime }) {
  const [indexToSplit, setIndexToSplit] = useState(-1);
  const aggregatedChildLengths = useRef([]);

  const onResize = useCallback(
    ({ borderBoxSize }) => {
      setIndexToSplit(
        aggregatedChildLengths.current.findIndex(
          ({ totalLength }) => totalLength > borderBoxSize.inlineSize - paddingSize
        )
      );
    },
    [aggregatedChildLengths, setIndexToSplit, paddingSize]
  );

  useResizeObserver({
    ref,
    callback: onResize,
    debounceTime: resizeDebounceTime
  });

  useEffect(() => {
    if (!ref.current) return;
    const childLengthsArray = [];
    let totalLength = 0;
    ref.current.children.forEach(node => {
      const childLength = node.clientWidth;
      totalLength += childLength;
      childLengthsArray.push({ childLength, totalLength });
    });

    aggregatedChildLengths.current = childLengthsArray;
  }, [children, ref, aggregatedChildLengths]);

  return indexToSplit;
}

export default useElementsOverflowingIndex;
