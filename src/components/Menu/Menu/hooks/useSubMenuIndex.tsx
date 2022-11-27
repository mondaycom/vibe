import { useCallback, useState } from "react";

export default function useSubMenuIndex() {
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number>(null);
  const hasOpenSubMenu = !!openSubMenuIndex || openSubMenuIndex === 0;

  const setSubMenuIsOpenByIndex = useCallback(
    (index: number, isOpen: boolean) => {
      const isOpenIndexValue = isOpen ? index : null;
      setOpenSubMenuIndex(isOpenIndexValue);
    },
    [setOpenSubMenuIndex]
  );

  const resetOpenSubMenuIndex = useCallback(() => {
    setOpenSubMenuIndex(null);
  }, [setOpenSubMenuIndex]);

  return { setSubMenuIsOpenByIndex, hasOpenSubMenu, openSubMenuIndex, setOpenSubMenuIndex, resetOpenSubMenuIndex };
}
