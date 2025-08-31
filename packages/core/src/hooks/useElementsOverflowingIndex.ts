import { type ReactNode, type RefObject, useCallback, useEffect, useState } from "react";
import { last } from "es-toolkit/compat";
import useResizeObserver from "./useResizeObserver";

// Use this hook when you want to get the index of the child which should be hidden from
type AggregatedChildResult = { childLength: number; totalLength: number };

function useElementsOverflowingIndex({
  ref,
  children,
  paddingSize,
  resizeDebounceTime,
  ignoreLast
}: {
  ref: RefObject<HTMLElement>;
  children: ReactNode;
  paddingSize: number;
  resizeDebounceTime: number;
  ignoreLast: boolean;
}) {
  const [size, setSize] = useState<number>(null);

  const onResize = useCallback(
    ({ borderBoxSize }: { borderBoxSize: ResizeObserverSize }) => {
      setSize(borderBoxSize.inlineSize);
    },
    [setSize]
  );
  useResizeObserver({
    ref,
    callback: onResize,
    debounceTime: resizeDebounceTime
  });

  const [aggregatedChildLengths, setAggregatedChildLengths] = useState<Array<AggregatedChildResult>>([]);
  const [indexToSplit, setIndexToSplit] = useState<number | null>(null);

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
    const childLengthsArray: Array<AggregatedChildResult> = [];
    let totalLength = 0;
    ref.current.childNodes.forEach((node: HTMLElement) => {
      const childLength = node.clientWidth;
      totalLength += childLength;
      childLengthsArray.push({ childLength, totalLength });
    });
    setAggregatedChildLengths(childLengthsArray);
  }, [children, ref, setAggregatedChildLengths]);

  return indexToSplit;
}

export default useElementsOverflowingIndex;
