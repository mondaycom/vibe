import { useCallback } from "react";
import useKeyEvent from "../../../../hooks/useKeyEvent";

export default function useCloseMenuOnKeyEvent(hasOpenSubMenu, onCloseMenu, ref, closeSubMenu) {
  const onEscapeOrLeftArrowClick = useCallback(
    event => {
      if (hasOpenSubMenu) return false;
      onCloseMenu();
      if (closeSubMenu) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        ref && ref.current && ref.current.blur();
      }
    },
    [closeSubMenu, hasOpenSubMenu, ref, onCloseMenu]
  );

  useKeyEvent({
    keys: ["Escape", "ArrowLeft"],
    callback: onEscapeOrLeftArrowClick,
    ref
  });
}
