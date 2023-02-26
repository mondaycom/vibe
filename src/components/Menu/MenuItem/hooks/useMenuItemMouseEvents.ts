import React, { useLayoutEffect } from "react";
import useIsMouseEnter from "../../../../hooks/useIsMouseEnter";
import usePrevious from "../../../../hooks/usePrevious";

export default function useMenuItemMouseEvents({
  ref,
  resetOpenSubMenuIndex,
  setSubMenuIsOpenByIndex,
  isActive,
  setActiveItemIndex,
  index,
  hasChildren
}: {
  ref: React.RefObject<HTMLElement>;
  resetOpenSubMenuIndex: () => void;
  setSubMenuIsOpenByIndex: (index: number, isOpen: boolean) => void;
  isActive: boolean;
  setActiveItemIndex: (index: number) => void;
  index: number;
  hasChildren: boolean;
}) {
  const isMouseEnter = useIsMouseEnter({ ref });

  const prevIsMouseEnter = usePrevious(isMouseEnter);

  useLayoutEffect(() => {
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

    if (isActive && hasChildren) {
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
