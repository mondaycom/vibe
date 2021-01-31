import React, { useCallback, useRef, useEffect } from "react";

import PropTypes from "prop-types";
import isFunction from "lodash/isFunction";
import cx from "classnames";

import Icon from "../../Icon/Icon";
import DropdownChevronRight from "../../Icon/Icons/components/DropdownChevronRight";
import DialogContentContainer from "../../DialogContentContainer/DialogContentContainer";

import useMergeRefs from "../../../hooks/useMergeRefs";
import useIsOverflowing from "../../../hooks/useIsOverflowing";
import useIsMouseOver from "../../../hooks/useIsMouseOver";
import usePopover from "../../../hooks/usePopover";

import useMenuItemMouseEvents from "./hooks/useMenuItemMouseEvents";
import useMenuItemKeyboardEvents from "./hooks/useMenuItemKeyboardEvents";

import "./MenuItem.scss";

const MenuItem = ({
  classname,
  title,
  icon,
  iconType,
  disabled,
  onClick,
  activeItemIndex,
  setActiveItemIndex,
  index,
  children,
  isParentMenuVisible,
  resetOpenSubMenuIndex,
  focusParentMenu,
  hasOpenSubMenu,
  setSubMenuIsOpenByIndex
}) => {
  const isActive = activeItemIndex === index;
  const isSubMenuOpen = !!children && isActive && hasOpenSubMenu;
  const hasChildren = !!children;
  const shouldShowSubMenu = hasChildren && isParentMenuVisible && isSubMenuOpen;
  const submenuChild = children && React.Children.only(children);

  const ref = useRef(null);
  const titleRef = useRef();
  const childRef = useRef();
  const referenceElementRef = useRef(null);
  const popperElementRef = useRef(null);
  const popperElement = popperElementRef.current;
  const referenceElement = referenceElementRef.current;
  const childElement = childRef.current;

  const isTitleHoveredHovered = useIsMouseOver({ ref: titleRef });
  const isTitleHoveredAndOverflowing = useIsOverflowing({ ref: isTitleHoveredHovered && titleRef });

  const { styles, attributes } = usePopover(referenceElement, popperElement, {
    isOpen: isSubMenuOpen
  });

  useMenuItemMouseEvents(
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
    setSubMenuIsOpenByIndex
  );

  useEffect(() => {
    if (shouldShowSubMenu && childElement) {
      requestAnimationFrame(() => {
        childElement.focus();
      });
    }
  }, [shouldShowSubMenu, childElement]);

  const closeSubMenu = useCallback(() => {
    setSubMenuIsOpenByIndex(index, false);
    focusParentMenu && focusParentMenu();
  }, [setSubMenuIsOpenByIndex, focusParentMenu, index]);

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

  const renderMenuItemIconIfNeeded = () => {
    if (!icon) return null;

    let finalIconType = iconType;
    if (!finalIconType) {
      finalIconType = isFunction(icon) ? Icon.type.SVG : Icon.type.ICON_FONT;
    }

    return (
      <div className="monday-style-menu-item__icon-wrapper">
        <Icon
          iconType={finalIconType}
          clickable={false}
          icon={icon}
          iconLabel={title}
          className="monday-style-menu-item__icon"
          ignoreFocusStyle
        />
      </div>
    );
  };

  return (
    <div
      aria-haspopup={!!children}
      className={cx("monday-style-menu-item", classname, {
        "monday-style-menu-item--disabled": disabled,
        "monday-style-menu-item--focused": isActive
      })}
      ref={mergedRef}
      onClick={onClickCallback}
    >
      {renderMenuItemIconIfNeeded()}

      {// show tooltip if needed
      isTitleHoveredAndOverflowing && null}

      <div ref={titleRef} className="monday-style-menu-item__title">
        {title}
      </div>

      {renderSubMenuIconIfNeeded()}

      <div
        style={{ ...styles.popper, visibility: shouldShowSubMenu ? "visible" : "hidden" }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...attributes.popper}
        className="monday-style-menu-item__popover"
        ref={popperElementRef}
      >
        {submenuChild && shouldShowSubMenu && (
          <DialogContentContainer>
            {React.cloneElement(submenuChild, {
              ...submenuChild?.props,
              isVisible: shouldShowSubMenu,
              closeSubMenu,
              ref: childRef
            })}
          </DialogContentContainer>
        )}
      </div>
    </div>
  );
};

MenuItem.iconType = Icon.type;

MenuItem.defaultProps = {
  classname: "",
  title: "",
  icon: "",
  iconType: undefined,
  disabled: false,
  onClick: undefined,
  activeItemIndex: -1,
  setActiveItemIndex: undefined,
  index: undefined
};
MenuItem.propTypes = {
  classname: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  iconType: PropTypes.oneOf([Icon.type.SVG, Icon.type.ICON_FONT]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  activeItemIndex: PropTypes.number,
  setActiveItemIndex: PropTypes.func,
  index: PropTypes.number
};

MenuItem.isSelectable = true;

export default MenuItem;
