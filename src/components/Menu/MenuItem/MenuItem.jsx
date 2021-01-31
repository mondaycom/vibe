import React, { useCallback, useRef, useEffect, useState, useLayoutEffect, useReducer } from "react";

import PropTypes from "prop-types";
import isFunction from "lodash/isFunction";
import cx from "classnames";

import Icon from "../../Icon/Icon";

import DropdownChevronRight from "../../Icon/Icons/components/DropdownChevronRight";
import useKeyEvent from "../../../hooks/useKeyEvent";
import useMergeRefs from "../../../hooks/useMergeRefs";
import useIsOverflowing from "../../../hooks/useIsOverflowing";
import useIsMouseOver from "../../../hooks/useIsMouseOver";
import useIsMouseEnter from "../../../hooks/useIsMouseEnter";
import useForceUpdate from "../../../hooks/useForceUpdate";
import usePrevious from "../../../hooks/usePrevious";

import usePopover from "../../../hooks/usePopover";
import DialogContentContainer from "../../DialogContentContainer/DialogContentContainer";
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
  focusParentMenu,
  hasOpenSubMenu,
  setSubMenuIsOpenByIndex
}) => {
  const ref = useRef(null);
  const titleRef = useRef();
  const childRef = useRef();
  const isHovered = useIsMouseOver({ ref: titleRef });
  const isMouseEnter = useIsMouseEnter({ ref });

  const isHoveredAndOverflowing = useIsOverflowing({ ref: isHovered && titleRef });
  const [isActive, setIsActive] = useState(activeItemIndex === index);

  const referenceElementRef = useRef(null);
  const popperElementRef = useRef(null);
  const popperElement = popperElementRef.current;
  const referenceElement = referenceElementRef.current;
  const childElement = childRef.current;

  const isSubMenuOpen = !!children && isActive && hasOpenSubMenu;

  const forceUpdate = useForceUpdate();
  const hasChildren = !!children;

  // check if parent menu is open for mouseout of parent menu of the parent menu (sub sub menu item)
  const shouldShowSubMenu = hasChildren && isParentMenuVisible && isSubMenuOpen;

  const { styles, attributes } = usePopover(referenceElement, popperElement, {
    isOpen: isSubMenuOpen
  });

  const prevIsMouseEnter = usePrevious(isMouseEnter);

  useEffect(() => {
    if (isMouseEnter === prevIsMouseEnter) return;

    if (isMouseEnter && !isActive) {
      setActiveItemIndex(index);
      if (hasChildren) {
        setSubMenuIsOpenByIndex(index, true);
        requestAnimationFrame(() => {
          forceUpdate();
        });
      }
    }

    if (isMouseEnter && isActive) {
      setSubMenuIsOpenByIndex(index, !!isMouseEnter);
    }
    if (!isMouseEnter && isActive) {
      setActiveItemIndex(-1);
      setSubMenuIsOpenByIndex(index, false);
    }
  }, [
    prevIsMouseEnter,
    isMouseEnter,
    setSubMenuIsOpenByIndex,
    isActive,
    setActiveItemIndex,
    index,
    forceUpdate,
    hasChildren
  ]);

  useEffect(() => {
    setIsActive(activeItemIndex === index);
  }, [activeItemIndex, index]);

  const onClickCallback = useCallback(
    event => {
      if (!isActive && !isMouseEnter) return;

      if (isActive && hasChildren) {
        setActiveItemIndex(index);
        setSubMenuIsOpenByIndex(index, true);
        requestAnimationFrame(() => {
          forceUpdate();
        });
        return;
      }

      if (shouldShowSubMenu) return;

      if (onClick && !disabled && isActive) {
        onClick(event);
      }
    },
    [
      onClick,
      isMouseEnter,
      forceUpdate,
      disabled,
      isActive,
      index,
      setActiveItemIndex,
      hasChildren,
      shouldShowSubMenu,
      setSubMenuIsOpenByIndex
    ]
  );

  useEffect(() => {
    if (shouldShowSubMenu && childElement) {
      requestAnimationFrame(() => {
        childElement.focus();
      });
    }
  }, [shouldShowSubMenu, childElement]);

  useKeyEvent({
    keys: ["Enter", "ArrowRight"],
    callback: onClickCallback
  });

  const closeSubMenu = useCallback(() => {
    setSubMenuIsOpenByIndex(index, false);
    focusParentMenu && focusParentMenu();
  }, [setSubMenuIsOpenByIndex, focusParentMenu, index]);

  const mergedRef = useMergeRefs({ refs: [ref, referenceElementRef] });

  const submenuChild = children && React.Children.only(children);

  const renderSubMenuIconIfNeeded = () => {
    if (!children) return null;

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
      role="menuitem"
      aria-haspopup={!!children}
      className={cx("monday-style-menu-item", classname, {
        "monday-style-menu-item--disabled": disabled,
        "monday-style-menu-item--focused": isActive
      })}
      ref={mergedRef}
      onClick={onClickCallback}
    >
      {renderMenuItemIconIfNeeded()}

      {
        // show tooltip if needed
      }
      {isHoveredAndOverflowing && null}

      <div ref={titleRef} className="monday-style-menu-item__title">
        {title}
      </div>

      {renderSubMenuIconIfNeeded()}

      <div
        style={{ ...styles.popper, visibility: shouldShowSubMenu ? "visible" : "hidden" }}
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
