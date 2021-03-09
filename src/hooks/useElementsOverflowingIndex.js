import { useCallback, useEffect, useState } from "react";
import useResizeObserver from "./useResizeObserver";

function useElementsOverflowingIndex({ ref, children, paddingSize, resizeDebounceTime }) {
  const [size, setSize] = useState(null);

  const onResize = useCallback(
    ({ borderBoxSize }) => {
      setSize(borderBoxSize.inlineSize);
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
