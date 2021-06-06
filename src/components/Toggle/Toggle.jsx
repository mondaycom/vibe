import React, { useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import NOOP from "lodash/noop";
import { useToggleState } from "@react-stately/toggle";
import { useSwitch } from "@react-aria/switch";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import "./Toggle.scss";

const BASE_CLASS_NAME = "monday-style-toggle";

const Toggle = ({
  id,
  componentClassName,
  defaultSelected,
  isSelected,
  onChange,
  value,
  name,
  isDisabled = true,
  ariaLabel
}) => {
  const toggleRef = useRef();
  const toggleState = useToggleState({ defaultSelected, isSelected });
  const { inputProps } = useSwitch(
    { id, defaultSelected, isSelected, onChange, value, name, isDisabled, "aria-label": ariaLabel },
    toggleState,
    toggleRef
  );
  const className = classNames(`${BASE_CLASS_NAME}__container`, componentClassName, {
    [`${BASE_CLASS_NAME}__container--selected`]: toggleState.isSelected,
    [`${BASE_CLASS_NAME}__container--not-selected`]: !toggleState.isSelected,
    [`${BASE_CLASS_NAME}__container--disabled`]: isDisabled
  });

  return (
    <label htmlFor={id}>
      <VisuallyHidden>
        <input {...inputProps} />
      </VisuallyHidden>
      <div className={className} aria-hidden="true" />
    </label>
  );
};

Toggle.propTypes = {
  /**
   * use toggle props
   */
  id: PropTypes.string,
  componentClassName: PropTypes.string,
  defaultSelected: PropTypes.bool,
  isSelected: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  /**
   * Aria props
   */
  "aria-controls": PropTypes.string
};

Toggle.defaultProps = {
  id: undefined,
  componentClassName: "",
  defaultSelected: true,
  isSelected: undefined,
  onChange: NOOP,
  value: undefined,
  name: undefined,
  "aria-controls": undefined
};

export default Toggle;
