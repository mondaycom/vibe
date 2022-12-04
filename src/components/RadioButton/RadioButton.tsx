import React, { forwardRef, useCallback, useMemo, useRef } from "react";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import Clickable from "../Clickable/Clickable";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { baseClassName } from "./RadioButtonConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import Tooltip from "../Tooltip/Tooltip";
import "./RadioButton.scss";

interface RadioButtonProps extends VibeComponentProps {
  className?: string;
  componentClassName?: string;
  text?: string;
  value?: string;
  name?: string;
  disabled?: boolean;
  disabledReason?: string;
  defaultChecked?: boolean;
  children?: React.ReactNode;
  onSelect?: (event: React.ChangeEvent<HTMLInputElement | null>) => void;
  checked?: boolean;
  retainChildClick?: boolean;
  childrenTabIndex?: string;
  noLabelAnimation?: boolean;
}

const RadioButton: VibeComponent<RadioButtonProps, HTMLElement> = forwardRef(
  (
    {
      className,
      // Backward compatibility for props naming
      componentClassName,
      text = "",
      value = "",
      name = "",
      disabled = false,
      disabledReason,
      defaultChecked = false,
      children,
      onSelect,
      checked,
      retainChildClick = true,
      childrenTabIndex = "0",
      noLabelAnimation = false
    },
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const inputRef = useRef<HTMLInputElement | null>();
    const mergedRef = useMergeRefs({ refs: [ref, inputRef] });
    const overrideClassName = backwardCompatibilityForProperties([className, componentClassName]);
    const onChildClick = useCallback(() => {
      if (disabled || !retainChildClick) return;
      if (inputRef.current) {
        inputRef.current.checked = true;
      }
      if (onSelect) {
        onSelect(null);
      }
    }, [onSelect, inputRef, disabled, retainChildClick]);

    const checkedProps = useMemo(() => {
      if (checked !== undefined) {
        return { checked };
      }
      return { defaultChecked };
    }, [checked, defaultChecked]);

    const tooltipContent = disabled ? disabledReason : null;

    return (
      <Tooltip content={tooltipContent}>
        <label className={cx(baseClassName, overrideClassName, { disabled })}>
          <span className={`${baseClassName}__radio-input-container`}>
            <input
              className={`${baseClassName}__radio-input-container__radio-input`}
              type="radio"
              value={value}
              name={name}
              disabled={disabled}
              {...checkedProps}
              onChange={onSelect}
              ref={mergedRef}
            />
            <span
              className={cx(`${baseClassName}__radio-input-container__radio-control`, {
                [`${baseClassName}__radio-input-container__radio-control--label-animation`]: !noLabelAnimation
              })}
            />
          </span>
          {text && <span className={`${baseClassName}__radio-label`}>{text}</span>}
          {children && (
            <Clickable className="radio-children-wrapper" onClick={onChildClick} tabIndex={childrenTabIndex}>
              {children}
            </Clickable>
          )}
        </label>
      </Tooltip>
    );
  }
);

export default RadioButton;
