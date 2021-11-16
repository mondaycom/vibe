import React, { useCallback, useEffect, useRef } from "react";
import cx from "classnames";
import Icon from "../../../Icon/Icon";
import Tooltip from "../../../Tooltip/Tooltip";
import useIsOverflowing from "../../../../hooks/useIsOverflowing";
import "./ComboboxOption.scss";
import { keyCodes } from "../../../../constants/KeyCodes";

const ComboboxOption = ({
  index,
  option,
  isActive,
  isActiveByKeyboard,
  onOptionClick,
  onOptionLeave,
  onOptionHover,
  optionLineHeight,
  shouldScrollWhenActive
}) => {
  const {
    id,
    leftIcon,
    rightIcon,
    leftIconType,
    rightIconType,
    label,
    iconSize = 16,
    disabled,
    selected,
    ariaLabel
  } = option;
  let { tooltipContent } = option;

  const ref = useRef(null);
  const labelRef = useRef();

  const isOptionOverflowing = useIsOverflowing({ ref: labelRef });

  useEffect(() => {
    const element = ref.current;
    if (isActive && element && shouldScrollWhenActive) {
      element.scrollIntoView({ behaviour: "smooth" });
    }
  }, [ref, isActive, shouldScrollWhenActive]);

  const renderIcon = (icon, iconType, className) => {
    if (iconType === ComboboxOption.iconTypes.RENDERER) {
      return icon(`option-icon ${className}`);
    }

    return (
      <Icon
        className={cx("option-icon", className)}
        iconType={Icon.type.ICON_FONT}
        clickable={false}
        icon={icon}
        iconSize={iconSize}
        ignoreFocusStyle
      />
    );
  };

  const onClick = useCallback(
    event => {
      onOptionClick(event, index, option, true);
    },
    [index, option, onOptionClick]
  );

  const onMouseLEave = useCallback(
    event => {
      if (disabled) return;
      onOptionLeave(event, index, option, true);
    },
    [index, option, onOptionLeave, disabled]
  );

  const onMouseEnter = useCallback(
    event => {
      if (disabled) return;
      onOptionHover(event, index, option, true);
    },
    [index, option, onOptionHover, disabled]
  );

  const onKeyDown = useCallback(
    event => {
      if (event.key === keyCodes.ENTER || event.key === keyCodes.SPACE) {
        onOptionClick(event, index, option, false);
      }
    },
    [onOptionClick, index, option]
  );
  if (!tooltipContent) {
    tooltipContent = isOptionOverflowing ? label : null;
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <Tooltip content={tooltipContent}>
      <div
        ref={ref}
        key={id || label}
        role="option"
        aria-selected={isActive}
        tabIndex="-1"
        aria-label={ariaLabel || label}
        id={`combobox-item-${index}`}
        onMouseEnter={onMouseEnter}
        onClick={onClick}
        onKeyDown={onKeyDown}
        onMouseLeave={onMouseLEave}
        className={cx("combobox-option", {
          disabled,
          selected,
          active: isActive,
          "active-outline": isActiveByKeyboard && isActive,
          first: index === 0
        })}
        style={{ height: optionLineHeight }}
      >
        {leftIcon && renderIcon(leftIcon, leftIconType, "left")}
        <div ref={labelRef} className="option-label">
          {label}
        </div>
        {rightIcon && renderIcon(rightIcon, rightIconType, "right")}
      </div>
    </Tooltip>
  );
};

ComboboxOption.iconTypes = {
  DEFAULT: "default",
  RENDERER: "renderer"
};

ComboboxOption.defaultProps = {
  shouldScrollWhenActive: true
};

export default ComboboxOption;
