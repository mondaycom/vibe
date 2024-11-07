import React from "react";
import useIsMouseEnter from "../../../../hooks/useIsMouseEnter";
import usePrevious from "../../../../hooks/usePrevious";
import useIsomorphicLayoutEffect from "../../../../hooks/ssr/useIsomorphicLayoutEffect";

export default function useMouseLeave({
  resetOpenSubMenuIndex,
  hasOpenSubMenu,
  ref,
  setActiveItemIndex
}: {
  resetOpenSubMenuIndex: () => void;
  hasOpenSubMenu: boolean;
  ref: React.RefObject<HTMLElement>;
  setActiveItemIndex: (index: number) => void;
}) {
  const isMouseEnter = useIsMouseEnter({ ref });
  const prevIsMouseEnter = usePrevious(isMouseEnter);

  useIsomorphicLayoutEffect(() => {
    if (isMouseEnter) return;
    if (isMouseEnter === prevIsMouseEnter) return;
    if (hasOpenSubMenu) return;
    resetOpenSubMenuIndex();
    setActiveItemIndex(-1);
  }, [resetOpenSubMenuIndex, ref, prevIsMouseEnter, isMouseEnter, hasOpenSubMenu, setActiveItemIndex]);

  return isMouseEnter;
}
