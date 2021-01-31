import { useCallback } from "react";

export default function useOnCloseMenu(setActiveItemIndex, setOpenSubMenuIndex, closeSubMenu) {
  return useCallback(
    _event => {
      setActiveItemIndex(-1);
      setOpenSubMenuIndex(null);
      closeSubMenu && closeSubMenu();
    },
    [closeSubMenu, setOpenSubMenuIndex, setActiveItemIndex]
  );
}
