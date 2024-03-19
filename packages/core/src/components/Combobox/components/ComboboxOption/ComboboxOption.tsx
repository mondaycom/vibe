import cx from "classnames";
import React, { RefObject, useCallback, useEffect, useMemo, useRef } from "react";
import Icon from "../../../Icon/Icon";
import Tooltip from "../../../Tooltip/Tooltip";
import useIsOverflowing from "../../../../hooks/useIsOverflowing/useIsOverflowing";
import { keyCodes } from "../../../../constants/keyCodes";
import { getOptionId } from "../../helpers";
import { SubIcon, withStaticProps } from "../../../../types";
import { ComboboxOptionIconType, IComboboxOption, IComboboxOptionEvents } from "../ComboboxConstants";
import { ComponentDefaultTestId, getTestId } from "../../../../tests/test-ids-utils";
import styles from "./ComboboxOption.module.scss";

export interface ComboboxOptionProps extends IComboboxOptionEvents {
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
}

const ComboboxOption: React.FC<ComboboxOptionProps> & { iconTypes?: typeof ComboboxOptionIconType } = ({
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
}) => {
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
    if (iconType === ComboboxOptionIconType.RENDERER) {
      return (icon as (className: string) => JSX.Element)(cx(styles.optionIcon, className));
    }

    return (
      <Icon
        className={cx(styles.optionIcon, className)}
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
      {leftIcon && renderIcon(leftIcon, leftIconType, styles.left)}
      <div ref={labelRef} className={cx(styles.optionLabel)}>
        {label}
      </div>
      {rightIcon && renderIcon(rightIcon, rightIconType, "")}
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

export default withStaticProps(ComboboxOption, { iconTypes: ComboboxOptionIconType });
