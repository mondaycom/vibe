import { useCallback, useState } from "react";

export default function useSubMenuIndex() {
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);
  const hasOpenSubMenu = openSubMenuIndex || openSubMenuIndex === 0;

  const setSubMenuIsOpenByIndex = useCallback(
    (index, isOpen) => {
      if (hasOpenSubMenu && index !== openSubMenuIndex) return;

      const isOpenIndexValue = isOpen ? index : null;
      setOpenSubMenuIndex(isOpenIndexValue);
    },
    [openSubMenuIndex, setOpenSubMenuIndex, hasOpenSubMenu]
  );

  return { setSubMenuIsOpenByIndex, hasOpenSubMenu, openSubMenuIndex, setOpenSubMenuIndex };
}
