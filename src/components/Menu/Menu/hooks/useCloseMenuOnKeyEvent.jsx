import { useCallback } from "react";
import useKeyEvent from "../../../../hooks/useKeyEvent";

export default function useCloseMenuOnKeyEvent(hasOpenSubMenu, onCloseMenu, refElement, closeSubMenu) {
  const onEscapeOrLeftArrowClick = useCallback(
    event => {
      if (hasOpenSubMenu) return false;
      onCloseMenu();
      if (closeSubMenu) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        refElement && refElement.blur();
      }
    },
    [closeSubMenu, hasOpenSubMenu, refElement, onCloseMenu]
  );

  useKeyEvent({
    keys: ["Escape", "ArrowLeft"],
    callback: onEscapeOrLeftArrowClick
  });
}
