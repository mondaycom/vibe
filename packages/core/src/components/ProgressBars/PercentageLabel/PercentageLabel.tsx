import React, { FC } from "react";
import styles from "./PercentageLabel.module.scss";

export interface PercentageLabelProps {
  /**
   * Replacement to `htmlFor` | `for` attribute.
   */
  forElement: string;
  /**
   * Determine the displayed percentage.
   */
  value: number;
}

const PercentageLabel: FC<PercentageLabelProps> = ({ forElement = "", value = 0 }) => {
  if (value === null || value === undefined) return null;
  return (
    <label htmlFor={forElement} className={styles.label}>
      {`${value.toFixed()}%`}
    </label>
  );
};

export default PercentageLabel;
