import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import "./Loader.scss";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";

const Loader = forwardRef(
  (
    {
      // Backward compatibility for props naming
      svgClassName,
      className
    },
    ref
  ) => {
    const overrideClassName = backwardCompatibilityForProperties([className, svgClassName]);
    return (
      <div className="monday-loader-component" ref={ref} role="alert" title="loading">
        <svg className={`circle-loader-spinner ${overrideClassName}`} viewBox="0 0 50 50">
          <circle className="circle-loader-spinner-path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
        </svg>
      </div>
    );
  }
);

Loader.propTypes = {
  className: PropTypes.string
};

Loader.defaultProps = {
  className: undefined
};

export default Loader;
