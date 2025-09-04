import cx from "classnames";
import { noop as NOOP, camelCase } from "es-toolkit";
import { type StepsColor, type StepsDotAriaCurrent } from "./Steps.types";
import type VibeComponentProps from "../../types/VibeComponentProps";
import React, { type FC } from "react";
import styles from "./StepsDot.module.scss";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";

export interface StepsDotProps extends VibeComponentProps {
  /**
   * Callback fired when the dot is clicked.
   */
  onClick?: (e: React.MouseEvent) => void;
  /**
   * ARIA attribute to indicate the current step.
   */
  ariaCurrent?: StepsDotAriaCurrent | boolean;
  /**
   * If true, marks the dot as active.
   */
  isActive?: boolean;
  /**
   * The ARIA label for the dot.
   */
  ariaLabel?: string;
  /**
   * The color theme of the dot.
   */
  color?: StepsColor;
}

export const StepsDot: FC<StepsDotProps> = ({
  isActive,
  onClick = NOOP,
  ariaCurrent = "step",
  ariaLabel,
  color,
  className
}: StepsDotProps) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      aria-current={isActive ? ariaCurrent : false}
      className={cx(
        styles.dot,
        getStyle(styles, camelCase("color-" + color)),
        {
          [styles.isActive]: isActive
        },
        className
      )}
      onClick={onClick}
    />
  );
};
