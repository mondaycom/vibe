import { SIZES } from "../../../constants/sizes";
import React, { useMemo, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import PercentageLabel from "../PercentageLabel/PercentageLabel";
import { baseClassName, PROGRESS_BAR_STYLES } from "./LinearProgressBarConstants";
import { calculatePercentage } from "./LinearProgressBarHelpers";
import Bar from "./Bar/Bar";
import "./LinearProgressBar.scss";

const LinearProgressBar = forwardRef(
  (
    {
      min,
      max,
      value,
      valueSecondary,
      animated,
      barStyle,
      className,
      size,
      indicateProgress,
      multi,
      multiValues,
      ariaLabel
    },
    ref
  ) => {
    const wrapperClassName = useMemo(() => {
      const base = `${baseClassName}--wrapper`;
      return cx(base, { [`${base}__${size}`]: size }, className);
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
              barStyle="none"
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
          barLabelName={ariaLabel}
          barStyle={barStyle}
          id="linear-progress-bar"
          value={valueSecondary}
          animated={animated}
          baseClass={`${baseClassName}__secondary`}
          min={min}
          max={max}
        />
        <Bar barStyle={barStyle} value={value} animated={animated} baseClass={baseClassName} min={min} max={max} />
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

LinearProgressBar.styles = PROGRESS_BAR_STYLES;
LinearProgressBar.barStyles = PROGRESS_BAR_STYLES;
LinearProgressBar.sizes = SIZES;

LinearProgressBar.propTypes = {
  /**
   * Determine the progress bar style (Supported options exposed through `LinearProgressBar.styles`).
   */
  barStyle: PropTypes.oneOf(Object.values(PROGRESS_BAR_STYLES)),
  /**
   * The progress bar starting value.
   */
  min: PropTypes.number,
  /**
   * The progress bar ending value.
   */
  max: PropTypes.number,
  /**
   * The progress bar current value.
   */
  value: PropTypes.number,
  /**
   * The progress bar secondary value.
   */
  valueSecondary: PropTypes.number,
  /**
   * If set to *true*, animations are used.
   */
  animated: PropTypes.bool,
  /**
   * Set external styling to the progress bar.
   */
  className: PropTypes.string,
  /**
   * Determine the progress bar height (Supported options exposed through `LinearProgressBar.sizes`)
   */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * Show progress bar progression in percentages
   */
  indicateProgress: PropTypes.bool,
  /**
   * Use multiple bars.
   * ***Note:*** `value`, `valueSecondary` & `barStyle` won't be used
   */
  multi: PropTypes.bool,
  /**
   * Array of bar value objects {
   * `value` - The progress value,
   * `color` - hex [`#000000` ~ `#ffffff`] of the current bar
   * }
   */
  multiValues: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The progress bar current value.
       */
      value: PropTypes.number.isRequired,
      /**
       * The bar color in hex - #000000 ~ #ffffff
       */
      color: PropTypes.string.isRequired
    }).isRequired
  ),
  /** ARIA description for the progress bar */
  ariaLabel: PropTypes.string
};

LinearProgressBar.defaultProps = {
  barStyle: PROGRESS_BAR_STYLES.PRIMARY,
  size: SIZES.SMALL,
  className: "",
  multi: false,
  indicateProgress: false,
  valueSecondary: 0,
  value: 0,
  min: 0,
  max: 100,
  animated: true,
  multiValues: [],
  ariaLabel: ""
};

export default LinearProgressBar;
