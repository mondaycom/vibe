import React, { useCallback } from "react";
import useKeyEvent from "../../../../hooks/useKeyEvent";
import { CloseMenuOption } from "../MenuConstants";
import { keyCodes } from "../../../../constants";

const KEYS = [keyCodes.ESCAPE, keyCodes.LEFT_ARROW];

export default function useCloseMenuOnKeyEvent({
  hasOpenSubMenu,
  onCloseMenu,
  ref,
  onClose,
  isSubMenu,
  useDocumentEventListeners
}: {
  hasOpenSubMenu: boolean;
  onCloseMenu: (option: CloseMenuOption) => void;
  ref: React.RefObject<HTMLElement>;
  onClose: (option: CloseMenuOption, key?: string) => void;
  isSubMenu: boolean;
  useDocumentEventListeners: boolean;
}) {
  const onEscapeOrLeftArrowKey = useCallback(
    (event: React.KeyboardEvent) => {
      const isArrowLeftClick = event.key === keyCodes.LEFT_ARROW;

      if (isArrowLeftClick && !isSubMenu) {
        return;
      }

      if (hasOpenSubMenu) return false;
      onCloseMenu({ propagate: false });
      if (onClose) {
        onClose({ propagate: false }, isArrowLeftClick ? keyCodes.LEFT_ARROW : keyCodes.ESCAPE);
        event.preventDefault();
        event.stopPropagation();
      }
    },
    [onClose, hasOpenSubMenu, onCloseMenu, isSubMenu]
  );

  useKeyEvent({
    keys: KEYS,
    callback: onEscapeOrLeftArrowKey,
    ref: useDocumentEventListeners ? undefined : ref
  });
}
