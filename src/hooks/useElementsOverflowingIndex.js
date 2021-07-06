import { useCallback, useEffect, useState } from "react";
import useResizeObserver from "./useResizeObserver";

// Use this hook when you want to get the index of the child which should be hidden from

function useElementsOverflowingIndex({ ref, children, paddingSize, resizeDebounceTime }) {
  const [size, setSize] = useState(null);

  const onResize = useCallback(
    () => {
      setSize(ref.current.scrollWidth);
    },
    [setSize]
  );
  useResizeObserver({
    ref,
    callback: onResize,
    debounceTime: resizeDebounceTime
  });

  const [aggregatedChildLengths, setAggregatedChildLengths] = useState([]);
  const [indexToSplit, setIndexToSplit] = useState(-1);

  useEffect(() => {
    setIndexToSplit(aggregatedChildLengths.findIndex(({ totalLength }) => totalLength > size - paddingSize));
  }, [aggregatedChildLengths, size, setIndexToSplit, paddingSize]);

  useEffect(() => {
    if (!ref.current) return;
    const childLengthsArray = [];
    let totalLength = 0;
    ref.current.childNodes.forEach(node => {
      const childLength = node.clientWidth;
      totalLength += childLength;
      childLengthsArray.push({ childLength, totalLength });
    });
    setAggregatedChildLengths(childLengthsArray);
  }, [children, ref, setAggregatedChildLengths]);

  return indexToSplit;
}

export default useElementsOverflowingIndex;
