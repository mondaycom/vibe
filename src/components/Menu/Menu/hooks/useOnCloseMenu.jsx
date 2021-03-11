import { useCallback } from "react";

export default function useOnCloseMenu(setActiveItemIndex, setOpenSubMenuIndex, onClose) {
  return useCallback(
    (options = {}) => {
      setActiveItemIndex(-1);
      setOpenSubMenuIndex(null);
      onClose && onClose(options);
    },
    [onClose, setOpenSubMenuIndex, setActiveItemIndex]
  );
}
