import React from "react";
import cx from "classnames";
import Icon from "../../../Icon/Icon";
import "./ComboboxOption.scss";

const ComboboxOption = ({
  index,
  option,
  isActive,
  isActiveByKeyboard,
  onOptionClick,
  onOptionHover,
  optionLineHeight
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

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <div
      key={id || label}
      role="option"
      ariaLabel={ariaLabel || label}
      id={`combobox-item-${index}`}
      onMouseEnter={!disabled && onOptionHover}
      onClick={event => onOptionClick(event, index, option, true)}
      className={cx("combobox-option", {
        disabled,
        selected,
        active: isActive,
        "active-outline": isActiveByKeyboard && isActive
      })}
      style={{ height: optionLineHeight }}
    >
      {leftIcon && renderIcon(leftIcon, leftIconType, "left")}
      <div className="option-label">{label}</div>
      {rightIcon && renderIcon(rightIcon, rightIconType, "right")}
    </div>
  );
};

ComboboxOption.iconTypes = {
  DEFAULT: "default",
  RENDERER: "renderer"
};

export default ComboboxOption;
