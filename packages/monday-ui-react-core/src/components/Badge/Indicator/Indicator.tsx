import React from "react";
import cx from "classnames";
import styles from "./Indicator.module.scss";
import { IndicatorColor } from "./IndicatorConstants";
import { ComponentDefaultTestId } from "../../../tests/constants";
import { VibeComponentProps } from "../../../types";
import { getTestId } from "../../../tests/test-ids-utils";

export interface IndicatorProps extends VibeComponentProps {
  color?: IndicatorColor;
}

const Indicator: React.FC<IndicatorProps> & { colors?: typeof IndicatorColor } = ({
  color = IndicatorColor.NOTIFICATION,
  className,
  id,
  "data-testid": dataTestId
}: IndicatorProps) => {
  return (
    <div
      className={cx(styles.indicator, styles[color], className)}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.INDICATOR, id)}
    />
  );
};

Indicator.colors = IndicatorColor;

export default Indicator;
