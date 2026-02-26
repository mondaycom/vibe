import cx from "classnames";
import React, { type RefObject, useCallback, useEffect, useMemo, useRef } from "react";
import { Icon, type SubIcon } from "@vibe/icon";
import { Tooltip } from "@vibe/tooltip";
import { useIsOverflowing } from "@vibe/hooks";
import { keyCodes } from "../../../../constants";
import { getOptionId } from "../../helpers";
import { type IComboboxOption, type IComboboxOptionEvents } from "../ComboboxConstants";
import { type ComboboxOptionIconType } from "../../Combobox.types";
import { ComponentDefaultTestId, getTestId } from "../../../../tests/test-ids-utils";
import styles from "./ComboboxOption.module.scss";

export interface ComboboxOptionProps extends IComboboxOptionEvents {
  /**
   * The index of the option in the list.
   */
  index?: number;
  /**
   * The option data containing label, icons, and other properties.
   */
  option?: IComboboxOption;
  /**
   * Class name applied to the option element.
   */
  className?: string;
  /**
   * If true, the option is currently active.
   */
  isActive?: boolean;
  /**
   * If true, the option has visual focus.
   */
  visualFocus?: boolean;
  /**
   * A reference to the scroll container.
   */
  scrollRef?: RefObject<HTMLElement>;
  /**
   * The amount of offset when scrolling to the active item.
   */
  scrollOffset?: number;
  /**
   * The height of each option.
   */
  optionLineHeight?: number;
  /**
   * If true, scrolls to the active option when it is selected.
   */
  shouldScrollWhenActive?: boolean;
  /**
   * Custom renderer for the option content.
   */
  optionRenderer?: (option: IComboboxOption) => JSX.Element;
}

const ComboboxOption = ({
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
  optionRenderer = null
}: ComboboxOptionProps) => {
  const {
    id,
    leftIcon,
    leftIconType,
    rightIcon,
    rightIconType,
    label,
    iconSize = 18,
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
        element?.scrollIntoView?.({ behaviour: "smooth" });
      }
    }
  }, [ref, visualFocus, shouldScrollWhenActive, scrollRef, scrollOffset, belongToCategory]);

  const renderIcon = (
    icon: SubIcon | ((className: string) => JSX.Element),
    iconType: ComboboxOptionIconType,
    className: string
  ) => {
    if (iconType === "renderer") {
      return (icon as (className: string) => JSX.Element)(cx(styles.optionIcon, className));
    }

    return (
      <Icon
        className={cx(styles.optionIcon, className)}
        iconType="font"
        icon={icon as SubIcon}
        iconSize={iconSize}
        ignoreFocusStyle
      />
    );
  };

  const onClick = useCallback(
    (event: React.MouseEvent) => {
      if (disabled) return;
      onOptionClick(event, index, option, true);
    },
    [index, option, onOptionClick, disabled]
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
      {leftIcon && renderIcon(leftIcon, leftIconType, styles.left)}
      <div ref={labelRef} className={cx(styles.optionLabel)}>
        {label}
      </div>
      {rightIcon && renderIcon(rightIcon, rightIconType, "")}
    </>
  );

  return (
    <Tooltip {...option.tooltipProps} content={tooltipContent} hideWhenReferenceHidden>
      <div
        ref={ref}
        key={id || label}
        aria-level={belongToCategory ? 2 : 1}
        aria-selected={isActive}
        aria-label={ariaLabel || label}
        id={getOptionId(id, index)}
        data-testid={getTestId(ComponentDefaultTestId.COMBOBOX_OPTION, index)}
        onMouseEnter={onMouseEnter}
        onClick={onClick}
        onKeyDown={onKeyDown}
        onMouseLeave={onMouseLeave}
        className={cx(styles.comboboxOption, className, {
          [styles.disabled]: disabled,
          [styles.selected]: selected,
          [styles.active]: isActive,
          [styles.activeOutline]: visualFocus
        })}
        style={{ height: optionLineHeight }}
      >
        {optionRendererValue || optionValue}
      </div>
    </Tooltip>
  );
};

export default ComboboxOption;
