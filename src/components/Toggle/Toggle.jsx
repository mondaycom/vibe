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
  isDisabled,
  ariaLabel,
  ariaControls
}) => {
  const toggleRef = useRef();
  const toggleState = useToggleState({ defaultSelected, isSelected });
  const { inputProps } = useSwitch(
    {
      id,
      defaultSelected,
      isSelected,
      onChange,
      value,
      name,
      isDisabled,
      "aria-label": ariaLabel,
      "aria-controls": ariaControls
    },
    toggleState,
    toggleRef
  );
  const className = classNames(`${BASE_CLASS_NAME}__toggle`, componentClassName, {
    [`${BASE_CLASS_NAME}__toggle--selected`]: toggleState.isSelected,
    [`${BASE_CLASS_NAME}__toggle--not-selected`]: !toggleState.isSelected,
    [`${BASE_CLASS_NAME}__toggle--disabled`]: isDisabled
  });

  return (
    <label htmlFor={id} className={`${BASE_CLASS_NAME}__wrapper`}>
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
  isDisabled: PropTypes.bool,
  /**
   * Aria props
   */
  ariaLabel: PropTypes.string,
  ariaControls: PropTypes.string
};

Toggle.defaultProps = {
  id: undefined,
  componentClassName: "",
  defaultSelected: true,
  isSelected: undefined,
  onChange: NOOP,
  value: undefined,
  name: undefined,
  isDisabled: false,
  ariaLabel: undefined,
  ariaControls: undefined
};

export default Toggle;
