import React, { RefObject, useCallback, useEffect, useMemo, useRef } from "react";
import cx from "classnames";
import Icon from "../../../Icon/Icon";
import Tooltip from "../../../Tooltip/Tooltip";
import useIsOverflowing from "../../../../hooks/useIsOverflowing/useIsOverflowing";
import { keyCodes } from "../../../../constants/keyCodes";
import { getOptionId } from "../../helpers";
import { ComboboxOptionIcon, IComboboxOption, IComboboxOptionEvents } from "../ComboboxConstants";
import "./ComboboxOption.scss";
import { SubIcon } from "../../../../types";

interface ComboboxOptionProps extends IComboboxOptionEvents {
  index?: number;
  option?: IComboboxOption;
  className?: string;
  isActive?: boolean;
  visualFocus?: boolean;
  scrollRef?: RefObject<HTMLElement>;
  scrollOffset?: number;
  optionLineHeight?: number;
  shouldScrollWhenActive?: boolean;
  optionRenderer?: (option: IComboboxOption) => JSX.Element;
  /**
   * temporary flag for investigate a bug - will remove very soon
   */
  forceUndoScrollNullCheck?: boolean;
}

const ComboboxOption: React.FC<ComboboxOptionProps> & { iconTypes?: typeof ComboboxOptionIcon } = ({
  index,
  option,
  className,
  isActive,
  visualFocus,
  scrollRef,
  scrollOffset = 100,
  onOptionClick,
  onOptionLeave,
  onOptionHover,
  optionLineHeight,
  shouldScrollWhenActive = true,
  optionRenderer = null,
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

  const renderIcon = (
    icon: SubIcon | ((className: string) => JSX.Element),
    iconType: ComboboxOptionIcon,
    className: string
  ) => {
    if (iconType === ComboboxOptionIcon.RENDERER) {
      return (icon as (className: string) => JSX.Element)(`option-icon ${className}`);
    }

    return (
      <Icon
        className={cx("option-icon", className)}
        iconType={Icon.type.ICON_FONT}
        clickable={false}
        icon={icon as SubIcon}
        iconSize={iconSize}
        ignoreFocusStyle
      />
    );
  };

  const onClick = useCallback(
    (event: React.MouseEvent) => {
      onOptionClick(event, index, option, true);
    },
    [index, option, onOptionClick]
  );

  const onMouseLeave = useCallback(
    (event: React.MouseEvent) => {
      if (disabled) return;
      onOptionLeave(event, index, option, true);
    },
    [index, option, onOptionLeave, disabled]
  );

  const onMouseEnter = useCallback(
    (event: React.MouseEvent) => {
      if (disabled) return;
      onOptionHover(event, index, option, true);
    },
    [index, option, onOptionHover, disabled]
  );

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
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
        onMouseLeave={onMouseLeave}
        className={cx("combobox-option", className, {
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

Object.assign(ComboboxOption, { iconTypes: ComboboxOptionIcon });

export default ComboboxOption;
