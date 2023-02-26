import React, { useCallback } from "react";
import useKeyEvent from "../../../../hooks/useKeyEvent";
import { keyCodes } from "../../../../constants";
import { CloseMenuOption } from "../../Menu/MenuConstants";

const KEYS = [keyCodes.ENTER, keyCodes.RIGHT_ARROW];

export default function useMenuItemKeyboardEvents({
  onClick,
  disabled,
  isActive,
  index,
  setActiveItemIndex,
  hasChildren,
  shouldShowSubMenu,
  setSubMenuIsOpenByIndex,
  menuRef,
  isMouseEnter,
  closeMenu,
  useDocumentEventListeners
}: {
  onClick: (event: React.MouseEvent | React.KeyboardEvent) => void;
  disabled: boolean;
  isActive: boolean;
  index: number;
  hasChildren: boolean;
  shouldShowSubMenu: boolean;
  setSubMenuIsOpenByIndex: (index: number, isOpen: boolean) => void;
  setActiveItemIndex: (index: number) => void;
  menuRef: React.RefObject<HTMLElement>;
  isMouseEnter: boolean;
  closeMenu: (option: CloseMenuOption) => void;
  useDocumentEventListeners: boolean;
}) {
  const onClickCallback = useCallback(
    (event: React.MouseEvent | React.KeyboardEvent) => {
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

      const isKeyEvent = event instanceof KeyboardEvent;

      const clickCallback = () => {
        event.preventDefault();
        onClick(event);
        closeMenu({ propagate: true });
      };

      if (isKeyEvent && onClick && !disabled && isActive) {
        if ((event as React.KeyboardEvent).key === "ArrowRight") {
          return;
        }
        clickCallback();
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
              clickCallback();
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
      isMouseEnter,
      closeMenu
    ]
  );

  useKeyEvent({
    keys: KEYS,
    callback: onClickCallback,
    ref: useDocumentEventListeners ? undefined : menuRef
  });

  return { onClickCallback };
}
