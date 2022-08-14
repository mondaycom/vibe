import React, { useCallback, useEffect, useRef, useMemo } from "react";
import cx from "classnames";
import Icon from "../../../Icon/Icon";
import Tooltip from "../../../Tooltip/Tooltip";
import useIsOverflowing from "../../../../hooks/useIsOverflowing";
import { keyCodes } from "../../../../constants/KeyCodes";
import { getOptionId } from "../../ComboboxHelpers/ComboboxHelpers";
import "./ComboboxOption.scss";

const ComboboxOption = ({
  index,
  option,
  isActive,
  visualFocus,
  scrollRef,
  scrollOffset,
  onOptionClick,
  onOptionLeave,
  onOptionHover,
  optionLineHeight,
  shouldScrollWhenActive,
  optionRenderer,
  /**
   * temporary flag for investigate a bug - will remove very soon
   */
  forceUndoScrollNullCheck = false
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
    ariaLabel,
    belongToCategory = false
  } = option;
  let { tooltipContent } = option;

  const ref = useRef(null);
  const labelRef = useRef();

  const isOptionOverflowing = useIsOverflowing({ ref: labelRef });

  useEffect(() => {
    const element = ref.current;
    if (visualFocus && element && shouldScrollWhenActive) {
      if (scrollRef?.current && element) {
        // not supported with virtualized atm, need their scrollRef (element with overflow-y auto that has the scroll)
        scrollRef.current.scrollTop = element.offsetTop - scrollOffset;
      } else {
        if (forceUndoScrollNullCheck) {
          element?.scrollIntoView?.({ behaviour: "smooth" });
        } else {
          element.scrollIntoView?.({ behaviour: "smooth" });
        }
      }
    }
  }, [ref, visualFocus, shouldScrollWhenActive, forceUndoScrollNullCheck, scrollRef, scrollOffset, belongToCategory]);

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

  const optionRendererValue = useMemo(() => optionRenderer && optionRenderer(option), [optionRenderer, option]);

  const optionValue = (
    <>
      {leftIcon && renderIcon(leftIcon, leftIconType, "left")}
      <div ref={labelRef} className="option-label">
        {label}
      </div>
      {rightIcon && renderIcon(rightIcon, rightIconType, "right")}
    </>
  );

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <Tooltip content={tooltipContent}>
      <div
        ref={ref}
        key={id || label}
        aria-level={belongToCategory ? 2 : 1}
        aria-selected={isActive}
        aria-label={ariaLabel || label}
        id={getOptionId(id, index)}
        onMouseEnter={onMouseEnter}
        onClick={onClick}
        onKeyDown={onKeyDown}
        onMouseLeave={onMouseLEave}
        className={cx("combobox-option", {
          disabled,
          selected,
          active: isActive,
          "active-outline": visualFocus,
          first: index === 0
        })}
        style={{ height: optionLineHeight }}
      >
        {optionRendererValue || optionValue}
      </div>
    </Tooltip>
  );
};

ComboboxOption.iconTypes = {
  DEFAULT: "default",
  RENDERER: "renderer"
};

ComboboxOption.defaultProps = {
  shouldScrollWhenActive: true,
  optionRenderer: null,
  scrollOffset: 100
};

export default ComboboxOption;
