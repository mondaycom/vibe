import { useMemo } from "react";

/*
 * const Component = React.forwardRef((props, ref) => {
 *   const internalRef = React.useRef();
 *   const mergedRef = useMergeRefs({ refs: [ref, internalRef] });
 *   return <div {...props} ref={mergedRef} />;
 * });
 */
export default function useMergeRefs({ refs = [] }) {
  return useMemo(() => {
    if (refs.every(ref => ref === null)) return null;

    return node => {
      refs.forEach(ref => {
        if (ref) assignRef(ref, node);
      });
    };
  }, [refs]);
}

function assignRef(ref, value) {
  if (ref === null) return;

  if (typeof ref === "function") {
    ref(value);
    return;
  }

  try {
    // eslint-disable-next-line no-param-reassign
    ref.current = value;
  } catch (error) {
    console.error(error);
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
}
