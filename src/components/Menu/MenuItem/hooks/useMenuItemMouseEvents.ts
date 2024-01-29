import { RefObject, useLayoutEffect } from "react";
import useIsMouseEnter from "../../../../hooks/useIsMouseEnter";
import usePrevious from "../../../../hooks/usePrevious";

export default function useMenuItemMouseEvents({
  ref,
  resetOpenSubMenuIndex,
  setSubMenuIsOpenByIndex,
  isActive,
  setActiveItemIndex,
  index,
  hasChildren,
  splitMenuItemIconButtonRef,
  splitMenuItem = false
}: {
  ref: RefObject<HTMLElement>;
  resetOpenSubMenuIndex: () => void;
  setSubMenuIsOpenByIndex: (index: number, isOpen: boolean) => void;
  isActive: boolean;
  setActiveItemIndex: (index: number) => void;
  index: number;
  hasChildren: boolean;
  splitMenuItemIconButtonRef?: React.RefObject<HTMLElement>;
  splitMenuItem?: boolean;
}) {
  const isMouseEnter = useIsMouseEnter({ ref });
  const isMouseEnterOnIconButton = useIsMouseEnter({ ref: splitMenuItemIconButtonRef });
  const prevIsMouseEnter = usePrevious(isMouseEnter);
  const prevIsMouseEnterOnIconButton = usePrevious(isMouseEnterOnIconButton);

  useLayoutEffect(() => {
    if (!isMouseEnterOnIconButton) return;

    if (isMouseEnterOnIconButton === prevIsMouseEnterOnIconButton) return;

    if (isActive) {
      setSubMenuIsOpenByIndex(index, true);
    } else {
      resetOpenSubMenuIndex();
    }
  }, [
    setSubMenuIsOpenByIndex,
    index,
    isMouseEnterOnIconButton,
    prevIsMouseEnterOnIconButton,
    isActive,
    resetOpenSubMenuIndex
  ]);

  useLayoutEffect(() => {
    if (!isMouseEnter) return;
    if (isMouseEnter === prevIsMouseEnter) return;

    if (!setSubMenuIsOpenByIndex || !resetOpenSubMenuIndex) {
      console.error("MenuItem must be a first level child of a menu");
      return;
    }

    resetOpenSubMenuIndex();

    if (!isActive && !splitMenuItem) {
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

    if (!isActive && splitMenuItem) {
      setActiveItemIndex(index);

      if (isMouseEnterOnIconButton) {
        setSubMenuIsOpenByIndex(index, true);
      }
    }
  }, [
    resetOpenSubMenuIndex,
    prevIsMouseEnter,
    isMouseEnter,
    isMouseEnterOnIconButton,
    setSubMenuIsOpenByIndex,
    isActive,
    setActiveItemIndex,
    index,
    hasChildren,
    splitMenuItem
  ]);

  return isMouseEnter;
}
