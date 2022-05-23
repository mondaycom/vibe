import React, { forwardRef, useMemo } from "react";
import PropTypes from "prop-types";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { LOADER_COLORS } from "components/Loader/LoaderConstants";
import "./Loader.scss";

const Loader = forwardRef(
  (
    {
      // Backward compatibility for props naming
      svgClassName,
      className,
      size,
      color,
      id
    },
    ref
  ) => {
    const overrideClassName = backwardCompatibilityForProperties([className, svgClassName], "");

    const style = useMemo(() => {
      if (typeof size === "number") {
        return { width: size, height: size };
      }
      return undefined;
    }, [size]);

    return (
      <div className="monday-loader-component" ref={ref} role="alert" title="loading" style={style} id={id}>
        <svg className={`circle-loader-spinner ${overrideClassName}`} viewBox="0 0 50 50">
          <circle
            className={`circle-loader-spinner-path circle-loader-spinner-path--color-${color}`}
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="5"
          />
        </svg>
      </div>
    );
  }
);

Loader.colors = LOADER_COLORS;
Loader.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  /**
   * The containing box of the loader
   */
  size: PropTypes.number,
  color: PropTypes.oneOf([LOADER_COLORS.PRIMARY, LOADER_COLORS.ON_PRIMARY, LOADER_COLORS.DARK])
};

Loader.defaultProps = {
  id: undefined,
  className: undefined,
  size: undefined,
  color: undefined
};

export default Loader;
