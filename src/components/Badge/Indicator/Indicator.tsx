import React from "react";
import cx from "classnames";
import styles from "./Indicator.module.scss";
import { IndicatorColor } from "./IndicatorConstants";
import { ComponentDefaultTestId } from "../../../tests/constants";

export interface IndicatorProps {
  color?: IndicatorColor;
}

const Indicator: React.FC<IndicatorProps> & { colors?: typeof IndicatorColor } = ({
  color = IndicatorColor.NOTIFICATION
}: IndicatorProps) => {
  return <div className={cx(styles.indicator, styles[color])} data-testid={ComponentDefaultTestId.INDICATOR} />;
};

Indicator.colors = IndicatorColor;

export default Indicator;
