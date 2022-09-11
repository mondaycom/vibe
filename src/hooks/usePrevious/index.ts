import { useLayoutEffect, useRef } from "react";

export default function usePrevious(value: unknown) {
  const ref = useRef(undefined);
  useLayoutEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
