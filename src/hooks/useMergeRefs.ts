/* eslint-disable */
// Disabling eslint cause of lots of any usages
import { LegacyRef, MutableRefObject, RefObject, useEffect, useRef } from "react";

/*
 * const Component = React.forwardRef((props, ref) => {
 *   const internalRef = React.useRef();
 *   const mergedRef = useMergeRefs({ refs: [ref, internalRef] });
 *   return <div {...props} ref={mergedRef} />;
 * });
 */

function useMergeRefs<T = any>({ refs = [] }: { refs: Array<MutableRefObject<any> | LegacyRef<any>> }): RefObject<T> {
  const mergedRef = useRef<T>(null);

  useEffect(() => {
    refs.forEach(ref => {
      if (!ref) return;

      if (typeof ref === "function") {
        ref(mergedRef.current);
      } else {
        assignRef(ref, mergedRef.current);
      }
    });
  }, [refs]);

  return mergedRef as RefObject<T>;
}

export function assignRef(ref: MutableRefObject<any> | LegacyRef<any>, value: any) {
  if (ref === null) return;

  if (typeof ref === "function") {
    ref(value);
    return;
  }

  try {
    (ref as MutableRefObject<any>).current = value;
  } catch (error) {
    console.error(error);
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
}

export default useMergeRefs;
/* eslint-enable */
