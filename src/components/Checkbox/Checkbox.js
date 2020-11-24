import React, {useState, useEffect, useRef} from "react";
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
  name
}) => {
  const checkboxClassNames = [`${BASE_CLASS_NAME}__checkbox`];
  let overrideDefaultChecked = defaultChecked;

  // if component did not receive default checked and checked therfore  choose default checked as
  // default behavior (handle isChecked logic inside input) and set default value
  if (overrideDefaultChecked == undefined && checked == undefined) {
    overrideDefaultChecked = false;
  }

  const isChecked = overrideDefaultChecked == undefined ? checked : overrideDefaultChecked;

  // will replaced with useFirstRender hook
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) setIsFirstRender(false);
  }, [isFirstRender]);

  if (!isFirstRender) checkboxClassNames.push(`${BASE_CLASS_NAME}__checkbox--loaded`);

  return (
    <label className={cx(BASE_CLASS_NAME, componentClassName)}>
      <input
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
      <div className={cx(...checkboxClassNames)}>
        {isChecked ? (
          <Icon
            className={`${BASE_CLASS_NAME}__icon`}
            iconType={Icon.type.SVG}
            icon={Check}
            iconLabel="checkbox"
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

Checkbox.propTypes = {
  componentClassName: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
  componentClassName: "",
  label: "",
  onChange: () => {},
  disabled: false
};

export default Checkbox;
