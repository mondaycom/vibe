import React, { ForwardedRef, forwardRef, useMemo } from "react";
import cx from "classnames";
import { LoaderColors as LoaderColorsEnum, LoaderSizes as LoaderSizesEnum } from "./LoaderConstants";
import { LoaderColors, LoaderSize, LoaderSizes } from "./Loader.types";
import { getTestId } from "../../tests/test-ids-utils";
import { VibeComponentProps, withStaticProps } from "../../types";
import { ComponentDefaultTestId } from "../../tests/constants";
import styles from "./Loader.module.scss";

const mapSizesToLoaderSize: Record<LoaderSizes, number> = {
  xs: 16,
  small: 24,
  medium: 40,
  large: 64
};

const mapLoaderColorsToColors: Record<LoaderColors, string> = {
  primary: "primary-color",
  secondary: "secondary-text-color",
  onPrimary: "text-color-on-inverted",
  dark: "primary-text-color"
};

export interface LoaderProps extends VibeComponentProps {
  /**
   * The size of the loader, either a predefined size or a custom number.
   */
  size?: LoaderSize;
  /**
   * The color of the loader.
   */
  color?: LoaderColors;
  /**
   * If true, a background circle is displayed behind the loader.
   */
  hasBackground?: boolean;
  /**
   * Class name applied to the wrapper element.
   */
  wrapperClassName?: string;
}

const Loader = forwardRef(
  (
    { className, wrapperClassName, size, color, hasBackground = false, id, "data-testid": dataTestId }: LoaderProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const sizeStyle = useMemo(() => {
      const loaderSize = typeof size === "string" ? mapSizesToLoaderSize[size] : size;
      if (typeof loaderSize === "number") {
        return { width: loaderSize, height: loaderSize };
      }
      return undefined;
    }, [size]);

    const colorStyle = useMemo(() => {
      if (!mapLoaderColorsToColors[color]) return;
      return `var(--${mapLoaderColorsToColors[color]})`;
    }, [color]);

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
        <svg className={cx(styles.circleLoaderSpinner, className)} viewBox="0 0 50 50" color={colorStyle} aria-hidden>
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

interface LoaderStaticProps {
  sizes: typeof LoaderSizesEnum;
  colors: typeof LoaderColorsEnum;
}

export default withStaticProps<LoaderProps, LoaderStaticProps>(Loader, {
  sizes: LoaderSizesEnum,
  colors: LoaderColorsEnum
});
