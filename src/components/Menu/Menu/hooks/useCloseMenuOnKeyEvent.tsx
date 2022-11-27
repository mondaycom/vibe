import React, { useCallback } from "react";
import useKeyEvent from "../../../../hooks/useKeyEvent";
import { CloseMenuOption } from "../MenuConstants";
import { keyCodes } from "../../../../constants";

const KEYS = ["Escape", "ArrowLeft"];

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
  const onEscapeOrLeftArrowClick = useCallback(
    (event: React.KeyboardEvent) => {
      const isArrowLeftClick = event.key === "ArrowLeft";

      if (isArrowLeftClick && !isSubMenu) {
        return;
      }

      if (hasOpenSubMenu) return false;
      onCloseMenu(event as CloseMenuOption);
      if (onClose) {
        onClose(event as CloseMenuOption, isArrowLeftClick ? keyCodes.LEFT_ARROW : keyCodes.ESCAPE);
        event.preventDefault();
        event.stopPropagation();
      }
    },
    [onClose, hasOpenSubMenu, onCloseMenu, isSubMenu]
  );

  useKeyEvent({
    keys: KEYS,
    callback: onEscapeOrLeftArrowClick,
    ref: useDocumentEventListeners ? undefined : ref
  });
}
