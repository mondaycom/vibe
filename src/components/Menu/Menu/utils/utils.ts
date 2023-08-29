import { ReactElement } from "react";

export function isMenuChildSelectable(child: ReactElement): boolean {
  // @ts-ignore
  return !!child.type.isSelectable && !child.props.disabled;
}

export const generateMenuItemId = (menuId: string, child: ReactElement, index: number) => {
  return (child.props as { id: string }).id || `${menuId}-item-${index}`;
};
