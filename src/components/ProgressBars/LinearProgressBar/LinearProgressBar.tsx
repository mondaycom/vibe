import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import cx from "classnames";
import { SIZES } from "../../../constants/sizes";
import React, { forwardRef, useMemo } from "react";
import PercentageLabel from "../PercentageLabel/PercentageLabel";
import { ProgressBarStyle, ProgressBarType } from "./LinearProgressBarConstants";
import { calculatePercentage } from "./LinearProgressBarHelpers";
import Bar from "./Bar/Bar";
import { VibeComponent, VibeComponentProps } from "../../../types";
import { ComponentDefaultTestId } from "../../../tests/constants";
import { getTestId } from "../../../tests/test-ids-utils";
import styles from "./LinearProgressBar.module.scss";

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
      return cx(
        styles.wrapper,
        {
          [getStyle(styles, size.toString())]: size
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
              barStyle={ProgressBarStyle.NONE}
              value={baseValue}
              animated={animated}
              type={ProgressBarType.PRIMARY}
              color={color}
              min={min}
              max={max}
              /* eslint-disable-next-line react/no-array-index-key */
              id={`bar_${color}_${i}`}
              key={`bar_${color}_${i}`}
            />
          ))}
        </>
      );
    }, [min, max, animated, multiValues, multi]);

    const renderPercentage = indicateProgress ? (
      <PercentageLabel forElement="linear-progress-bar" value={valuePercentage} />
    ) : null;

    const renderBaseBars = !multi ? (
      <>
        <Bar
          barLabelName={ariaLabel}
          barStyle={barStyle}
          value={valueSecondary}
          animated={animated}
          type={ProgressBarType.SECONDARY}
          min={min}
          max={max}
          data-testid={ComponentDefaultTestId.BAR_SECONDARY}
        />
        <Bar
          barStyle={barStyle}
          value={value}
          animated={animated}
          type={ProgressBarType.PRIMARY}
          min={min}
          max={max}
          data-testid={ComponentDefaultTestId.BAR_PRIMARY}
        />
      </>
    ) : null;

    return (
      <div
        className={wrapperClassName}
        ref={ref}
        id={id}
        data-testsid={dataTestId || getTestId(ComponentDefaultTestId.LINEAR_PROGRESS_BAR, id)}
      >
        <div className={styles.container}>
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
  types: ProgressBarType,
  barTypes: ProgressBarType,
  sizes: SIZES
});

export default LinearProgressBar;
