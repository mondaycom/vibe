import React, { FC, useMemo } from "react";
import { camelCase } from "lodash-es";
import { getStyle } from "../../../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../../../tests/test-ids-utils";
import cx from "classnames";
import { calculatePercentage } from "../LinearProgressBarHelpers";
import { VibeComponentProps } from "../../../../types";
import { LinearProgressBarStyle } from "../LinearProgressBar.types";
import styles from "./Bar.module.scss";

export type BarType = "primary" | "secondary";

export interface BarProps extends VibeComponentProps {
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
   * If true, enables animation effects.
   */
  animated?: boolean;
  /**
   * Base class name for the bar.
   */
  baseClass?: string;
  /**
   * The ARIA label describing the progress bar.
   */
  barLabelName?: string;
  /**
   * Custom color for the progress bar.
   */
  color?: string;
  /**
   * The type of the bar.
   */
  type?: BarType;
}

const Bar: FC<BarProps> = ({
  value,
  type,
  barStyle,
  animated,
  min,
  max,
  color,
  barLabelName,
  id,
  "data-testid": dataTestId,
  className
}) => {
  const classNames = useMemo(() => {
    return cx(styles.bar, getStyle(styles, camelCase("type__" + type + "--" + barStyle)), className, {
      [styles.animate]: animated
    });
  }, [type, barStyle, animated, className]);

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
      id={id}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.BAR, id)}
    />
  );
};

export default Bar;
