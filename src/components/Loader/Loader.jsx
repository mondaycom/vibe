import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import "./Loader.scss";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";

const Loader = forwardRef(
  (
    {
      // Backward compatibility for props naming
      svgClassName,
      className,
      size,
      id
    },
    ref
  ) => {
    const overrideClassName = backwardCompatibilityForProperties([className, svgClassName], "");
    return (
      <div
        className="monday-loader-component"
        ref={ref}
        role="alert"
        title="loading"
        style={{ width: size, height: size }}
        id={id}
      >
        <svg className={`circle-loader-spinner ${overrideClassName}`} viewBox="0 0 50 50">
          <circle className="circle-loader-spinner-path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
        </svg>
      </div>
    );
  }
);

Loader.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  /**
   * The containing box of the loader
   */
  size: PropTypes.number
};

Loader.defaultProps = {
  id: undefined,
  className: undefined,
  size: undefined
};

export default Loader;
