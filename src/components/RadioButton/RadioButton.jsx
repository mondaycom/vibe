import React, { forwardRef, useCallback, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import Clickable from "../Clickable/Clickable";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import "./RadioButton.scss";

const CSS_BASE_CLASS = "monday-style-radio-button-component";

const RadioButton = forwardRef(
  (
    {
      className,
      // Backward compatibility for props naming
      componentClassName,
      text,
      value,
      name,
      disabled,
      defaultChecked,
      children,
      onSelect,
      checked,
      retainChildClick,
      childrenTabIndex,
      noLabelAnimation
    },
    ref
  ) => {
    const inputRef = useRef();
    const mergedRef = useMergeRefs({ refs: [ref, inputRef] });
    const overrideClassName = backwardCompatibilityForProperties([className, componentClassName]);
    const onChildClick = useCallback(() => {
      if (disabled || !retainChildClick) return;
      if (inputRef.current) {
        inputRef.current.checked = true;
      }
      if (onSelect) {
        onSelect();
      }
    }, [onSelect, inputRef, disabled, retainChildClick]);

    const checkedProps = useMemo(() => {
      if (checked !== undefined) {
        return { checked };
      }
      return { defaultChecked };
    }, [checked, defaultChecked]);

    return (
      <label className={cx(CSS_BASE_CLASS, overrideClassName, { disabled })}>
        <span className={`${CSS_BASE_CLASS}__radio-input-container`}>
          <input
            className={`${CSS_BASE_CLASS}__radio-input-container__radio-input`}
            type="radio"
            value={value}
            name={name}
            disabled={disabled}
            {...checkedProps}
            onChange={onSelect}
            ref={mergedRef}
          />
          <span
            className={cx(`${CSS_BASE_CLASS}__radio-input-container__radio-control`, {
              [`${CSS_BASE_CLASS}__radio-input-container__radio-control--label-animation`]: !noLabelAnimation
            })}
          />
        </span>
        {text && <span className={`${CSS_BASE_CLASS}__radio-label`}>{text}</span>}
        {children && (
          <Clickable className="radio-children-wrapper" onClick={onChildClick} tabIndex={childrenTabIndex}>
            {children}
          </Clickable>
        )}
      </label>
    );
  }
);

RadioButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  /** Auto check by default */
  defaultChecked: PropTypes.bool,
  /** Controlled externally - When used, need to be set for all radio buttons in the same group */
  checked: PropTypes.bool,
  onSelect: PropTypes.func,
  /** If set to false, will revert to base `onSelect` behaviour */
  retainChildClick: PropTypes.bool,
  /** Sets the tabindex for the passed children prop */
  childrenTabIndex: PropTypes.string,
  /** Disable label animation when selected radio button, for preventing label to jump because of css
      overrides implements on the radio button container */
  noLabelAnimation: PropTypes.bool
};

RadioButton.defaultProps = {
  className: undefined,
  text: "",
  value: "",
  name: "",
  disabled: false,
  defaultChecked: false,
  checked: undefined,
  onSelect: undefined,
  retainChildClick: true,
  childrenTabIndex: "0",
  noLabelAnimation: false
};
export default RadioButton;
