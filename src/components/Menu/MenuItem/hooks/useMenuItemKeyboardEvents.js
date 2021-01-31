import { useCallback } from "react";

import useKeyEvent from "../../../../hooks/useKeyEvent";

export default function useMenuItemKeyboardEvents(
  onClick,
  disabled,
  isActive,
  index,
  setActiveItemIndex,
  hasChildren,
  shouldShowSubMenu,
  setSubMenuIsOpenByIndex
) {
  const onClickCallback = useCallback(
    event => {
      if (!isActive) return;

      if (isActive && hasChildren) {
        setActiveItemIndex(index);
        setSubMenuIsOpenByIndex(index, true);
        return;
      }

      if (shouldShowSubMenu) return;

      if (onClick && !disabled && isActive) {
        onClick(event);
      }
    },
    [onClick, disabled, isActive, index, setActiveItemIndex, hasChildren, shouldShowSubMenu, setSubMenuIsOpenByIndex]
  );

  useKeyEvent({
    keys: ["Enter", "ArrowRight"],
    callback: onClickCallback
  });

  return { onClickCallback };
}
