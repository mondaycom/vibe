import React, { ForwardedRef, forwardRef, useMemo } from "react";
import cx from "classnames";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { LoaderColors, LoaderSize, LoaderSizes } from "./LoaderConstants";
import { getTestId } from "../../tests/test-ids-utils";
import { VibeComponent, VibeComponentProps, withStaticProps } from "../../types";
import { ComponentDefaultTestId } from "../../tests/constants";
import styles from "./Loader.module.scss";

export interface LoaderProps extends VibeComponentProps {
  /**
   * @deprecated - use className instead
   */
  svgClassName?: string;
  className?: string;
  /** The loader's size: `number` or `LoaderSizes` */
  size?: LoaderSize;
  color?: LoaderColors;
  hasBackground?: boolean;
  wrapperClassName?: string;
}

const Loader: VibeComponent<LoaderProps, HTMLElement> & {
  sizes?: typeof LoaderSizes;
  colors?: typeof LoaderColors;
} = forwardRef(
  (
    { svgClassName, className, wrapperClassName, size, color, hasBackground = false, id, "data-testid": dataTestId },
    ref: ForwardedRef<HTMLDivElement>
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
        className={cx(styles.loaderContainer, wrapperClassName)}
        ref={ref}
        role="alert"
        title="loading"
        style={sizeStyle}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.LOADER, id)}
      >
        <svg
          className={cx(styles.circleLoaderSpinner, overrideClassName)}
          viewBox="0 0 50 50"
          color={color}
          aria-hidden
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
          <circle className={styles.circleLoaderSpinnerPath} cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
        </svg>
      </div>
    );
  }
);

export default withStaticProps(Loader, {
  sizes: LoaderSizes,
  colors: LoaderColors
});
