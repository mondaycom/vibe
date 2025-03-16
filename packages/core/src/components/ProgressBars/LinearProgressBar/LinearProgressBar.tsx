import React, { forwardRef, useMemo } from "react";
import cx from "classnames";
import { SIZES } from "../../../constants";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import PercentageLabel from "../PercentageLabel/PercentageLabel";
import {
  ProgressBarStyle as ProgressBarStyleEnum,
  ProgressBarType as ProgressBarTypeEnum
} from "./LinearProgressBarConstants";
import { LinearProgressBarSize, LinearProgressBarStyle } from "./LinearProgressBar.types";
import { calculatePercentage, getProgressBarClassNames } from "./LinearProgressBarHelpers";
import Bar from "./Bar/Bar";
import { VibeComponent, VibeComponentProps, withStaticProps } from "../../../types";
import { ComponentDefaultTestId } from "../../../tests/constants";
import { getTestId } from "../../../tests/test-ids-utils";
import styles from "./LinearProgressBar.module.scss";

export interface LinearProgressBarProps extends VibeComponentProps {
  /**
   * Determines the visual style of the progress bar.
   */
  barStyle?: LinearProgressBarStyle;
  /**
   * The minimum value of the progress bar.
   */
  min?: number;
  /**
   * The maximum value of the progress bar.
   */
  max?: number;
  /**
   * The current progress value.
   */
  value?: number;
  /**
   * The secondary progress value.
   */
  valueSecondary?: number;
  /**
   * If true, enables animation effects.
   */
  animated?: boolean;
  /**
   * The size of the progress bar.
   */
  size?: LinearProgressBarSize;
  /**
   * If true, displays the progress percentage.
   */
  indicateProgress?: boolean;
  /**
   * If true, enables multiple progress bars.
   * **Note:** `value`, `valueSecondary`, and `barStyle` will not be used.
   */
  multi?: boolean;
  /**
   * An array of bar values and colors for multi-bar mode.
   */
  multiValues?: {
    /**
     * The progress value for a bar.
     */
    value?: number;
    /**
     * The bar color in hex format (`#000000` - `#ffffff`).
     */
    color?: string;
  }[];
  /**
   * The ARIA label for the progress bar.
   */
  ariaLabel?: string;
  /**
   * If true, makes the progress bar span the full container width.
   */
  fullWidth?: boolean;
}

const LinearProgressBar: VibeComponent<LinearProgressBarProps, HTMLDivElement> & {
  styles?: typeof ProgressBarStyleEnum;
  barStyles?: typeof ProgressBarStyleEnum;
  types?: typeof ProgressBarTypeEnum;
  barTypes?: typeof ProgressBarTypeEnum;
  sizes?: typeof SIZES;
} = forwardRef(
  (
    {
      min = 0,
      max = 100,
      value = 0,
      valueSecondary = 0,
      animated = true,
      barStyle = "primary",
      className,
      size = "small",
      indicateProgress = false,
      multi = false,
      multiValues = [],
      ariaLabel = "",
      id,
      fullWidth = false,
      "data-testid": dataTestId
    }: LinearProgressBarProps,
    ref
  ) => {
    const wrapperClassName = useMemo(() => {
      return cx(
        styles.wrapper,
        {
          [getStyle(styles, size.toString())]: size,
          [styles.fullWidth]: fullWidth
        },
        className
      );
    }, [size, fullWidth, className]);

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
              barStyle="none"
              value={baseValue}
              animated={animated}
              type="primary"
              color={color}
              min={min}
              max={max}
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
          className={getProgressBarClassNames(value)}
          barLabelName={ariaLabel}
          barStyle={barStyle}
          value={valueSecondary}
          animated={animated}
          type="secondary"
          min={min}
          max={max}
          data-testid={ComponentDefaultTestId.BAR_SECONDARY}
        />
        <Bar
          className={getProgressBarClassNames(value)}
          barStyle={barStyle}
          value={value}
          animated={animated}
          type="primary"
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

export default withStaticProps(LinearProgressBar, {
  styles: ProgressBarStyleEnum,
  barStyles: ProgressBarStyleEnum,
  types: ProgressBarTypeEnum,
  barTypes: ProgressBarTypeEnum,
  sizes: SIZES
});
