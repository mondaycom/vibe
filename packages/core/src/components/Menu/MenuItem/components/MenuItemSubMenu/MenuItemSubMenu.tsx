import React, { useMemo, useRef } from "react";
import { DialogContentContainer } from "@vibe/dialog";
import { usePopover, DialogPlacementEnum as Placement } from "@vibe/dialog";
import { type MenuChild } from "../../../Menu/MenuConstants";
import { type MenuItemSubMenuProps } from "./MenuItemSubMenu.types";
import { useIsomorphicLayoutEffect } from "@vibe/shared";

const MenuItemSubMenu = ({
  anchorRef,
  open,
  autoFocusOnMount,
  onClose,
  children,
  submenuPosition,
  autoAdjustOnSubMenuContentResize
}: MenuItemSubMenuProps) => {
  const childRef = useRef<HTMLDivElement>(null);
  const popperElementRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
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
      placement: submenuPlacement,
      observeContentResize: autoAdjustOnSubMenuContentResize
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
