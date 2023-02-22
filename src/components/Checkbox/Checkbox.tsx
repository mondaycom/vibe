import React, { forwardRef, useCallback, useEffect, useMemo, useRef, FC } from "react";
import { isNil, noop as NOOP } from "lodash-es";
import cx from "classnames";
import Icon from "../Icon/Icon";
import Check from "../Icon/Icons/components/Check";
import Remove from "../Icon/Icons/components/Remove";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { useSupportFirefoxLabelClick } from "./hooks/useSupportFirefoxLabelClick";
import useMergeRefs from "../../hooks/useMergeRefs";
import "./Checkbox.scss";
import { VibeComponentProps } from "../../types";

export interface CheckBoxProps extends VibeComponentProps {
  className?: string;
  // Backward compatibility for props naming
  componentClassName?: string;
  checkboxClassName?: string;
  labelClassName?: string;
  ariaLabel?: string;
  label?: React.ReactNode | Array<React.ReactNode>;
  ariaLabelledBy?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  defaultChecked?: boolean;
  value?: string;
  name?: string;
  id?: string;
}

const BASE_CLASS_NAME = "monday-style-checkbox";

const Checkbox: React.FC<CheckBoxProps> = forwardRef(
  (
    {
      className,
      // Backward compatibility for props naming
      componentClassName,
      checkboxClassName,
      labelClassName,
      ariaLabel,
      label,
      ariaLabelledBy,
      onChange = NOOP,
      checked,
      indeterminate = false,
      disabled = false,
      defaultChecked,
      value = "",
      name = "",
      id
    },
    ref
  ) => {
    const iconContainerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const mergedInputRef = useMergeRefs({ refs: [ref, inputRef] });
    const overrideClassName = backwardCompatibilityForProperties([className, componentClassName]);
    const onMouseUpCallback = useCallback(() => {
      const input = inputRef.current;
      if (!input) return;

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          input.blur();
        });
      });
    }, [inputRef]);

    const checkboxClassNames = [
      `${BASE_CLASS_NAME}__checkbox`,
      `${BASE_CLASS_NAME}__prevent-animation`,
      checkboxClassName
    ];
    let overrideDefaultChecked = defaultChecked;

    // If component did not receive default checked and checked props, choose default checked as
    // default behavior (handle isChecked logic inside input) and set default value
    if (isNil(overrideDefaultChecked) && isNil(checked)) {
      overrideDefaultChecked = false;
    }

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [inputRef, indeterminate]);

    const { onClickCapture: onClickCaptureLabel } = useSupportFirefoxLabelClick({ inputRef });

    const finalAriaLabel = useMemo(() => {
      if (ariaLabel) return ariaLabel;
      if (typeof label === "string") return label;
      return "";
    }, [ariaLabel, label]);

    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <label
        className={cx(BASE_CLASS_NAME, overrideClassName, { [`${BASE_CLASS_NAME}__disabled`]: disabled })}
        onMouseUp={onMouseUpCallback}
        htmlFor={id}
        onClickCapture={onClickCaptureLabel}
      >
        <input
          ref={mergedInputRef}
          id={id}
          className={`${BASE_CLASS_NAME}__input`}
          value={value}
          name={name}
          type="checkbox"
          onChange={onChange}
          defaultChecked={overrideDefaultChecked}
          disabled={disabled}
          aria-label={finalAriaLabel}
          aria-labelledby={ariaLabelledBy}
          checked={checked}
        />
        <div className={cx(...checkboxClassNames)} ref={iconContainerRef}>
          <Icon
            className={`${BASE_CLASS_NAME}__icon`}
            iconType={Icon.type.SVG}
            icon={indeterminate ? Remove : Check}
            ignoreFocusStyle
            clickable={false}
            ariaHidden={true}
            iconSize="16"
          />
        </div>
        {label === false ? null : <span className={cx(`${BASE_CLASS_NAME}__label`, labelClassName)}>{label}</span>}
      </label>
    );
  }
);

export default Checkbox;
