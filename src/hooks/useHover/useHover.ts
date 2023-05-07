import { MutableRefObject, useEffect, useRef, useState } from "react";

// Standard hook implementation https://usehooks.com/useHover/
export default function useHover(): [MutableRefObject<HTMLElement>, boolean] {
  const [value, setValue] = useState<boolean>(false);
  const ref = useRef<HTMLElement>(null);
  const handleMouseOver = (): void => setValue(true);
  const handleMouseOut = (): void => setValue(false);
  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);
        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ref.current] // Recall only if ref changes
  );
  return [ref, value];
}
