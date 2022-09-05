import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import cx from "classnames";
import React from "react";
import PropTypes from "prop-types";
import NOOP from "lodash/noop";
import { Switch } from "../Switch/Switch";
import { MockToggle } from "./MockToggle";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import styles from "./Toggle.module.scss";

const Toggle = ({
  id,
  // Backward compatibility for props naming
  componentClassName,
  className,
  isDefaultSelected,
  isSelected,
  onChange,
  value,
  name,
  disabled,
  // Backward compatibility for props naming
  isDisabled,
  ariaLabel,
  ariaControls,
  areLabelsHidden,
  onOverrideText,
  offOverrideText,
  "data-testid": dataTestId
}) => {
  const overrideClassName = backwardCompatibilityForProperties([className, componentClassName]);
  const overrideDisabled = backwardCompatibilityForProperties([disabled, isDisabled], false);
  const wrapperClassName = cx(styles.wrapper, "monday-style-toggle_wrapper", {
    [styles.disabled]: overrideDisabled,
    ["monday-style-toggle_wrapper--disabled"]: overrideDisabled
  });
  const inputClassName = "monday-style-toggle_input";
  return (
    <Switch
      defaultChecked={isDefaultSelected}
      checked={isSelected}
      id={id}
      wrapperClassName={wrapperClassName}
      onChange={onChange}
      value={value}
      name={name}
      disabled={overrideDisabled}
      ariaLabel={ariaLabel}
      ariaControls={ariaControls}
      inputClassName={inputClassName}
      data-testid={dataTestId || getTestId(ELEMENT_TYPES.TOGGLE, id)}
    >
      <MockToggle
        areLabelsHidden={areLabelsHidden}
        offOverrideText={offOverrideText}
        className={cx(overrideClassName)}
        onOverrideText={onOverrideText}
      />
    </Switch>
  );
};

Toggle.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  isDefaultSelected: PropTypes.bool,
  isSelected: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  areLabelsHidden: PropTypes.bool,
  onOverrideText: PropTypes.string,
  offOverrideText: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaControls: PropTypes.string
};

Toggle.defaultProps = {
  id: undefined,
  className: undefined,
  isDefaultSelected: true,
  isSelected: undefined,
  onChange: NOOP,
  value: undefined,
  name: undefined,
  disabled: undefined,
  areLabelsHidden: false,
  ariaLabel: undefined,
  ariaControls: undefined,
  onOverrideText: "On",
  offOverrideText: "Off"
};

export default Toggle;
