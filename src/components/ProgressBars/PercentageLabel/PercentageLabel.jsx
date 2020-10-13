import React from "react";
import PropTypes from "prop-types";

const PercentageLabel = ({ forElement, value, className }) => {
  if (value === null || value === undefined) return null;
  return (
    <label htmlFor={forElement} className={className}>
      {`${value.toFixed()}%`}
    </label>
  );
};

PercentageLabel.propTypes = {
  /**
   * Replacement to `htmlFor` | `for` attribute.
   */
  forElement: PropTypes.string,
  /**
   * Determine the displayed percentage.
   */
  value: PropTypes.number,
  /**
   * Custom class name to style the component
   */
  className: PropTypes.string
};

PercentageLabel.defaultProps = {
  className: "",
  value: 0,
  forElement: ""
};

export default PercentageLabel;
