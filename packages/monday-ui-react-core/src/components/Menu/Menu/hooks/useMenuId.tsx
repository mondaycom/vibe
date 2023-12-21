import { useLayoutEffect, useState } from "react";

let menuIdCounter = 0;
export const generateMenuId = () => {
  return `menu-${menuIdCounter++}`;
};

export const useMenuId = (id: string) => {
  const [menuId, setMenuId] = useState<string>();
  useLayoutEffect(() => {
    setMenuId(id || generateMenuId());
  }, [id]);
  return menuId;
};
