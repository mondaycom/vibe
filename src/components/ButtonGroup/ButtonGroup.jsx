import React, { useRef, forwardRef, useCallback, useMemo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Button from "../Button/Button";
import usePrevious from "../../hooks/usePrevious";
import useMergeRefs from "../../hooks/useMergeRefs";
import { baseClassName } from "./ButtonGroupConstants";
import "./ButtonGroup.scss";

const ButtonGroup = forwardRef(
  ({ componentClassName, options, name, disabled, value, onSelect, size, kind, groupAriaLabel }, ref) => {
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
      return options.map(option => {
        const isSelected = option.value === valueState;
        return (
          <Button
            key={option.value}
            size={size}
            onClick={() => onClick(option)}
            rightIcon={option.icon}
            leftIcon={option.leftIcon}
            disabled={disabled || option.disabled}
            active={isSelected}
            kind={Button.kinds.TERTIARY}
            preventClickAnimation
            ariaLabel={option.ariaLabel}
          >
            {option.text && (
              <span className={cx(`${baseClassName}__option-text`, { selected: isSelected, disabled })}>
                {" "}
                {option.text}{" "}
              </span>
            )}
          </Button>
        );
      });
    }, [options, disabled, onClick, size, valueState]);

    // Effects
    useEffect(() => {
      // Update value if changed from props
      if (value !== prevValue && value !== valueState) {
        setValueState(value);
      }
    }, [value, prevValue, valueState, setValueState]);

    return (
      <div
        className={cx(baseClassName, componentClassName, `${baseClassName}--kind-${kind}`, { disabled })}
        ref={mergedRef}
      >
        <div role="group" aria-label={groupAriaLabel} className={cx(`${baseClassName}__buttons-container`)}>
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

ButtonGroup.defaultProps = {
  componentClassName: "",
  value: "",
  name: "",
  disabled: false,
  size: ButtonGroup.sizes.SMALL,
  kind: ButtonGroup.kinds.SECONDARY
};
ButtonGroup.propTypes = {
  componentClassName: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf([ButtonGroup.sizes.SMALL, ButtonGroup.sizes.MEDIUM, ButtonGroup.sizes.LARGE]),
  kind: PropTypes.oneOf([ButtonGroup.kinds.SECONDARY, ButtonGroup.kinds.TERTIARY])
};

export default ButtonGroup;
