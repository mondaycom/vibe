import React, { forwardRef, useCallback, useEffect, useRef } from "react";
import Text from "../../../../Text/Text";
import { ComponentDefaultTestId, getTestId } from "../../../../../tests/test-ids-utils";
import cx from "classnames";
import { TAB_INDEX_FOCUS_WITH_JS_ONLY } from "../../MenuItemConstants";
import MenuItemSubMenuIcon from "../MenuItemSubMenuIcon/MenuItemSubMenuIcon";
import MenuItemSubMenu from "../MenuItemSubMenu/MenuItemSubMenu";
import { CloseMenuOption } from "../../../Menu/MenuConstants";
import useMenuItemMouseEvents from "../../hooks/useMenuItemMouseEvents";
import useMenuItemKeyboardEvents from "../../hooks/useMenuItemKeyboardEvents";
import useMergeRef from "../../../../../hooks/useMergeRef";
import useIsMouseEnter from "../../../../../hooks/useIsMouseEnter";
import styles from "./BaseMenuItem.module.scss";
import { BaseMenuItemProps } from "./BaseMenuItem.types";

const BaseMenuItem = forwardRef(
  (
    {
      subMenu,
      className,
      menuRef,
      disabled = false,
      selected = false,
      onClick,
      activeItemIndex = -1,
      setActiveItemIndex,
      index,
      id,
      isParentMenuVisible = false,
      resetOpenSubMenuIndex,
      hasOpenSubMenu = false,
      setSubMenuIsOpenByIndex,
      closeMenu,
      useDocumentEventListeners = false,
      isInitialSelectedState,
      onMouseEnter,
      onMouseLeave,
      shouldScrollMenu,
      "data-testid": dataTestId,
      splitMenuItem = false,
      children,
      submenuPosition = "right"
    }: BaseMenuItemProps,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    const isActive = activeItemIndex === index;
    const isSubMenuOpen = isActive && hasOpenSubMenu;
    const shouldShowSubMenu = !disabled && Boolean(subMenu) && isParentMenuVisible && isSubMenuOpen;

    const anchorRef = useRef(null);
    const splitMenuItemIconButtonRef = useRef(null);

    const mergedRef = useMergeRef(ref, anchorRef);

    const isMouseEnterMenuItem = useIsMouseEnter({ ref: anchorRef });
    const isMouseEnterIconButton = useIsMouseEnter({ ref: splitMenuItemIconButtonRef });

    useEffect(() => {
      const anchorElement = anchorRef.current;
      if (!isActive || !shouldScrollMenu || !anchorElement) {
        return;
      }
      if (anchorElement.scrollIntoViewIfNeeded) {
        anchorElement.scrollIntoViewIfNeeded({ behaviour: "smooth" });
        return;
      }
      anchorElement.scrollIntoView?.({ behavior: "smooth", block: "center" });
    }, [isActive, shouldScrollMenu]);

    useEffect(() => {
      const anchorElement = anchorRef.current;
      if (useDocumentEventListeners) return;
      if (isActive) {
        anchorElement?.focus();
      }
    }, [isActive, useDocumentEventListeners]);

    const isMouseEnter = useMenuItemMouseEvents({
      ref: anchorRef,
      splitMenuItemIconButtonRef,
      resetOpenSubMenuIndex,
      setSubMenuIsOpenByIndex,
      isActive,
      setActiveItemIndex,
      index,
      hasChildren: Boolean(subMenu),
      splitMenuItem
    });

    const { onClickCallback } = useMenuItemKeyboardEvents({
      onClick,
      disabled,
      isActive,
      index,
      setActiveItemIndex,
      hasChildren: Boolean(subMenu),
      shouldShowSubMenu,
      setSubMenuIsOpenByIndex,
      menuRef,
      isMouseEnter,
      closeMenu,
      useDocumentEventListeners,
      splitMenuItem,
      isMouseEnterMenuItem,
      isMouseEnterIconButton
    });

    const closeSubMenu = useCallback(
      (option: CloseMenuOption = {}) => {
        setSubMenuIsOpenByIndex(index, false);
        if (option.propagate) {
          closeMenu(option);
        }
      },
      [setSubMenuIsOpenByIndex, index, closeMenu]
    );

    return (
      <Text
        id={id}
        element="li"
        type={Text.types.TEXT2}
        aria-haspopup={subMenu ? true : undefined}
        aria-expanded={subMenu ? shouldShowSubMenu : undefined}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.MENU_ITEM, index)}
        className={cx(styles.item, className, {
          [styles.disabled]: disabled,
          [styles.focused]: isActive,
          [styles.selected]: selected,
          [styles.initialSelected]: isInitialSelectedState,
          [styles.splitMenuItem]: splitMenuItem
        })}
        ref={mergedRef}
        onClick={onClickCallback}
        role="menuitem"
        aria-current={isActive}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        tabIndex={TAB_INDEX_FOCUS_WITH_JS_ONLY}
      >
        {children}
        {Boolean(subMenu) && (
          <>
            <MenuItemSubMenuIcon
              ref={splitMenuItemIconButtonRef}
              isSplit={splitMenuItem}
              active={shouldShowSubMenu}
              disabled={disabled}
            />
            <MenuItemSubMenu
              anchorRef={anchorRef}
              open={shouldShowSubMenu}
              onClose={closeSubMenu}
              autoFocusOnMount={!useDocumentEventListeners}
              submenuPosition={submenuPosition}
            >
              {subMenu}
            </MenuItemSubMenu>
          </>
        )}
      </Text>
    );
  }
);

export default BaseMenuItem;
