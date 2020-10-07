import React, { useMemo } from "react";
import PropTypes from "prop-types";

const PercentageLabel = ({ forElement, value, className }) => {
  const renderPercentageLabel = useMemo(() => {
    if (value === null || value === undefined) return null;
    return (
      <label htmlFor={forElement} className={className}>
        {`${value.toFixed()}%`}
      </label>
    );
  }, [forElement, value]);

  return renderPercentageLabel;
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

export default PercentageLabel;
