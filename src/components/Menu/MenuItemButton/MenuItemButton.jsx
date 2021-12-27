/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from "react";

import PropTypes from "prop-types";
import cx from "classnames";
import Button from "../../Button/Button";
import Tooltip from "../../Tooltip/Tooltip";

import useMergeRefs from "../../../hooks/useMergeRefs";

import useMenuItemMouseEvents from "../MenuItem/hooks/useMenuItemMouseEvents";
import useMenuItemKeyboardEvents from "../MenuItem/hooks/useMenuItemKeyboardEvents";

import { DialogPositions } from "../../../constants/sizes";
import "./MenuItemButton.scss";
import { backwardCompatibilityForProperties } from "../../../helpers/backwardCompatibilityForProperties";

const MenuItemButton = ({
  className,
  // Backward compatibility for props naming
  classname,
  kind,
  leftIcon,
  rightIcon,
  disabled,
  disableReason,
  index,
  activeItemIndex,
  onClick,
  menuId,
  tooltipPosition,
  tooltipShowDelay,
  children,
  resetOpenSubMenuIndex,
  setSubMenuIsOpenByIndex,
  setActiveItemIndex,
  menuRef,
  closeMenu,
  useDocumentEventListeners
}) => {
  const ref = useRef(null);
  const referenceElementRef = useRef(null);
  const overrideClassName = backwardCompatibilityForProperties([className, classname]);
  const mergedRef = useMergeRefs({ refs: [ref, referenceElementRef] });

  const shouldShowTooltip = disabled && disableReason;
  const tooltipContent = disableReason;

  const isActive = activeItemIndex === index;

  const isMouseEnter = useMenuItemMouseEvents(
    ref,
    resetOpenSubMenuIndex,
    setSubMenuIsOpenByIndex,
    isActive,
    setActiveItemIndex,
    index,
    false
  );

  const { onClickCallback } = useMenuItemKeyboardEvents(
    onClick,
    disabled,
    isActive,
    index,
    setActiveItemIndex,
    false,
    false,
    setSubMenuIsOpenByIndex,
    menuRef,
    isMouseEnter,
    closeMenu,
    useDocumentEventListeners
  );

  return (
    <Tooltip
      content={shouldShowTooltip ? tooltipContent : null}
      position={tooltipPosition}
      showDelay={tooltipShowDelay}
    >
      <li
        id={`${menuId}-${index}`}
        className={cx("monday-style-menu-item-button", overrideClassName)}
        ref={mergedRef}
        role="menuitem"
        aria-current={isActive}
      >
        <Button
          active={isActive}
          disabled={disabled}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          onClick={onClickCallback}
          kind={kind}
          size={Button.sizes.SMALL}
          blurOnMouseUp={false}
        >
          <div className="menu-item-button-content">{children}</div>
        </Button>
      </li>
    </Tooltip>
  );
};

MenuItemButton.kinds = Button.kinds;
MenuItemButton.tooltipPositions = DialogPositions;

MenuItemButton.defaultProps = {
  className: undefined,
  kind: MenuItemButton.kinds.PRIMARY,
  leftIcon: null,
  rightIcon: null,
  index: undefined,
  activeItemIndex: -1,
  disabled: false,
  disableReason: undefined,
  onClick: undefined,
  tooltipPosition: "right",
  tooltipShowDelay: 300
};

MenuItemButton.propTypes = {
  className: PropTypes.string,
  kind: PropTypes.oneOf([MenuItemButton.kinds.PRIMARY, MenuItemButton.kinds.SECONDARY, MenuItemButton.kinds.TERTIARY]),
  leftIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  rightIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  index: PropTypes.number,
  activeItemIndex: PropTypes.number,
  disabled: PropTypes.bool,
  disableReason: PropTypes.string,
  onClick: PropTypes.func,
  tooltipPosition: PropTypes.oneOf([
    MenuItemButton.tooltipPositions.RIGHT,
    MenuItemButton.tooltipPositions.LEFT,
    MenuItemButton.tooltipPositions.TOP,
    MenuItemButton.tooltipPositions.BOTTOM
  ]),
  tooltipShowDelay: PropTypes.number
};

MenuItemButton.isSelectable = true;
MenuItemButton.isMenuChild = true;

export default MenuItemButton;
