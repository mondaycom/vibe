import React, { useMemo, useRef } from "react";
import cx from "classnames";
import { CSSTransition } from "react-transition-group";
import { camelCase } from "es-toolkit";
import { DialogContentContainer } from "@vibe/dialog";
import { useFloating, flip, type Placement } from "@floating-ui/react-dom";
import { type MenuChild } from "../../../Menu/MenuConstants";
import { type MenuItemSubMenuProps } from "./MenuItemSubMenu.types";
import { useIsomorphicLayoutEffect, getStyle } from "@vibe/shared";
import styles from "./MenuItemSubMenu.module.scss";

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
  const transitionRef = useRef<HTMLDivElement>(null);

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

  const placementClassName = getStyle(styles, camelCase(actualPlacement));

  return (
    <div style={floatingStyles} ref={refs.setFloating} data-popper-placement={actualPlacement}>
      <CSSTransition
        in={open}
        appear
        mountOnEnter
        unmountOnExit
        nodeRef={transitionRef}
        timeout={{ appear: 150, enter: 150, exit: 100 }}
        classNames={{
          appear: cx(styles.appear, placementClassName),
          appearActive: cx(styles.appearActive, placementClassName),
          enter: cx(styles.appear, placementClassName),
          enterActive: cx(styles.enterActive, placementClassName),
          exit: cx(styles.exit, placementClassName),
          exitActive: cx(styles.exit, placementClassName)
        }}
      >
        <div ref={transitionRef}>
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
        </div>
      </CSSTransition>
    </div>
  );
};

export default MenuItemSubMenu;
