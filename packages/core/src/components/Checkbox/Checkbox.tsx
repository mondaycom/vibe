import React, { forwardRef, useCallback, useEffect, useMemo, useRef } from "react";
import cx from "classnames";
import { isNil, noop as NOOP } from "lodash-es";
import Icon from "../Icon/Icon";
import { Check, Remove } from "@vibe/icons";
import { useSupportFirefoxLabelClick } from "./hooks/useSupportFirefoxLabelClick";
import useMergeRef from "../../hooks/useMergeRef";
import { VibeComponentProps } from "../../types";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId, ComponentVibeId } from "../../tests/constants";
import Text from "../Text/Text";
import styles from "./Checkbox.module.scss";

export interface CheckBoxProps extends VibeComponentProps {
  /**
   * Class name applied to the checkbox element.
   */
  checkboxClassName?: string;
  /**
   * Class name applied to the label element.
   */
  labelClassName?: string;
  /**
   * The label of the checkbox for accessibility.
   */
  ariaLabel?: string;
  /**
   * The content displayed next to the checkbox.
   */
  label?: React.ReactNode | Array<React.ReactNode>;
  /**
   * The ID of an element describing the checkbox.
   */
  ariaLabelledBy?: string;
  /**
   * Callback fired when the checkbox value changes.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * If true, controls the checked state of the checkbox.
   */
  checked?: boolean;
  /**
   * If true, displays an indeterminate state.
   */
  indeterminate?: boolean;
  /**
   * If true, the checkbox automatically receives focus.
   */
  autoFocus?: boolean;
  /**
   * If true, the checkbox is disabled.
   */
  disabled?: boolean;
  /**
   * The initial checked state of the checkbox.
   */
  defaultChecked?: boolean;
  /**
   * The value submitted with the form when checked.
   */
  value?: string;
  /**
   * The name of the checkbox, used for form submission.
   */
  name?: string;
  /**
   * The tab order of the checkbox.
   */
  tabIndex?: number;
}

const Checkbox = forwardRef(
  (
    {
      className,
      checkboxClassName,
      labelClassName,
      ariaLabel,
      label,
      ariaLabelledBy,
      onChange = NOOP,
      checked,
      autoFocus,
      indeterminate = false,
      disabled = false,
      defaultChecked,
      tabIndex,
      value = "",
      name = "",
      id,
      "data-testid": dataTestId
    }: CheckBoxProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const mergedInputRef = useMergeRef(ref, inputRef);
    const iconContainerRef = useRef<HTMLDivElement>(null);

    const onMouseUpCallback = useCallback(() => {
      const input = inputRef.current;
      if (!input) return;

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          input.blur();
        });
      });
    }, [inputRef]);
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
        className={cx(styles.wrapper, className)}
        onMouseUp={onMouseUpCallback}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.CHECKBOX, id)}
        htmlFor={id}
        onClickCapture={onClickCaptureLabel}
      >
        <input
          ref={mergedInputRef}
          id={id}
          className={styles.input}
          value={value}
          name={name}
          type="checkbox"
          autoFocus={autoFocus}
          onChange={onChange}
          defaultChecked={overrideDefaultChecked}
          disabled={disabled}
          aria-label={finalAriaLabel}
          aria-labelledby={ariaLabelledBy}
          checked={checked}
          tabIndex={tabIndex}
        />
        <div
          className={cx(styles.checkbox, checkboxClassName)}
          ref={iconContainerRef}
          data-testid={getTestId(ComponentDefaultTestId.CHECKBOX_CHECKBOX, id)}
          data-vibe={ComponentVibeId.CHECKBOX}
        >
          <Icon
            className={styles.icon}
            iconType="svg"
            icon={indeterminate ? Remove : Check}
            ignoreFocusStyle
            ariaHidden={true}
            iconSize="16"
          />
        </div>
        {label === false ? null : (
          <Text
            element="span"
            type="text2"
            className={cx(styles.label, labelClassName)}
            data-testid={getTestId(ComponentDefaultTestId.CHECKBOX_LABEL, id)}
          >
            {label}
          </Text>
        )}
      </label>
    );
  }
);

export default Checkbox;
