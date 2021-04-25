import { useCallback } from "react";
import useKeyEvent from "../../../../hooks/useKeyEvent";

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
      onCloseMenu();
      if (onClose) {
        onClose();
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
