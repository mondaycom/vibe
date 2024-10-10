import { useRef } from "react";
import useIsomorphicLayoutEffect from "../ssr/useIsomorphicLayoutEffect";

export default function usePrevious<Type>(value: Type): Type {
  const ref = useRef(undefined);
  useIsomorphicLayoutEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
