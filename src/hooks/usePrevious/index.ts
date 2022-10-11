import { useLayoutEffect, useRef } from "react";

export default function usePrevious<Type>(value: Type): Type {
  const ref = useRef(undefined);
  useLayoutEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
