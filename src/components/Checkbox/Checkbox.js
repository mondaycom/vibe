import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Icon from "../Icon/Icon";
import Check from "../Icon/Icons/components/Check";
import "./Checkbox.scss";
import {useToggle} from "../../hooks/useToggle";

const BASE_CLASS_NAME = "monday-style-checkbox";

export const Checkbox = ({
  componentClassName,
  label,
  onChange,
  checked,
  disabled,
  defaultChecked
}) => {
  const checkboxClassNames = [`${BASE_CLASS_NAME}__checkbox`];
  let isFirstRender = useRef(true);

  if (!isFirstRender) {
    checkboxClassNames.push(`${BASE_CLASS_NAME}__checkbox--loaded`);
  }

  return (
    <label className={cx(BASE_CLASS_NAME, componentClassName)}>
      <input
        className={`${BASE_CLASS_NAME}__input`}
        type="checkbox"
        onChange={onChange}
        defaultChecked={defaultChecked}
        disabled={disabled}
        aria-label={label}
        checked={checked}
      />
      <div className={cx(...checkboxClassNames)}>
        {checked ? (
          <Icon
            className={`${BASE_CLASS_NAME}__icon`}
            iconType={Icon.type.SVG}
            icon={Check}
            iconLabel="StatefulCheckbox"
            ignoreFocusStyle
            clickable
            iconSize={11}
          />
        ) : (
          undefined
        )}
      </div>
      <span className={`${BASE_CLASS_NAME}__label`}>{label}</span>
    </label>
  );
};

Checkbox.defaultProps = {
  componentClassName: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool
};

Checkbox.propTypes = {
  componentClassName: "",
  label: "",
  onChange: () => {},
  checked: true,
  disabled: false
};

export default Checkbox;
