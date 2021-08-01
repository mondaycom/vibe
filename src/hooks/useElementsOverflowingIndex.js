import { useCallback, useEffect, useState } from "react";
import last from "lodash/last";
import useResizeObserver from "./useResizeObserver";

// Use this hook when you want to get the index of the child which should be hidden from

function useElementsOverflowingIndex({ ref, children, paddingSize, resizeDebounceTime, ignoreLast }) {
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
  const [indexToSplit, setIndexToSplit] = useState(null);

  useEffect(() => {
    if (ignoreLast) {
      const withoutLast = aggregatedChildLengths.slice(0, -1);
      const allInWithoutLast = !withoutLast.find(({ totalLength }) => totalLength > size - paddingSize);
      if (allInWithoutLast) {
        setIndexToSplit(-1);
      } else {
        const lastSize = aggregatedChildLengths.length > 0 ? last(aggregatedChildLengths).childLength : 0;
        setIndexToSplit(
          aggregatedChildLengths.findIndex(({ totalLength }) => totalLength > size - paddingSize - lastSize)
        );
      }
    } else {
      setIndexToSplit(aggregatedChildLengths.findIndex(({ totalLength }) => totalLength > size - paddingSize));
    }
  }, [aggregatedChildLengths, size, setIndexToSplit, paddingSize, ignoreLast]);

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
