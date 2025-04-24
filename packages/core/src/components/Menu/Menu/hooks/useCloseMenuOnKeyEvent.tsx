import React, { useCallback } from "react";
import useKeyEvent from "../../../../hooks/useKeyEvent";
import { CloseMenuOption } from "../MenuConstants";
import { keyCodes } from "../../../../constants";

const KEYS = [keyCodes.ESCAPE, keyCodes.LEFT_ARROW, keyCodes.TAB];

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
  const onKeyEvent = useCallback(
    (event: React.KeyboardEvent) => {
      const key = event.key;

      if (hasOpenSubMenu) return;

      if (key === keyCodes.LEFT_ARROW && !isSubMenu) {
        return;
      }
      if (![keyCodes.ESCAPE, keyCodes.LEFT_ARROW, keyCodes.TAB].includes(key)) {
        return;
      }

      onCloseMenu({ propagate: false });

      if (onClose) {
        onClose({ propagate: false }, key);
        event.preventDefault();
        event.stopPropagation();
      }
    },
    [onClose, hasOpenSubMenu, onCloseMenu, isSubMenu]
  );

  useKeyEvent({
    keys: KEYS,
    callback: onKeyEvent,
    ref: useDocumentEventListeners ? undefined : ref
  });
}
