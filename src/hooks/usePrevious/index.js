import { useLayoutEffect, useRef } from "react";

export default function usePrevious(value) {
  const ref = useRef();
  useLayoutEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
