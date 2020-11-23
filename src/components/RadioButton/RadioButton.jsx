import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { baseClassName } from "./RadioButtonConstants";
import "./RadioButton.scss";

const RadioButton = ({
  componentClassName,
  text,
  value,
  name,
  disabled,
  defaultChecked,
}) => {
  return (
    <label className={cx(baseClassName, componentClassName)}>
      <span className={`${baseClassName}__radio-input-container`}>
        <input
          className={`${baseClassName}__radio-input-container__radio-input`}
          type="radio"
          value={value}
          name={name}
          disabled={disabled}
          defaultChecked={defaultChecked}
        />
        <span
          className={`${baseClassName}__radio-input-container__radio-control`}
        />
      </span>
      <span className={`${baseClassName}__radio-label`}>{text}</span>
    </label>
  );
};

RadioButton.defaultProps = {
  componentClassName: "",
  text: "",
  value: "",
  name: "",
  disabled: false,
  defaultChecked: false,
};
RadioButton.propTypes = {
  componentClassName: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
};

export default RadioButton;
