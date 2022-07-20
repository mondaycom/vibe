import React, { useRef, forwardRef, useCallback, useMemo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Button from "../../components/Button/Button";
import usePrevious from "../../hooks/usePrevious";
import useMergeRefs from "../../hooks/useMergeRefs";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { baseClassName } from "./ButtonGroupConstants";
import { ButtonWrapper } from "./ButtonWrapper";
import "./ButtonGroup.scss";

const ButtonGroup = forwardRef(
  (
    {
      className,
      // Backward compatibility for props naming
      componentClassName,
      options,
      name,
      disabled,
      value,
      onSelect,
      size,
      kind,
      groupAriaLabel,
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
      option => {
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

ButtonGroup.propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSelect: PropTypes.func,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf([ButtonGroup.sizes.SMALL, ButtonGroup.sizes.MEDIUM, ButtonGroup.sizes.LARGE]),
  kind: PropTypes.oneOf([ButtonGroup.kinds.SECONDARY, ButtonGroup.kinds.TERTIARY]),
  groupAriaLabel: PropTypes.string,
  tooltipPosition: PropTypes.string,
  tooltipHideDelay: PropTypes.number,
  tooltipShowDelay: PropTypes.number,
  tooltipContainerSelector: PropTypes.string,
  tooltipMoveBy: PropTypes.object
};

ButtonGroup.defaultProps = {
  className: undefined,
  value: "",
  name: "",
  disabled: false,
  size: ButtonGroup.sizes.SMALL,
  kind: ButtonGroup.kinds.SECONDARY,
  groupAriaLabel: "",
  tooltipContainerSelector: undefined,
  tooltipPosition: undefined,
  tooltipHideDelay: undefined,
  tooltipShowDelay: undefined,
  tooltipMoveBy: undefined,
  onSelect: undefined
};

export default ButtonGroup;
