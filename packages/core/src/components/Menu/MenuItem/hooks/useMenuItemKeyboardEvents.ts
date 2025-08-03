import type React from "react";
import { useCallback } from "react";
import useKeyEvent from "../../../../hooks/useKeyEvent";
import { keyCodes } from "../../../../constants";
import { type CloseMenuOption } from "../../Menu/MenuConstants";

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
  useDocumentEventListeners,
  splitMenuItem,
  isMouseEnterMenuItem,
  isMouseEnterIconButton
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
  splitMenuItem?: boolean;
  isMouseEnterMenuItem?: boolean;
  isMouseEnterIconButton?: boolean;
}) {
  const onClickCallback = useCallback(
    (event: React.MouseEvent | React.KeyboardEvent) => {
      if (!isActive && !isMouseEnter) return;
      if (!setActiveItemIndex || !setSubMenuIsOpenByIndex) {
        console.error("MenuItem must be a first level child of a menu");
        return;
      }

      const isKeyEvent = event instanceof KeyboardEvent;

      if (isActive && hasChildren) {
        setActiveItemIndex(index);
        if (!splitMenuItem || isMouseEnterIconButton) {
          setSubMenuIsOpenByIndex(index, true);
          return;
        }
      }

      if (isKeyEvent && splitMenuItem) {
        setSubMenuIsOpenByIndex(index, true);
      }

      if (shouldShowSubMenu) return;

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

        if ((splitMenuItem && isMouseEnterMenuItem && !isMouseEnterIconButton) || !hasChildren) {
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
      isActive,
      isMouseEnter,
      setActiveItemIndex,
      setSubMenuIsOpenByIndex,
      hasChildren,
      splitMenuItem,
      shouldShowSubMenu,
      onClick,
      disabled,
      index,
      closeMenu,
      isMouseEnterMenuItem,
      isMouseEnterIconButton
    ]
  );

  useKeyEvent({
    keys: KEYS,
    callback: onClickCallback,
    ref: useDocumentEventListeners ? undefined : menuRef
  });

  return { onClickCallback };
}
