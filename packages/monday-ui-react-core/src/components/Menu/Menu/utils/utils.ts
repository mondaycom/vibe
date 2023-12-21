import { ReactElement } from "react";
import { MenuChild } from "../MenuConstants";

export function isMenuChildSelectable(child: MenuChild): boolean {
  return !!child.type.isSelectable && !child.props.disabled;
}

export const generateMenuItemId = (menuId: string, child: ReactElement, index: number) => {
  return (child.props as { id: string }).id || `${menuId}-item-${index}`;
};
