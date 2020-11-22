import React, { useRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Icon from "../Icon/Icon";
import Check from "../Icon/Icons/components/Check";
import "./Checkbox.scss";

const BASE_CLASS_NAME = "monday-style-checkbox";

const Checkbox = ({
  componentClassName = "",
  label = "",
  onChange = () => {},
  isSelected,
  isDisabled = false
}) => {
  const checkboxRef = useRef();
  const inputClassNames = [`${BASE_CLASS_NAME}__input`];
  if (isSelected) inputClassNames.push(`${BASE_CLASS_NAME}__input--selected`);
  return ([
    <div className={cx(`${BASE_CLASS_NAME}`, componentClassName)}>
      <input
        type="checkbox"
        ref={checkboxRef}
        onChange={onChange}
        checked={isSelected}
        disabled={isDisabled}
        aria-label={label}
      />
      <div className={cx(...inputClassNames)} onClick={onChange}>
        <div className={`${BASE_CLASS_NAME}__input-x`}></div>
        {isSelected ? (
          <Icon
            className={`${BASE_CLASS_NAME}__icon`}
            iconType={Icon.type.SVG}
            icon={Check}
            iconLabel="Checkbox"
            ignoreFocusStyle
            clickable
            iconSize={11}
          />
        ) : (
          undefined
        )}
      </div>
      <span className={`${BASE_CLASS_NAME}__label`} onClick={onChange}>
          {label}
      </span>
    </div>
  ]);
};

Checkbox.defaultProps = {
  componentClassName: PropTypes.string,
  selected: PropTypes.bool
};
Checkbox.propTypes = {
  componentClassName: ""
};

export default Checkbox;
