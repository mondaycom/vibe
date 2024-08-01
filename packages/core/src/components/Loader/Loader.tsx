import React, { ForwardedRef, forwardRef, useMemo } from "react";
import cx from "classnames";
import { LoaderColors as LoaderColorsEnum, LoaderSizes as LoaderSizesEnum } from "./LoaderConstants";
import { LoaderColors, LoaderSize, mapLoaderColorsToColors, mapSizesToLoaderSize } from "./Loader.types";
import { getTestId } from "../../tests/test-ids-utils";
import { VibeComponent, VibeComponentProps, withStaticProps } from "../../types";
import { ComponentDefaultTestId } from "../../tests/constants";
import styles from "./Loader.module.scss";

export interface LoaderProps extends VibeComponentProps {
  className?: string;
  /** The loader's size: `number` or `LoaderSizes` */
  size?: LoaderSize;
  color?: LoaderColors;
  hasBackground?: boolean;
  wrapperClassName?: string;
}

const Loader: VibeComponent<LoaderProps, HTMLElement> & {
  sizes?: typeof LoaderSizesEnum;
  colors?: typeof LoaderColorsEnum;
} = forwardRef(
  (
    { className, wrapperClassName, size, color, hasBackground = false, id, "data-testid": dataTestId },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const sizeStyle = useMemo(() => {
      const loaderSize = typeof size === "string" ? mapSizesToLoaderSize[size] : size;
      if (typeof loaderSize === "number") {
        return { width: loaderSize, height: loaderSize };
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
          className={cx(styles.circleLoaderSpinner, className)}
          viewBox="0 0 50 50"
          color={`var(--${mapLoaderColorsToColors[color]})`}
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
  sizes: LoaderSizesEnum,
  colors: LoaderColorsEnum
});
