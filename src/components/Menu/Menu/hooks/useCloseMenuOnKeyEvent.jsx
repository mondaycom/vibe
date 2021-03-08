import { useCallback } from "react";
import useKeyEvent from "../../../../hooks/useKeyEvent";

const KEYS = ["Escape", "ArrowLeft"];

export default function useCloseMenuOnKeyEvent(hasOpenSubMenu, onCloseMenu, ref, closeSubMenu) {
  const onEscapeOrLeftArrowClick = useCallback(
    event => {
      if (hasOpenSubMenu) return false;
      onCloseMenu();
      if (closeSubMenu) {
        closeSubMenu();
        event.preventDefault();
        event.stopPropagation();
      } else {
        ref && ref.current && ref.current.blur();
      }
    },
    [closeSubMenu, hasOpenSubMenu, ref, onCloseMenu]
  );

  useKeyEvent({
    keys: KEYS,
    callback: onEscapeOrLeftArrowClick,
    ref
  });
}
