import { useLayoutEffect } from "react";

import useIsMouseEnter from "../../../../hooks/useIsMouseEnter";
import usePrevious from "../../../../hooks/usePrevious";

export default function useMouseLeave(resetOpenSubMenuIndex, hasOpenSubMenu, ref, setActiveItemIndex) {
  const isMouseEnter = useIsMouseEnter({ ref });
  const prevIsMouseEnter = usePrevious(isMouseEnter);

  useLayoutEffect(() => {
    if (isMouseEnter) return;
    if (isMouseEnter === prevIsMouseEnter) return;
    if (hasOpenSubMenu) return;
    resetOpenSubMenuIndex();
    setActiveItemIndex(-1);
  }, [resetOpenSubMenuIndex, ref, prevIsMouseEnter, isMouseEnter, hasOpenSubMenu, setActiveItemIndex]);

  return isMouseEnter;
}
