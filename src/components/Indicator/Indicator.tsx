import React, { forwardRef, useRef } from "react";
import cx from "classnames";
import { VibeComponent, VibeComponentProps } from "../../types";
import styles from "./Indicator.module.scss";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { camelCase } from "lodash-es";
import { IndicatorColor } from "./IndicatorConstants";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import { useMergeRefs } from "../../hooks";

export interface IndicatorProps extends VibeComponentProps {
  indicatorColor?: IndicatorColor;
  ariaLabel?: string;
}

const Indicator: VibeComponent<IndicatorProps> & { colors?: typeof IndicatorColor } = forwardRef(
  (
    {
      indicatorColor = IndicatorColor.NOTIFICATION,
      ariaLabel,
      className,
      id,
      "data-testid": dataTestId
    }: IndicatorProps,
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    return (
      <div
        ref={mergedRef}
        className={cx(styles.indicator, getStyle(styles, camelCase("color-" + indicatorColor)), className)}
        aria-label={ariaLabel}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.INDICATOR, id)}
      />
    );
  }
);

Indicator.colors = IndicatorColor;

export default Indicator;
