import { useCallback } from "react";
import { CloseMenuOption } from "../MenuConstants";

export default function useOnCloseMenu({
  setActiveItemIndex,
  setOpenSubMenuIndex,
  onClose
}: {
  setActiveItemIndex: (index: number) => void;
  setOpenSubMenuIndex: (index: number) => void;
  onClose: (option: CloseMenuOption) => void;
}) {
  return useCallback(
    (option: CloseMenuOption = { propagate: false }) => {
      setActiveItemIndex(-1);
      setOpenSubMenuIndex(null);
      onClose && onClose(option);
    },
    [onClose, setOpenSubMenuIndex, setActiveItemIndex]
  );
}
