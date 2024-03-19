import { MutableRefObject, useCallback, useRef } from "react";

export default function useRefWithCallback(
  onMount: (element: HTMLElement) => void,
  onUnmount?: (element: HTMLElement) => void
): [MutableRefObject<HTMLElement>, (node: HTMLElement) => void] {
  const nodeRef = useRef(null);

  const setRef = useCallback(
    (node: HTMLElement) => {
      if (nodeRef.current && onUnmount) {
        onUnmount(nodeRef.current);
      }

      nodeRef.current = node;

      if (nodeRef.current && onMount) {
        onMount(nodeRef.current);
      }
    },
    [onMount, onUnmount]
  );

  return [nodeRef, setRef];
}
