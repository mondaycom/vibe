import React, { FC } from "react";
import styles from "./PercentageLabel.module.scss";

export interface PercentageLabelProps {
  /**
   * The ID of the element this label is associated with.
   * This is a replacement for the `htmlFor` attribute.
   */
  forElement: string;
  /**
   * The percentage value to display.
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
