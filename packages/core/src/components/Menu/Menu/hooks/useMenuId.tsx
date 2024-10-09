import { useState } from "react";
import useIsomorphicLayoutEffect from "../../../../hooks/ssr/useIsomorphicLayoutEffect";

let menuIdCounter = 0;
export const generateMenuId = () => {
  return `menu-${menuIdCounter++}`;
};

export const useMenuId = (id: string) => {
  const [menuId, setMenuId] = useState<string>();
  useIsomorphicLayoutEffect(() => {
    setMenuId(id || generateMenuId());
  }, [id]);
  return menuId;
};
