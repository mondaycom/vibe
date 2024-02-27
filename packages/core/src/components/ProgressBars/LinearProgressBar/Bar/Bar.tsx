import { camelCase } from "lodash-es";
import { getStyle } from "../../../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../../../tests/test-ids-utils";
import cx from "classnames";
import React, { FC, useMemo } from "react";
import { calculatePercentage } from "../LinearProgressBarHelpers";
import VibeComponentProps from "src/types/VibeComponentProps";
import { ProgressBarStyle, ProgressBarType } from "../LinearProgressBarConstants";
import styles from "./Bar.module.scss";

export interface BarProps extends VibeComponentProps {
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
   * If set to *true*, animations are used.
   */
  animated?: boolean;
  baseClass?: string;
  barLabelName?: string;
  color?: string;
  type?: ProgressBarType;
  className?: string;
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
