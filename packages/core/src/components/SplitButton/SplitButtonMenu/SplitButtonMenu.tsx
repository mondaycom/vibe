import React, { forwardRef, useRef } from "react";
import useMergeRef from "../../../hooks/useMergeRef";
import Menu, { MenuProps } from "../../Menu/Menu/Menu";

export type SplitButtonMenuProps = Omit<MenuProps, "focusItemIndexOnMount"> & { children: React.ReactNode };

const SplitButtonMenu = forwardRef(
  ({ children, ...splitButtonMenuProps }: SplitButtonMenuProps, ref: React.ForwardedRef<HTMLElement>) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    return (
      <Menu focusItemIndexOnMount={0} {...splitButtonMenuProps} ref={mergedRef}>
        {children}
      </Menu>
    );
  }
);

export default SplitButtonMenu;
