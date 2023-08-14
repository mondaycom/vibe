import React, { forwardRef, useRef } from "react";
import { useMergeRefs } from "../../../hooks";
import VibeComponent from "../../../types/VibeComponent";
import Menu, { MenuProps } from "../../Menu/Menu/Menu";

type SplitButtonMenuProps = Omit<MenuProps, "focusItemIndexOnMount"> & { children: React.ReactNode };

const SplitButtonMenu: VibeComponent<SplitButtonMenuProps> = forwardRef(
  ({ children, ...splitButtonMenuProps }: SplitButtonMenuProps, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    return (
      <Menu focusItemIndexOnMount={0} {...splitButtonMenuProps} ref={mergedRef}>
        {children}
      </Menu>
    );
  }
);

export default SplitButtonMenu;
