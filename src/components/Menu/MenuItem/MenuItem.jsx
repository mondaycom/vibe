/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useRef, useLayoutEffect, useMemo, useEffect } from "react";

import PropTypes from "prop-types";
import isFunction from "lodash/isFunction";
import cx from "classnames";

import Tooltip from "../../Tooltip/Tooltip";
import Icon from "../../Icon/Icon";
import DropdownChevronRight from "../../Icon/Icons/components/DropdownChevronRight";
import DialogContentContainer from "../../DialogContentContainer/DialogContentContainer";

import useMergeRefs from "../../../hooks/useMergeRefs";
import useIsOverflowing from "../../../hooks/useIsOverflowing";
import usePopover from "../../../hooks/usePopover";

import useMenuItemMouseEvents from "./hooks/useMenuItemMouseEvents";
import useMenuItemKeyboardEvents from "./hooks/useMenuItemKeyboardEvents";

import "./MenuItem.scss";
import { DialogPositions } from "../../../constants/sizes";
import { backwardCompatibilityForProperties } from "../../../helpers/backwardCompatibilityForProperties";

const MenuItem = ({
  className,
  // Backward compatibility for props naming
  classname,
  title,
  label,
  icon,
  menuRef,
  iconType,
  iconBackgroundColor,
  disabled,
  disableReason,
  selected,
  onClick,
  activeItemIndex,
  setActiveItemIndex,
  index,
  menuId,
  children,
  isParentMenuVisible,
  resetOpenSubMenuIndex,
  hasOpenSubMenu,
  setSubMenuIsOpenByIndex,
  closeMenu,
  useDocumentEventListeners,
  tooltipPosition,
  tooltipShowDelay,
  isInitialSelectedState,
  onMouseEnter,
  onMouseLeave,
  shouldScrollMenu
}) => {
  const overrideClassName = backwardCompatibilityForProperties([className, classname]);
  const isActive = activeItemIndex === index;
  const isSubMenuOpen = !!children && isActive && hasOpenSubMenu;
  const hasChildren = !!children;
  const shouldShowSubMenu = hasChildren && isParentMenuVisible && isSubMenuOpen;
  const submenuChild = children && React.Children.only(children);
  let menuChild;
  if (submenuChild && submenuChild.type && submenuChild.type.isMenu) {
    menuChild = submenuChild;
  } else if (submenuChild) {
    console.error(
      "menu item can accept only menu element as first level child, this element is not valid: ",
      submenuChild
    );
  }

  const ref = useRef(null);
  const titleRef = useRef();
  const childRef = useRef();
  const referenceElementRef = useRef(null);
  const popperElementRef = useRef(null);
  const popperElement = popperElementRef.current;
  const referenceElement = referenceElementRef.current;
  const childElement = childRef.current;

  const isTitleHoveredAndOverflowing = useIsOverflowing({ ref: titleRef });

  const { styles, attributes } = usePopover(referenceElement, popperElement, {
    isOpen: isSubMenuOpen
  });

  useEffect(() => {
    if (isActive && shouldScrollMenu && referenceElement) {
      if (referenceElement.scrollIntoViewIfNeeded) {
        referenceElement.scrollIntoViewIfNeeded({ behaviour: "smooth" });
      } else {
        referenceElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [isActive, referenceElement, shouldScrollMenu]);

  const isMouseEnter = useMenuItemMouseEvents(
    ref,
    resetOpenSubMenuIndex,
    setSubMenuIsOpenByIndex,
    isActive,
    setActiveItemIndex,
    index,
    hasChildren
  );

  const { onClickCallback } = useMenuItemKeyboardEvents(
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
    useDocumentEventListeners
  );

  useLayoutEffect(() => {
    if (useDocumentEventListeners) return;

    if (shouldShowSubMenu && childElement) {
      requestAnimationFrame(() => {
        childElement.focus();
      });
    }
  }, [shouldShowSubMenu, childElement, useDocumentEventListeners]);

  const closeSubMenu = useCallback(
    (options = {}) => {
      setSubMenuIsOpenByIndex(index, false);
      if (options.propagate) {
        closeMenu(options);
      }
    },
    [setSubMenuIsOpenByIndex, index, closeMenu]
  );

  const mergedRef = useMergeRefs({ refs: [ref, referenceElementRef] });

  const renderSubMenuIconIfNeeded = () => {
    if (!hasChildren) return null;

    return (
      <div className="monday-style-menu-item__sub_menu_icon-wrapper">
        <Icon
          clickable={false}
          icon={DropdownChevronRight}
          iconLabel={title}
          className="monday-style-menu-item__sub_menu_icon"
          ignoreFocusStyle
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
          width: 20,
          height: 20,
          opacity: disabled ? 0.4 : 1
        },
        { color: "var(--text-color-on-primary)" }
      ]
      : [undefined, undefined];
  }, [iconBackgroundColor, disabled]);

  const renderMenuItemIconIfNeeded = () => {
    if (!icon) return null;

    let finalIconType = iconType;
    if (!finalIconType) {
      finalIconType = isFunction(icon) ? Icon.type.SVG : Icon.type.ICON_FONT;
    }

    return (
      <div className="monday-style-menu-item__icon-wrapper" style={iconWrapperStyle}>
        <Icon
          iconType={finalIconType}
          clickable={false}
          icon={icon}
          iconLabel={title}
          className="monday-style-menu-item__icon"
          ignoreFocusStyle
          style={iconStyle}
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

  const shouldShowTooltip = isTitleHoveredAndOverflowing || disabled;
  const tooltipContent = disabled ? disableReason : title;

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <li
      id={`${menuId}-${index}`}
      {...a11yProps}
      className={cx("monday-style-menu-item", overrideClassName, {
        "monday-style-menu-item--disabled": disabled,
        "monday-style-menu-item--focused": isActive,
        "monday-style-menu-item--selected": selected,
        "monday-style-menu-item-initial-selected": isInitialSelectedState
      })}
      ref={mergedRef}
      onClick={onClickCallback}
      role="menuitem"
      aria-current={isActive}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      {renderMenuItemIconIfNeeded()}

      <Tooltip
        content={shouldShowTooltip ? tooltipContent : null}
        position={tooltipPosition}
        showDelay={tooltipShowDelay}
      >
        <div ref={titleRef} className="monday-style-menu-item__title">
          {title}
        </div>
      </Tooltip>
      {label && (
        <div ref={titleRef} className="monday-style-menu-item__label">
          {label}
        </div>
      )}
      {renderSubMenuIconIfNeeded()}
      <div
        style={{ ...styles.popper, visibility: shouldShowSubMenu ? "visible" : "hidden" }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...attributes.popper}
        className="monday-style-menu-item__popover"
        ref={popperElementRef}
      >
        {menuChild && shouldShowSubMenu && (
          <DialogContentContainer>
            {React.cloneElement(menuChild, {
              ...menuChild?.props,
              isVisible: shouldShowSubMenu,
              isSubMenu: true,
              onClose: closeSubMenu,
              ref: childRef
            })}
          </DialogContentContainer>
        )}
      </div>
    </li>
  );
};

MenuItem.iconType = Icon.type;
MenuItem.tooltipPositions = DialogPositions;
MenuItem.defaultProps = {
  className: "",
  title: "",
  label: "",
  icon: "",
  iconType: undefined,
  iconBackgroundColor: undefined,
  disabled: false,
  disableReason: undefined,
  selected: false,
  onClick: undefined,
  activeItemIndex: -1,
  setActiveItemIndex: undefined,
  index: undefined,
  isParentMenuVisible: false,
  hasOpenSubMenu: false,
  setSubMenuIsOpenByIndex: undefined,
  resetOpenSubMenuIndex: undefined,
  useDocumentEventListeners: false,
  tooltipPosition: MenuItem.tooltipPositions.RIGHT,
  tooltipShowDelay: 300,
  onMouseLeave: undefined,
  onMouseEnter: undefined
};

MenuItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  iconType: PropTypes.oneOf([Icon.type.SVG, Icon.type.ICON_FONT]),
  iconBackgroundColor: PropTypes.string,
  disabled: PropTypes.bool,
  disableReason: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  activeItemIndex: PropTypes.number,
  setActiveItemIndex: PropTypes.func,
  index: PropTypes.number,
  isParentMenuVisible: PropTypes.bool,
  resetOpenSubMenuIndex: PropTypes.func,
  hasOpenSubMenu: PropTypes.bool,
  setSubMenuIsOpenByIndex: PropTypes.func,
  useDocumentEventListeners: PropTypes.bool,
  tooltipPosition: PropTypes.oneOf([
    MenuItem.tooltipPositions.RIGHT,
    MenuItem.tooltipPositions.LEFT,
    MenuItem.tooltipPositions.TOP,
    MenuItem.tooltipPositions.BOTTOM
  ]),
  tooltipShowDelay: PropTypes.number,
  onMouseLeave: PropTypes.func,
  onMouseEnter: PropTypes.func
};

MenuItem.isSelectable = true;
MenuItem.isMenuChild = true;

export default MenuItem;
