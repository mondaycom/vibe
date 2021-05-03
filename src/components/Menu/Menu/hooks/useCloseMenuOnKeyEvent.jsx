import { useCallback } from "react";
import useKeyEvent from "../../../../hooks/useKeyEvent";
import { HIDE_SHOW_EVENTS } from "../../../Dialog/consts/dialog-show-hide-event";

const KEYS = ["Escape", "ArrowLeft"];

export default function useCloseMenuOnKeyEvent(
  hasOpenSubMenu,
  onCloseMenu,
  ref,
  onClose,
  isSubMenu,
  useDocumentEventListeners
) {
  const onEscapeOrLeftArrowClick = useCallback(
    event => {
      const isArrowLeftClick = event.key === "ArrowLeft";

      if (isArrowLeftClick && !isSubMenu) {
        return;
      }

      if (hasOpenSubMenu) return false;
      onCloseMenu(event);
      if (onClose) {
        onClose(event, isArrowLeftClick ? "ArrowLeft" : HIDE_SHOW_EVENTS.ESCAPE_KEY);
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
