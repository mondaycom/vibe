import React, { forwardRef, useMemo } from "react";
import PropTypes from "prop-types";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { LOADER_COLORS, LOADER_SIZES, LOADER_TYPES } from "components/Loader/LoaderConstants";
import cx from "classnames";
import styles from "./Loader.module.scss";

const Loader = forwardRef(
  (
    {
      // Backward compatibility for props naming
      svgClassName,
      className,
      size,
      color,
      type,
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
        className={cx(styles.mondayLoaderComponent, "monday-loader-component")}
        ref={ref}
        role="alert"
        title="loading"
        style={sizeStyle}
        id={id}
      >
        <svg
          className={cx(styles.circleLoaderSpinner, overrideClassName, "circle-loader-spinner")}
          viewBox="0 0 50 50"
          color={color}
        >
          {type === Loader.types.WITH_BACKGROUND && (
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
            className={cx(styles.circleLoaderSpinnerPath, "circle-loader-spinner-path")}
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
Loader.types = LOADER_TYPES;

Loader.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf([Loader.sizes.XS, Loader.sizes.SMALL, Loader.sizes.MEDIUM, Loader.sizes.LARGE]),
  color: PropTypes.oneOf([
    Loader.colors.PRIMARY,
    Loader.colors.ON_PRIMARY,
    Loader.colors.SECONDARY,
    Loader.colors.DARK
  ]),
  type: PropTypes.oneOf([Loader.types.CASUAL, Loader.types.WITH_BACKGROUND])
};

Loader.defaultProps = {
  id: undefined,
  className: undefined,
  size: undefined,
  color: undefined,
  type: Loader.types.CASUAL
};

export default Loader;
