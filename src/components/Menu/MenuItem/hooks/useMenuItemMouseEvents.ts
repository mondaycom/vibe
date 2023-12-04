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
  hasChildren,
  subMenuButtonRef,
  splitButton = false
}: {
  ref: React.RefObject<HTMLElement>;
  resetOpenSubMenuIndex: () => void;
  setSubMenuIsOpenByIndex: (index: number, isOpen: boolean) => void;
  isActive: boolean;
  setActiveItemIndex: (index: number) => void;
  index: number;
  hasChildren: boolean;
  subMenuButtonRef?: React.RefObject<HTMLElement>;
  splitButton?: boolean;
}) {
  const isMouseEnter = useIsMouseEnter({ ref });
  const isMouseEnterOnIconButton = useIsMouseEnter({ ref: subMenuButtonRef });
  const prevIsMouseEnter = usePrevious(isMouseEnter);
  const prevIsMouseEnterOnIconButton = usePrevious(isMouseEnterOnIconButton);

  useLayoutEffect(() => {
    if (!isMouseEnterOnIconButton) return;

    if (isMouseEnterOnIconButton === prevIsMouseEnterOnIconButton) return;

    // if (!setSubMenuIsOpenByIndex || !resetOpenSubMenuIndex) {
    //   console.error("MenuItem must be a first level child of a menu");
    //   return;
    // }

    if (isActive) {
      setSubMenuIsOpenByIndex(index, true);
    } else {
      resetOpenSubMenuIndex();
    }
    // } else {
    // resetOpenSubMenuIndex();
    // }
  }, [
    setSubMenuIsOpenByIndex,
    subMenuButtonRef,
    index,
    hasChildren,
    splitButton,
    isMouseEnterOnIconButton,
    prevIsMouseEnterOnIconButton,
    isActive,
    resetOpenSubMenuIndex,
    setActiveItemIndex
  ]);

  useLayoutEffect(() => {
    if (!isMouseEnter) return;
    if (isMouseEnter === prevIsMouseEnter) return;

    if (!setSubMenuIsOpenByIndex || !resetOpenSubMenuIndex) {
      console.error("MenuItem must be a first level child of a menu");
      return;
    }

    if (!isActive && !splitButton) {
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

    if (!isActive && splitButton) {
      setActiveItemIndex(index);
    } else {
      // setActiveItemIndex(-1);
    }
  }, [
    resetOpenSubMenuIndex,
    prevIsMouseEnter,
    isMouseEnter,
    setSubMenuIsOpenByIndex,
    isActive,
    setActiveItemIndex,
    index,
    hasChildren,
    splitButton
  ]);

  return isMouseEnter;
}
