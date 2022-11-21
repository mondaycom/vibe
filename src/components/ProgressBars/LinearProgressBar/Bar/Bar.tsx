import React, { FC, useMemo } from "react";
import { calculatePercentage } from "../LinearProgressBarHelpers";
import VibeComponentProps from "src/types/VibeComponentProps";

interface BarProps extends VibeComponentProps {
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
   * If set to *true*, animations are used.
   */
  animated?: boolean;
  /**
   * Set external styling to the progress bar.
   */
  classNames?: string;
  barLabelName?: string;
  color?: string;
}

const Bar: FC<BarProps> = ({ value, classNames, min, max, color, barLabelName }) => {
  const valuePercentage = useMemo(() => {
    if (value === null || value === undefined) return 0;
    return calculatePercentage(value, min, max);
  }, [value, min, max]);

  if (!value) return null;

  return (
    <div
      role="progressbar"
      aria-label={barLabelName}
      aria-valuenow={valuePercentage}
      aria-valuemin={0}
      aria-valuemax={100}
      className={classNames}
      style={{
        width: `${valuePercentage}%`,
        ...(color && { backgroundColor: color })
      }}
    />
  );
};

export default Bar;
