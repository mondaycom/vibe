import { ReactElement } from "react";

export function isMenuChildSelectable(child: ReactElement): boolean {
  // @ts-ignore
  return !!child.type.isSelectable && !child.props.disabled;
}
