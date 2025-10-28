import { type ForwardedRef, type MutableRefObject, type RefObject, useRef } from "react";
import useIsomorphicLayoutEffect from "./ssr/useIsomorphicLayoutEffect";
/*
 * Example usage:
 * const Component = React.forwardRef((props, ref) => {
 *   const internalRef = React.useRef();
 *   const mergedRef = useMergeRef(ref, internalRef);
 *   return <div {...props} ref={mergedRef} />;
 * });
 */

/**
 * Returns a single ref callback that merges multiple ref callbacks - internal replacement for `useMergeRefs` hook
 * @param refs
 */
export function useMergeRef<T>(...refs: (RefObject<T> | ForwardedRef<T> | null)[]): RefObject<T> {
  const mergedRef = useRef<T>(null);

  useIsomorphicLayoutEffect(() => {
    refs.forEach(ref => {
      if (!ref) return;

      if (typeof ref === "function") {
        ref(mergedRef.current);
      } else {
        (ref as MutableRefObject<T>).current = mergedRef.current;
      }
    });
  }, [refs]);

  return mergedRef;
}
