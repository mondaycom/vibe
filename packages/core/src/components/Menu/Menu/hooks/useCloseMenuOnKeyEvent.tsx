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

      let propagate = false;
      let shouldPreventDefault = false;

      if (key === keyCodes.ESCAPE) {
        propagate = true;
        shouldPreventDefault = true;
      } else if (key === keyCodes.LEFT_ARROW) {
        if (isSubMenu) {
          propagate = true;
          shouldPreventDefault = true;
        } else {
          return;
        }
      } else if (key === keyCodes.TAB) {
        propagate = true;
        shouldPreventDefault = true;
      } else {
        return;
      }

      if (shouldPreventDefault) {
        event.preventDefault();
        event.stopPropagation();
      }

      onCloseMenu({ propagate: false });

      if (onClose) {
        onClose({ propagate }, key);
      }
    },
    [hasOpenSubMenu, isSubMenu, onCloseMenu, onClose]
  );

  useKeyEvent({
    keys: KEYS,
    callback: onKeyEvent,
    ref: useDocumentEventListeners ? undefined : ref
  });
}
