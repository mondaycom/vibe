import React, { forwardRef } from "react";
import BaseMenuItem from "../BaseMenuItem/BaseMenuItem";
import { CustomMenuItemProps } from "./CustomMenuItem.types";

const CustomMenuItem = forwardRef(
  ({ content, children, ...propsFromMenu }: CustomMenuItemProps, ref: React.ForwardedRef<HTMLElement>) => {
    return (
      <BaseMenuItem ref={ref} subMenu={children} {...propsFromMenu}>
        {content}
      </BaseMenuItem>
    );
  }
);

Object.assign(CustomMenuItem, {
  isMenuChild: true,
  isSelectable: true
});

export default CustomMenuItem;
