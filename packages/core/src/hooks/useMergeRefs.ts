import { LegacyRef, MutableRefObject, useMemo } from "react";

/*
 * const Component = React.forwardRef((props, ref) => {
 *   const internalRef = React.useRef();
 *   const mergedRef = useMergeRefs({ refs: [ref, internalRef] });
 *   return <div {...props} ref={mergedRef} />;
 * });
 */

// TODO deprecate / replace with useMergeRef in next major version - https://monday.monday.com/boards/3532714909/pulses/5657904659
/**
 * Returns a single ref callback that merges multiple ref callbacks
 * @deprecated - for internal usage - use `useMergeRef` hook instead
 * @param refs
 */
export default function useMergeRefs<T = any>({ refs = [] }: { refs: Array<MutableRefObject<T> | LegacyRef<T>> }) {
  return useMemo(() => {
    if (refs.every(ref => ref === null)) return null;

    return (node: HTMLElement) => {
      refs.forEach(ref => {
        if (ref) assignRef(ref, node);
      });
    };
  }, [refs]);
}

function assignRef(ref: MutableRefObject<any> | LegacyRef<any>, value: HTMLElement) {
  if (ref === null) return;

  if (typeof ref === "function") {
    ref(value);
    return;
  }

  try {
    // eslint-disable-next-line no-param-reassign
    (ref as MutableRefObject<any>).current = value;
  } catch (error) {
    console.error(error);
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
}
