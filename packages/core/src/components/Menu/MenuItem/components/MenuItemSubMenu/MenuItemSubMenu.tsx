import React, { useMemo, useRef } from "react";
import { DialogContentContainer } from "@vibe/dialog";
import { useFloating, flip, type Placement } from "@floating-ui/react-dom";
import { type MenuChild } from "../../../Menu/MenuConstants";
import { type MenuItemSubMenuProps } from "./MenuItemSubMenu.types";
import { useIsomorphicLayoutEffect } from "@vibe/shared";

const DEFAULT_FALLBACK_PLACEMENTS: Placement[] = ["right-end", "left-start", "left-end"];

const MenuItemSubMenu = ({
  anchorRef,
  open,
  autoFocusOnMount,
  onClose,
  children,
  submenuPosition
}: MenuItemSubMenuProps) => {
  const childRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!autoFocusOnMount || !open || !childRef?.current) {
      return;
    }
    requestAnimationFrame(() => {
      childRef.current.focus();
    });
  }, [autoFocusOnMount, open]);

  const placement = useMemo<Placement>(
    () => (submenuPosition === "left" ? "left-start" : "right-start"),
    [submenuPosition]
  );

  const {
    refs,
    floatingStyles,
    placement: actualPlacement
  } = useFloating({
    placement,
    middleware: [flip({ fallbackPlacements: DEFAULT_FALLBACK_PLACEMENTS })],
    elements: {
      reference: anchorRef?.current
    }
  });

  const subMenu: MenuChild = children && React.Children.only(children);
  if (!subMenu?.type?.isMenu) {
    console.error("MenuItem can accept only Menu element as first level child, this element is not valid: ", subMenu);
    return null;
  }

  return (
    <div
      style={{ ...floatingStyles, visibility: open ? "visible" : "hidden" }}
      ref={refs.setFloating}
      data-popper-placement={actualPlacement}
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
