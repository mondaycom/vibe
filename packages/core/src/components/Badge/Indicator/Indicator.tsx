import React from "react";
import cx from "classnames";
import styles from "./Indicator.module.scss";
import { type IndicatorColor } from "./Indicator.types";
import { ComponentDefaultTestId } from "../../../tests/constants";
import { type VibeComponentProps } from "../../../types";
import { getTestId } from "../../../tests/test-ids-utils";

export interface IndicatorProps extends VibeComponentProps {
  /**
   * The color of the indicator.
   */
  color?: IndicatorColor;
}

const Indicator = ({ color = "notification", className, id, "data-testid": dataTestId }: IndicatorProps) => {
  return (
    <div
      className={cx(styles.indicator, styles[color], className)}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.INDICATOR, id)}
    />
  );
};

export default Indicator;
