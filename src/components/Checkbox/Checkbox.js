import React, { useRef, useCallback, useEffect } from "react";
import NOOP from "lodash/noop";
import isNil from "lodash/isNil";
import PropTypes from "prop-types";
import cx from "classnames";
import Icon from "../Icon/Icon";
import Check from "../Icon/Icons/components/Check";
import Remove from "../Icon/Icons/components/Remove";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import "./Checkbox.scss";

const BASE_CLASS_NAME = "monday-style-checkbox";

export const Checkbox = ({
  className,
  // Backward compatibility for props naming
  componentClassName,
  ariaLabel,
  label,
  ariaLabelledBy,
  onChange,
  checked,
  indeterminate,
  disabled,
  defaultChecked,
  value,
  name,
  id
}) => {
  const iconContainerRef = useRef(null);
  const inputRef = useRef(null);
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

  const checkboxClassNames = [`${BASE_CLASS_NAME}__checkbox`, `${BASE_CLASS_NAME}__prevent-animation`];
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

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <label
      className={cx(BASE_CLASS_NAME, overrideClassName, { [`${BASE_CLASS_NAME}__disabled`]: disabled })}
      onMouseUp={onMouseUpCallback}
      htmlFor={id}
    >
      <input
        ref={inputRef}
        id={id}
        className={`${BASE_CLASS_NAME}__input`}
        value={value}
        name={name}
        type="checkbox"
        onChange={onChange}
        defaultChecked={overrideDefaultChecked}
        disabled={disabled}
        aria-label={ariaLabel || label}
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
      <span className={`${BASE_CLASS_NAME}__label`}>{label}</span>
    </label>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  ariaLabel: PropTypes.string
};

Checkbox.defaultProps = {
  id: undefined,
  className: undefined,
  label: undefined,
  onChange: NOOP,
  disabled: false,
  name: "",
  value: "",
  ariaLabelledBy: undefined,
  checked: undefined,
  indeterminate: false,
  defaultChecked: undefined,
  ariaLabel: undefined
};

export default Checkbox;
