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
  setSubMenuIsOpenByIndex,
  menuRef,
  isMouseEnter
) {
  const onClickCallback = useCallback(
    event => {
      if (!isActive && !isMouseEnter) return;

      if (!setActiveItemIndex || !setSubMenuIsOpenByIndex) {
        console.error("MenuItem must be a first level child of a menu");
        return;
      }

      if (isActive && hasChildren) {
        setActiveItemIndex(index);
        setSubMenuIsOpenByIndex(index, true);
        return;
      }

      if (shouldShowSubMenu) return;

      const isKeyEvent = !!event.key;

      if (isKeyEvent && onClick && !disabled && isActive) {
        onClick(event);
      }

      if (!isKeyEvent && onClick && !disabled && isMouseEnter) {
        if (!isActive) {
          setActiveItemIndex(index);
          if (hasChildren) {
            setSubMenuIsOpenByIndex(index, true);
          }
        }

        if (!hasChildren) {
          // wait for background of menu item to change before trigger click
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              onClick(event);
            });
          });
        }
      }
    },
    [
      onClick,
      disabled,
      isActive,
      index,
      setActiveItemIndex,
      hasChildren,
      shouldShowSubMenu,
      setSubMenuIsOpenByIndex,
      isMouseEnter
    ]
  );

  useKeyEvent({
    keys: ["Enter", "ArrowRight"],
    callback: onClickCallback,
    ref: menuRef
  });

  return { onClickCallback };
}
