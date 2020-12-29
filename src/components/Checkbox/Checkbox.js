import React, { useRef } from "react";
import NOOP from "lodash/noop";
import isNil from "lodash/isNil";
import PropTypes from "prop-types";
import cx from "classnames";
import Icon from "../Icon/Icon";
import Check from "../Icon/Icons/components/Check";
import "./Checkbox.scss";

const BASE_CLASS_NAME = "monday-style-checkbox";

export const Checkbox = ({
  componentClassName,
  label,
  onChange,
  checked,
  disabled,
  defaultChecked,
  value,
  name,
  id
}) => {
  const iconContainerRef = useRef(null);

  const checkboxClassNames = [`${BASE_CLASS_NAME}__checkbox`, `${BASE_CLASS_NAME}__prevent-animation`];
  let overrideDefaultChecked = defaultChecked;

  // If component did not receive default checked and checked props, choose default checked as
  // default behavior (handle isChecked logic inside input) and set default value
  if (isNil(overrideDefaultChecked) && isNil(checked)) {
    overrideDefaultChecked = false;
  }

  return (
    <label className={cx(BASE_CLASS_NAME, componentClassName, { [`${BASE_CLASS_NAME}__disabled`]: disabled })}>
      <input
        id={id}
        className={`${BASE_CLASS_NAME}__input`}
        value={value}
        name={name}
        type="checkbox"
        onChange={onChange}
        defaultChecked={overrideDefaultChecked}
        disabled={disabled}
        aria-label={label}
        checked={checked}
      />
      <div className={cx(...checkboxClassNames)} ref={iconContainerRef}>
        <Icon
          className={`${BASE_CLASS_NAME}__icon`}
          iconType={Icon.type.SVG}
          icon={Check}
          iconLabel="checkbox"
          ignoreFocusStyle
          clickable
          iconSize="16"
        />
      </div>
      <span className={`${BASE_CLASS_NAME}__label`}>{label}</span>
    </label>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
  componentClassName: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string
};

Checkbox.defaultProps = {
  id: "",
  componentClassName: "",
  label: "",
  onChange: NOOP,
  disabled: false,
  name: "",
  value: "",
  checked: undefined,
  defaultChecked: undefined
};

export default Checkbox;
