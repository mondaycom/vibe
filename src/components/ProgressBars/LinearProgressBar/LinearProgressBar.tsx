import camelCase from "lodash/camelCase";
import React, { forwardRef, useMemo } from "react";
import cx from "classnames";
import { SIZES } from "../../../constants/sizes";
import PercentageLabel from "../PercentageLabel/PercentageLabel";
import Bar from "./Bar/Bar";
import { ELEMENT_TYPES, getTestId } from "../../../utils/test-utils";
import { ProgressBarStyle } from "./LinearProgressBarConstants";
import { calculatePercentage } from "./LinearProgressBarHelpers";
import { VibeComponent, VibeComponentProps } from "../../../types";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import styles from "./LinearProgressBar.module.scss";

const CSS_BASE_CLASS = "linear-progress-bar";

interface LinearProgressBarProps extends VibeComponentProps {
  /**
   * Determine the progress bar style (Supported options exposed through `LinearProgressBar.styles`).
   */
  barStyle?: ProgressBarStyle;
  /**
   * The progress bar starting value.
   */
  min?: number;
  /**
   * The progress bar ending value.
   */
  max?: number;
  /**
   * The progress bar current value.
   */
  value?: number;
  /**
   * The progress bar secondary value.
   */
  valueSecondary?: number;
  /**
   * If set to *true*, animations are used.
   */
  animated?: boolean;
  /**
   * Set external styling to the progress bar.
   */
  className?: string;
  /**
   * Determine the progress bar height (Supported options exposed through `LinearProgressBar.sizes`)
   */
  size?: typeof SIZES;
  /**
   * Show progress bar progression in percentages
   */
  indicateProgress?: boolean;
  /**
   * Use multiple bars.
   * ***Note:*** `value`, `valueSecondary` & `barStyle` won't be used
   */
  multi?: boolean;
  /**
   * Array of bar value objects {
   * `value` - The progress value,
   * `color` - hex [`#000000` ~ `#ffffff`] of the current bar
   * }
   */
  multiValues?: {
    /**
     * The progress bar current value.
     */
    value?: number;
    /**
     * The bar color in hex - #000000 ~ #ffffff
     */
    color?: string;
  }[];
  /** ARIA description for the progress bar */
  ariaLabel?: string;
}

const LinearProgressBar: VibeComponent<LinearProgressBarProps, HTMLDivElement> & {
  styles?: ProgressBarStyle;
  barStyles?: ProgressBarStyle;
  sizes?: typeof SIZES;
} = forwardRef(
  (
    {
      min = 0,
      max = 100,
      value = 0,
      valueSecondary = 0,
      animated = true,
      barStyle = ProgressBarStyle.PRIMARY,
      className,
      size = SIZES.SMALL,
      indicateProgress = false,
      multi = false,
      multiValues = [],
      ariaLabel = "",
      id,
      "data-testid": dataTestId
    },
    ref
  ) => {
    const wrapperClassName = useMemo(() => {
      const base = `${CSS_BASE_CLASS}--wrapper`;
      return cx(
        getStyle(styles, camelCase(base)),
        base,
        {
          [getStyle(styles, camelCase(`${base}__${size}`))]: size,
          [`${base}__${size}`]: size
        },
        className
      );
    }, [size, className]);

    const valuePercentage = useMemo(() => {
      if (multi) {
        const firstValue = multiValues && multiValues.length && multiValues[0].value;
        if (firstValue === null || firstValue === undefined) return 0;
        return calculatePercentage(firstValue, min, max);
      }
      if (value === null || value === undefined) return 0;
      return calculatePercentage(value, min, max);
    }, [value, min, max, multi, multiValues]);

    const renderMultiBars = useMemo(() => {
      if (!multi) return null;
      return (
        <>
          {[...multiValues].reverse().map(({ value: baseValue, color }, i) => (
            <Bar
              value={baseValue}
              classNames={cx(
                styles.linearProgressBar,
                CSS_BASE_CLASS,
                getStyle(styles, camelCase(`${CSS_BASE_CLASS}--${barStyle}`)),
                `${CSS_BASE_CLASS}--${barStyle}`,
                {
                  [styles.linearProgressBarAnimate]: animated,
                  [`${CSS_BASE_CLASS}--animate`]: animated
                }
              )}
              color={color}
              min={min}
              max={max}
              /* eslint-disable-next-line react/no-array-index-key */
              key={`${CSS_BASE_CLASS}_${color}_${i}`}
            />
          ))}
        </>
      );
    }, [multi, multiValues, animated, barStyle, min, max]);

    const renderPercentage = indicateProgress ? (
      <PercentageLabel
        forElement="linear-progress-bar"
        className={cx(styles.linearProgressBarLabel, `${CSS_BASE_CLASS}__label`)}
        value={valuePercentage}
      />
    ) : null;

    const renderBaseBars = !multi ? (
      <>
        <Bar
          barLabelName={ariaLabel}
          id="linear-progress-bar"
          value={valueSecondary}
          classNames={cx(
            styles.linearProgressBarSecondary,
            [`${CSS_BASE_CLASS}__secondary`],
            getStyle(styles, camelCase(`linear-progress-bar__secondary--${barStyle}`)),
            `${CSS_BASE_CLASS}__secondary--${barStyle}`,
            {
              [styles.linearProgressBarSecondaryAnimate]: animated,
              [`${CSS_BASE_CLASS}__secondary--animate`]: animated
            }
          )}
          min={min}
          max={max}
        />
        <Bar
          value={value}
          classNames={cx(
            styles.linearProgressBar,
            CSS_BASE_CLASS,
            getStyle(styles, camelCase(`${CSS_BASE_CLASS}--${barStyle}`)),
            `${CSS_BASE_CLASS}--${barStyle}`,
            {
              [styles.linearProgressBarAnimate]: animated,
              [`${CSS_BASE_CLASS}--animate`]: animated
            }
          )}
          min={min}
          max={max}
        />
      </>
    ) : null;

    return (
      <div
        className={wrapperClassName}
        ref={ref}
        id={id}
        data-testid={dataTestId || getTestId(ELEMENT_TYPES.LINEAR_PROGRESS_BAR, id)}
      >
        <div className={cx(styles.linearProgressBarContainer, `${CSS_BASE_CLASS}__container`)}>
          {renderBaseBars}
          {renderMultiBars}
        </div>
        {renderPercentage}
      </div>
    );
  }
);

Object.assign(LinearProgressBar, {
  styles: ProgressBarStyle,
  barStyles: ProgressBarStyle,
  sizes: SIZES
});

export default LinearProgressBar;
