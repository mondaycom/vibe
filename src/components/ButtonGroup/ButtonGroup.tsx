import React, { useRef, forwardRef, useCallback, useMemo, useEffect, useState } from "react";
import cx from "classnames";
import Button from "../Button/Button";
import usePrevious from "../../hooks/usePrevious";
import useMergeRefs from "../../hooks/useMergeRefs";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { baseClassName } from "./ButtonGroupConstants";
import { ButtonWrapper } from "./ButtonWrapper";
import "./ButtonGroup.scss";
import VibeComponentProps from "../../types/VibeComponentProps";
import { BASE_SIZES, SIZES } from "../../constants/sizes";
import { ButtonType, Size } from "../Button/ButtonConstants";
import { IconType } from "../Icon/IconConstants";

type ButtonGroupOption = {
  icon?: IconType;
  leftIcon?: IconType;
  ariaLabel?: string;
  subText?: string;
  value: number;
  text: string;
  disabled?: boolean;
  tooltipContent?: string;
};

interface ButtonGroupProps extends VibeComponentProps {
  className?: string;
  componentClassName?: string;
  options: ButtonGroupOption[];
  value: string | number;
  onSelect: (value: number, name: string) => void;
  size?: Size;
  kind?: ButtonType.SECONDARY | ButtonType.TERTIARY;
  name?: string;
  disabled?: boolean;
  groupAriaLabel?: string;
  tooltipPosition?: string;
  tooltipHideDelay?: number;
  tooltipShowDelay?: number;
  tooltipContainerSelector?: string;
  tooltipMoveBy?: { main: number; secondary: number };
}

const ButtonGroup: React.ForwardRefExoticComponent<ButtonGroupProps & React.PropsWithChildren<unknown>> & {
  sizes?: typeof SIZES;
  kinds?: typeof ButtonType;
} = forwardRef(
  (
    {
      className,
      // Backward compatibility for props naming
      componentClassName,
      options,
      name = "",
      disabled = false,
      value = "",
      onSelect,
      size = BASE_SIZES.SMALL,
      kind = ButtonType.SECONDARY,
      groupAriaLabel = "",
      tooltipPosition,
      tooltipHideDelay,
      tooltipShowDelay,
      tooltipContainerSelector,
      tooltipMoveBy
    },
    ref
  ) => {
    const overrideClassName = backwardCompatibilityForProperties([className, componentClassName]);
    const inputRef = useRef();
    const [valueState, setValueState] = useState(value);
    const prevValue = usePrevious(value);
    const mergedRef = useMergeRefs({ refs: [ref, inputRef] });

    const onClick = useCallback(
      (option: ButtonGroupOption) => {
        const isDisabled = disabled || option.disabled;
        if (!isDisabled) {
          setValueState(option.value);
          if (onSelect) {
            onSelect(option.value, name);
          }
        }
      },
      [onSelect, disabled, name]
    );

    const selectedOption = useMemo(() => {
      return options.find(option => option.value === valueState);
    }, [options, valueState]);

    const Buttons = useMemo(() => {
      return options.map((option, index) => {
        const isSelected = option.value === valueState;
        return (
          <ButtonWrapper
            key={option.value}
            size={size}
            onClick={() => onClick(option)}
            rightIcon={option.icon}
            leftIcon={option.leftIcon}
            active={isSelected}
            rightFlat={index !== options.length - 1}
            leftFlat={index !== 0}
            kind={Button.kinds.TERTIARY}
            preventClickAnimation
            ariaLabel={option.ariaLabel}
            tooltipContent={option.tooltipContent}
            tooltipPosition={tooltipPosition}
            tooltipHideDelay={tooltipHideDelay}
            tooltipShowDelay={tooltipShowDelay}
            tooltipContainerSelector={tooltipContainerSelector}
            tooltipMoveBy={tooltipMoveBy}
            className={cx(`${baseClassName}__option-text`, {
              selected: isSelected,
              disabled,
              "button-disabled": option.disabled
            })}
          >
            {option.text}
          </ButtonWrapper>
        );
      });
    }, [
      options,
      disabled,
      onClick,
      size,
      valueState,
      tooltipPosition,
      tooltipHideDelay,
      tooltipShowDelay,
      tooltipContainerSelector,
      tooltipMoveBy
    ]);

    // Effects
    useEffect(() => {
      // Update value if changed from props
      if (value !== prevValue && value !== valueState) {
        setValueState(value);
      }
    }, [value, prevValue, valueState, setValueState]);

    return (
      <div
        className={cx(baseClassName, overrideClassName, `${baseClassName}--kind-${kind}`, { disabled })}
        ref={mergedRef}
      >
        <div
          role="group"
          aria-label={groupAriaLabel}
          className={cx(`${baseClassName}__buttons-container`)}
          aria-disabled={disabled}
        >
          {Buttons}
        </div>
        {selectedOption && selectedOption.subText && (
          <div className={`${baseClassName}__sub-text-container`}>{selectedOption.subText}</div>
        )}
      </div>
    );
  }
);

ButtonGroup.sizes = Button.sizes;
ButtonGroup.kinds = Button.kinds;

export default ButtonGroup;
