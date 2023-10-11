import { ReactElement } from "react";

export function isMenuChildSelectable(
  child: ReactElement & {
    type: Record<string, unknown>;
  }
): boolean {
  return !!child.type.isSelectable && !child.props.disabled;
}

export const generateMenuItemId = (menuId: string, child: ReactElement, index: number) => {
  return (child.props as { id: string }).id || `${menuId}-item-${index}`;
};
