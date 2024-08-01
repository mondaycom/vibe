import React, { useLayoutEffect, useMemo, useRef } from "react";
import DialogContentContainer from "../../../../DialogContentContainer/DialogContentContainer";
import usePopover from "../../../../../hooks/usePopover";
import { MenuChild } from "../../../Menu/MenuConstants";
import { MenuItemSubMenuProps } from "./MenuItemSubMenu.types";
import { Placement } from "../../../../../hooks/popoverConstants";

const MenuItemSubMenu = ({
  anchorRef,
  open,
  autoFocusOnMount,
  onClose,
  children,
  submenuPosition
}: MenuItemSubMenuProps) => {
  const childRef = useRef<HTMLDivElement>(null);
  const popperElementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!autoFocusOnMount || !open || !childRef?.current) {
      return;
    }
    requestAnimationFrame(() => {
      childRef.current.focus();
    });
  }, [autoFocusOnMount, open]);

  const submenuPlacement = useMemo(
    () => (submenuPosition === "left" ? Placement.LEFT_START : undefined),
    [submenuPosition]
  );

  const { styles: popoverStyles, attributes: popoverAttributes } = usePopover(
    anchorRef?.current,
    popperElementRef?.current,
    {
      isOpen: open,
      placement: submenuPlacement
    }
  );

  const subMenu: MenuChild = children && React.Children.only(children);
  if (!subMenu?.type?.isMenu) {
    console.error("MenuItem can accept only Menu element as first level child, this element is not valid: ", subMenu);
    return null;
  }

  return (
    <div
      style={{ ...popoverStyles.popper, visibility: open ? "visible" : "hidden" }}
      {...popoverAttributes.popper}
      ref={popperElementRef}
    >
      {subMenu && open && (
        <DialogContentContainer>
          {React.cloneElement(subMenu, {
            ...subMenu?.props,
            isVisible: open,
            isSubMenu: true,
            onClose,
            ref: childRef,
            useDocumentEventListeners: !autoFocusOnMount
          })}
        </DialogContentContainer>
      )}
    </div>
  );
};

export default MenuItemSubMenu;
