import React, { useCallback, useRef, useEffect, useState, useLayoutEffect, useReducer } from "react";

import PropTypes from "prop-types";
import isFunction from "lodash/isFunction";
import cx from "classnames";

import Icon from "../../Icon/Icon";

import DropdownChevronRight from "../../Icon/Icons/components/DropdownChevronRight";
import useKeyEvent from "../../../hooks/useKeyEvent";
import useSetFocus from "../../../hooks/useSetFocus";
import useMergeRefs from "../../../hooks/useMergeRefs";
import useIsOverflowing from "../../../hooks/useIsOverflowing";
import useIsMouseOver from "../../../hooks/useIsMouseOver";

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
  children
}) => {
  const ref = useRef(null);
  const titleRef = useRef();
  const isHovered = useIsMouseOver({ ref: titleRef });

  const isHoveredAndOverflowing = useIsOverflowing({ ref: isHovered && titleRef });
  const [isActive, setIsActive] = useState(activeItemIndex === index);

  const referenceElementRef = useRef(null);
  const popperElementRef = useRef(null);
  const popperElement = popperElementRef.current;
  const referenceElement = referenceElementRef.current;

  const isSubMenuOpen = !!children && isActive;

  const { styles, attributes } = usePopover(referenceElement, popperElement, {
    isOpen: isSubMenuOpen
  });

  useEffect(() => {
    setIsActive(activeItemIndex === index);
  }, [activeItemIndex, index]);

  const onClickCallback = useCallback(
    event => {
      if (popperElement && popperElement.contains(event.target)) return;
      if (onClick && !disabled && isActive) {
        onClick(event);
      }
    },
    [onClick, disabled, isActive, popperElement]
  );

  const setActive = useCallback(() => {
    if (setActiveItemIndex) {
      setActiveItemIndex(index);
    } else {
      setIsActive(true);
    }
  }, [setActiveItemIndex, setIsActive, index]);

  const setUnActive = useCallback(() => {
    if (setActiveItemIndex) {
      setActiveItemIndex(-1);
    } else {
      setIsActive(false);
    }
  }, [setActiveItemIndex, setIsActive]);

  useSetFocus({ ref, setActive, setUnActive, isActive });
  useKeyEvent({ keys: ["Enter"], callback: onClickCallback });

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

  const mergedRef = useMergeRefs({ refs: [ref, referenceElementRef] });
  return (
    <div
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
        style={styles.popper}
        {...attributes.popper}
        className="monday-style-menu-item__popover"
        ref={popperElementRef}
      >
        <DialogContentContainer>{children}</DialogContentContainer>
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
