import cx from "classnames";
import { SIZES } from "../../../constants/sizes";
import React, { forwardRef, useMemo } from "react";
import PercentageLabel from "../PercentageLabel/PercentageLabel";
import { baseClassName, ProgressBarStyle } from "./LinearProgressBarConstants";
import { calculatePercentage, getProgressBarClassNames } from "./LinearProgressBarHelpers";
import Bar from "./Bar/Bar";
import { VibeComponent, VibeComponentProps } from "../../../types";
import "./LinearProgressBar.scss";

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
  /** Is the progress bar spread across the entire container width (width: 100%) */
  fullWidth?: boolean;
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
      fullWidth = false
    },
    ref
  ) => {
    const wrapperClassName = useMemo(() => {
      const base = `${baseClassName}--wrapper`;
      return cx(
        base,
        {
          [`${base}__${size}`]: size,
          [`${base}--full-width`]: fullWidth
        },
        className
      );
    }, [size, className, fullWidth]);

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
              className={getProgressBarClassNames(baseValue)}
              barStyle={ProgressBarStyle.NONE}
              value={baseValue}
              animated={animated}
              baseClass={baseClassName}
              color={color}
              min={min}
              max={max}
              /* eslint-disable-next-line react/no-array-index-key */
              key={`${baseClassName}_${color}_${i}`}
            />
          ))}
        </>
      );
    }, [min, max, animated, multiValues, multi]);

    const renderPercentage = indicateProgress ? (
      <PercentageLabel forElement="linear-progress-bar" className={`${baseClassName}__label`} value={valuePercentage} />
    ) : null;

    const renderBaseBars = !multi ? (
      <>
        <Bar
          className={getProgressBarClassNames(value)}
          barLabelName={ariaLabel}
          barStyle={barStyle}
          id="linear-progress-bar"
          value={valueSecondary}
          animated={animated}
          baseClass={`${baseClassName}__secondary`}
          min={min}
          max={max}
        />
        <Bar
          className={getProgressBarClassNames(value)}
          barStyle={barStyle}
          value={value}
          animated={animated}
          baseClass={baseClassName}
          min={min}
          max={max}
        />
      </>
    ) : null;

    return (
      <div className={wrapperClassName} ref={ref}>
        <div className={`${baseClassName}__container`}>
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
