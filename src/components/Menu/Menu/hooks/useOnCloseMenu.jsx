import { useCallback } from "react";

export default function useOnCloseMenu(setActiveItemIndex, setOpenSubMenuIndex, closeSubMenu) {
  return useCallback(
    (options = { propagate: false }) => {
      setActiveItemIndex(-1);
      setOpenSubMenuIndex(null);

      if (options.propagate !== false) {
        closeSubMenu && closeSubMenu(options);
      }
    },
    [closeSubMenu, setOpenSubMenuIndex, setActiveItemIndex]
  );
}
