import { MutableRefObject, useEffect, useRef, useState } from "react";

// Same us https://usehooks.com/useHover/ but for blur and focus
export default function useFocus(): [MutableRefObject<HTMLElement>, boolean] {
  const [value, setValue] = useState<boolean>(false);
  const ref = useRef<HTMLElement>(null);
  const handleFocus = (): void => setValue(true);
  const handleBlur = (): void => setValue(false);
  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener("focus", handleFocus);
        node.addEventListener("blur", handleBlur);
        return () => {
          node.removeEventListener("focus", handleFocus);
          node.removeEventListener("blur", handleBlur);
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ref.current] // Recall only if ref changes
  );
  return [ref, value];
}
