import { useEffect } from "react";

import useIsMouseEnter from "../../../../hooks/useIsMouseEnter";
import usePrevious from "../../../../hooks/usePrevious";

export default function useMenuItemMouseEvents(
  ref,
  menuRef,
  resetOpenSubMenuIndex,
  setSubMenuIsOpenByIndex,
  isActive,
  setActiveItemIndex,
  index,
  hasChildren
) {
  const isMouseEnter = useIsMouseEnter({ ref });

  const prevIsMouseEnter = usePrevious(isMouseEnter);

  useEffect(() => {
    if (!isMouseEnter) return;
    if (isMouseEnter === prevIsMouseEnter) return;

    if (!setSubMenuIsOpenByIndex || !resetOpenSubMenuIndex) {
      console.error("MenuItem must be a first level child of a menu");
      return;
    }

    if (!isActive) {
      setActiveItemIndex(index);
      if (hasChildren) {
        setSubMenuIsOpenByIndex(index, true);
      } else {
        resetOpenSubMenuIndex();
      }
    }

    if (isActive) {
      setSubMenuIsOpenByIndex(index, !!isMouseEnter);
    }
  }, [
    resetOpenSubMenuIndex,
    prevIsMouseEnter,
    isMouseEnter,
    setSubMenuIsOpenByIndex,
    isActive,
    setActiveItemIndex,
    index,
    hasChildren
  ]);

  return isMouseEnter;
}
