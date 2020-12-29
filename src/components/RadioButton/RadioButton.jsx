import React, { useRef, forwardRef, useCallback } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import { baseClassName } from "./RadioButtonConstants";
import "./RadioButton.scss";

const RadioButton = forwardRef(
  ({ componentClassName, text, value, name, disabled, defaultChecked, children, onSelect }, ref) => {
    const inputRef = useRef();
    const mergedRef = useMergeRefs({ refs: [ref, inputRef] });
    const onChildClick = useCallback(() => {
      if (disabled) return;
      if (inputRef.current) {
        inputRef.current.checked = true;
      }
      if (onSelect) {
        onSelect();
      }
    }, [onSelect, inputRef, disabled]);

    return (
      <label className={cx(baseClassName, componentClassName, { disabled })}>
        <span className={`${baseClassName}__radio-input-container`}>
          <input
            className={`${baseClassName}__radio-input-container__radio-input`}
            type="radio"
            value={value}
            name={name}
            disabled={disabled}
            defaultChecked={defaultChecked}
            onChange={onSelect}
            ref={mergedRef}
          />
          <span className={`${baseClassName}__radio-input-container__radio-control`} />
        </span>
        {text && <span className={`${baseClassName}__radio-label`}>{text}</span>}
        {children && (
          <div className="radio-children-wrapper" onClick={onChildClick}>
            {children}
          </div>
        )}
      </label>
    );
  }
);

RadioButton.defaultProps = {
  componentClassName: "",
  text: "",
  value: "",
  name: "",
  disabled: false,
  defaultChecked: false
};
RadioButton.propTypes = {
  componentClassName: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool
};

export default RadioButton;
