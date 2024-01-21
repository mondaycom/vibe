/* eslint-disable react/jsx-props-no-spreading */
import React, { ForwardedRef, forwardRef, useCallback, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import cx from "classnames";
import { isFunction } from "lodash-es";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import { DialogPosition } from "../../../constants/positions";
import Text from "../../Text/Text";
import Tooltip, { TooltipProps } from "../../../components/Tooltip/Tooltip";
import Icon from "../../../components/Icon/Icon";
import DialogContentContainer from "../../../components/DialogContentContainer/DialogContentContainer";
import useMergeRef from "../../../hooks/useMergeRef";
import useIsOverflowing from "../../../hooks/useIsOverflowing/useIsOverflowing";
import usePopover from "../../../hooks/usePopover";
import { backwardCompatibilityForProperties } from "../../../helpers/backwardCompatibilityForProperties";
import useMenuItemMouseEvents from "./hooks/useMenuItemMouseEvents";
import useMenuItemKeyboardEvents from "./hooks/useMenuItemKeyboardEvents";
import { SubIcon, VibeComponent, VibeComponentProps, withStaticProps } from "../../../types";
import { IconType } from "../../Icon/IconConstants";
import { TAB_INDEX_FOCUS_WITH_JS_ONLY, TooltipPosition } from "./MenuItemConstants";
import { CloseMenuOption, MenuChild } from "../Menu/MenuConstants";
import Label from "../../Label/Label";
import styles from "./MenuItem.module.scss";
import { DropdownChevronRight } from "../../Icon/Icons";
import IconButton from "../../IconButton/IconButton";
import Divider from "../../Divider/Divider";
import { DirectionType } from "../../Divider/DividerConstants";
import useIsMouseEnter from "../../../hooks/useIsMouseEnter";

export interface MenuItemProps extends VibeComponentProps {
  title?: string;
  label?: string;
  icon?: SubIcon;
  iconType?: IconType;
  iconBackgroundColor?: string;
  disabled?: boolean;
  disableReason?: string;
  selected?: boolean;
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  activeItemIndex?: number;
  setActiveItemIndex?: (index: number) => void;
  index?: number;
  key?: string;
  isParentMenuVisible?: boolean;
  resetOpenSubMenuIndex?: () => void;
  hasOpenSubMenu?: boolean;
  setSubMenuIsOpenByIndex?: (index: number, isOpen: boolean) => void;
  useDocumentEventListeners?: boolean;
  tooltipContent?: string;
  tooltipPosition?: TooltipPosition;
  tooltipShowDelay?: number;
  tooltipProps?: Partial<TooltipProps>;
  onMouseLeave?: (event: React.MouseEvent) => void;
  onMouseEnter?: (event: React.MouseEvent) => void;
  /**
   * @deprecated - use className instead
   */
  classname?: string;
  /**
   * Class name which is added to div which wraps an Icon
   */
  iconWrapperClassName?: string;
  isInitialSelectedState?: boolean;
  shouldScrollMenu?: boolean;
  closeMenu?: (option: CloseMenuOption) => void;
  menuRef?: React.RefObject<HTMLElement>;
  children?: MenuChild | MenuChild[];
  /**
   * Type of menu item with sub menu, which has two click/hover options-
   *    1. click on the main menu item will trigger onClick
   *    2. click/hover on icon button will open the sub menu
   */
  splitMenuItem?: boolean;
}

const MenuItem: VibeComponent<MenuItemProps> & {
  iconType?: typeof Icon.type;
  tooltipPositions?: typeof DialogPosition;
  isSelectable?: boolean;
  isMenuChild?: boolean;
} = forwardRef(
  (
    {
      className,
      // Backward compatibility for props naming
      classname,
      iconWrapperClassName,
      title = "",
      label = "",
      icon = "",
      menuRef,
      iconType,
      iconBackgroundColor,
      disabled = false,
      disableReason,
      selected = false,
      onClick,
      activeItemIndex = -1,
      setActiveItemIndex,
      index,
      key,
      id,
      children,
      isParentMenuVisible = false,
      resetOpenSubMenuIndex,
      hasOpenSubMenu = false,
      setSubMenuIsOpenByIndex,
      closeMenu,
      useDocumentEventListeners = false,
      tooltipContent,
      tooltipPosition = MenuItem.tooltipPositions.RIGHT,
      tooltipShowDelay = 300,
      tooltipProps,
      isInitialSelectedState,
      onMouseEnter,
      onMouseLeave,
      shouldScrollMenu,
      "data-testid": dataTestId,
      splitMenuItem = false
    },
    ref: ForwardedRef<HTMLElement>
  ) => {
    const overrideClassName = backwardCompatibilityForProperties([className, classname]);
    const isActive = activeItemIndex === index;
    const hasChildren = !!children;
    const isSubMenuOpen = hasChildren && isActive && hasOpenSubMenu;
    const shouldShowSubMenu = hasChildren && isParentMenuVisible && isSubMenuOpen;
    const submenuChild: MenuChild = children && React.Children.only(children);
    let menuChild;
    if (submenuChild && submenuChild.type && submenuChild.type.isMenu) {
      menuChild = submenuChild;
    } else if (submenuChild) {
      console.error(
        "menu item can accept only menu element as first level child, this element is not valid: ",
        submenuChild
      );
    }

    const titleRef = useRef();
    const childRef = useRef<HTMLElement>();
    const referenceElementRef = useRef(null);
    const iconButtonElementRef = useRef(null);
    const popperElementRef = useRef(null);
    const popperElement = popperElementRef.current;
    const referenceElement = referenceElementRef.current;
    const childElement = childRef.current;
    const mergedRef = useMergeRef(ref, referenceElementRef);

    const isMouseEnterMenuItem = useIsMouseEnter({ ref: referenceElementRef });
    const isMouseEnterIconButton = useIsMouseEnter({ ref: iconButtonElementRef });

    const isTitleHoveredAndOverflowing = useIsOverflowing({ ref: titleRef });

    const { styles: popoverStyles, attributes: popoverAttributes } = usePopover(referenceElement, popperElement, {
      isOpen: isSubMenuOpen
    });
    useEffect(() => {
      if (isActive && shouldScrollMenu && referenceElement) {
        if (referenceElement.scrollIntoViewIfNeeded) {
          referenceElement.scrollIntoViewIfNeeded({ behaviour: "smooth" });
        } else {
          referenceElement.scrollIntoView?.({ behavior: "smooth", block: "center" });
        }
      }
    }, [isActive, referenceElement, shouldScrollMenu]);

    const isMouseEnter = useMenuItemMouseEvents({
      ref: referenceElementRef,
      splitMenuItemIconButtonRef: iconButtonElementRef,
      resetOpenSubMenuIndex,
      setSubMenuIsOpenByIndex,
      isActive,
      setActiveItemIndex,
      index,
      hasChildren,
      splitMenuItem
    });

    const { onClickCallback } = useMenuItemKeyboardEvents({
      onClick,
      disabled,
      isActive,
      index,
      setActiveItemIndex,
      hasChildren,
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

    useLayoutEffect(() => {
      if (useDocumentEventListeners) return;

      if (shouldShowSubMenu && childElement) {
        requestAnimationFrame(() => {
          childElement.focus();
        });
      }
    }, [shouldShowSubMenu, childElement, useDocumentEventListeners]);

    useEffect(() => {
      if (useDocumentEventListeners) return;
      if (isActive) {
        referenceElement?.focus();
      }
    }, [isActive, referenceElement, useDocumentEventListeners]);

    const closeSubMenu = useCallback(
      (options: { propagate?: boolean } = {}) => {
        setSubMenuIsOpenByIndex(index, false);
        if (options.propagate) {
          closeMenu(options);
        }
      },
      [setSubMenuIsOpenByIndex, index, closeMenu]
    );

    const renderSubMenuIconIfNeeded = () => {
      if (!hasChildren) return null;

      return splitMenuItem ? (
        <div className={styles.subMenuIconWrapper}>
          <Divider direction={DirectionType.VERTICAL} className={styles.divider} />
          <IconButton
            icon={DropdownChevronRight}
            className={styles.splitMenuItemIconButton}
            kind={IconButton.kinds.TERTIARY}
            size={null} // Customizing size via className
            iconClassName={cx(styles.iconButton, { [styles.disabled]: disabled })}
            tabIndex={-1}
            ref={iconButtonElementRef}
            active={shouldShowSubMenu}
            disabled={disabled}
          />
        </div>
      ) : (
        <div className={styles.subMenuIconWrapper}>
          <Icon
            clickable={false}
            icon={DropdownChevronRight}
            iconLabel={title}
            className={styles.subMenuIcon}
            ignoreFocusStyle
            iconSize={18}
          />
        </div>
      );
    };

    const [iconWrapperStyle, iconStyle] = useMemo(() => {
      return iconBackgroundColor
        ? [
            {
              backgroundColor: iconBackgroundColor,
              borderRadius: "4px",
              opacity: disabled ? 0.4 : 1
            },
            { color: "var(--text-color-on-primary)" }
          ]
        : [];
    }, [iconBackgroundColor, disabled]);

    const renderMenuItemIconIfNeeded = () => {
      if (!icon) return null;

      let finalIconType = iconType;
      if (!finalIconType) {
        finalIconType = isFunction(icon) ? Icon.type.SVG : Icon.type.ICON_FONT;
      }

      return (
        <div className={cx(styles.iconWrapper, iconWrapperClassName)} style={iconWrapperStyle}>
          <Icon
            iconType={finalIconType}
            clickable={false}
            icon={icon}
            iconLabel={title}
            className={styles.icon}
            ignoreFocusStyle
            style={iconStyle}
            iconSize={18}
          />
        </div>
      );
    };

    const a11yProps = useMemo(() => {
      if (!children) return {};
      return {
        "aria-haspopup": true,
        "aria-expanded": hasOpenSubMenu
      };
    }, [children, hasOpenSubMenu]);

    const shouldShowTooltip = isTitleHoveredAndOverflowing || disabled || tooltipContent;

    const finalTooltipContent = useMemo(() => {
      if (disabled) return disableReason;
      if (tooltipContent) return tooltipContent;
      return title;
    }, [disableReason, disabled, title, tooltipContent]);

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <Text
        element="li"
        type={Text.types.TEXT2}
        {...a11yProps}
        key={key}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.MENU_ITEM, index)}
        className={cx(styles.item, overrideClassName, {
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
        {renderMenuItemIconIfNeeded()}
        <Tooltip
          content={shouldShowTooltip ? finalTooltipContent : null}
          position={tooltipPosition}
          showDelay={tooltipShowDelay}
          // Tooltip should be on a whole MenuItem, but it's a breaking change - should be fixed in the next major and then this can be removed
          moveBy={icon && tooltipPosition === Tooltip.positions.LEFT ? { main: 30 } : undefined}
          {...tooltipProps}
        >
          <div ref={titleRef} className={styles.title}>
            {title}
          </div>
        </Tooltip>
        {label && <Label kind={Label.kinds.LINE} text={label} />}
        {renderSubMenuIconIfNeeded()}
        <div
          style={{ ...popoverStyles.popper, visibility: shouldShowSubMenu ? "visible" : "hidden" }}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...popoverAttributes.popper}
          ref={popperElementRef}
        >
          {menuChild && shouldShowSubMenu && (
            <DialogContentContainer>
              {React.cloneElement(menuChild, {
                ...menuChild?.props,
                isVisible: shouldShowSubMenu,
                isSubMenu: true,
                onClose: closeSubMenu,
                ref: childRef,
                useDocumentEventListeners
              })}
            </DialogContentContainer>
          )}
        </div>
      </Text>
    );
  }
);

Object.assign(MenuItem, {
  isSelectable: true,
  isMenuChild: true
});

export default withStaticProps(MenuItem, {
  iconType: Icon.type,
  tooltipPositions: DialogPosition
});
