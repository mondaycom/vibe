import React, { forwardRef, useMemo } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { LOADER_COLORS, LOADER_SIZES } from "../../components/Loader/LoaderConstants";
import styles from "./Loader.module.scss";

const Loader = forwardRef(
  (
    {
      // Backward compatibility for props naming
      svgClassName,
      className,
      size,
      color,
      hasBackground,
      id
    },
    ref
  ) => {
    const overrideClassName = backwardCompatibilityForProperties([className, svgClassName], "");

    const sizeStyle = useMemo(() => {
      if (typeof size === "number") {
        return { width: size, height: size };
      }
      return undefined;
    }, [size]);

    return (
      <div
        className={cx("monday-loader-component", styles.loaderContainer)}
        ref={ref}
        role="alert"
        title="loading"
        style={sizeStyle}
        id={id}
      >
        <svg
          className={cx("circle-loader-spinner", styles.circleLoaderSpinner, overrideClassName)}
          viewBox="0 0 50 50"
          color={color}
        >
          {hasBackground && (
            <circle
              className={styles.circleLoaderSpinnerBackground}
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="5"
            />
          )}
          <circle
            className={cx("circle-loader-spinner-path", styles.circleLoaderSpinnerPath)}
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
Loader.sizes = LOADER_SIZES;

Loader.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.oneOf([Loader.sizes.XS, Loader.sizes.SMALL, Loader.sizes.MEDIUM, Loader.sizes.LARGE]),
    PropTypes.number
  ]),
  color: PropTypes.oneOf([
    Loader.colors.PRIMARY,
    Loader.colors.ON_PRIMARY,
    Loader.colors.SECONDARY,
    Loader.colors.DARK
  ]),
  hasBackground: PropTypes.bool
};

Loader.defaultProps = {
  id: undefined,
  className: undefined,
  size: undefined,
  color: undefined,
  hasBackground: false
};

export default Loader;
