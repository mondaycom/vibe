import React, { forwardRef, useRef } from "react";
import cx from "classnames";
import { useMergeRefs } from "../../hooks";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import styles from "./Badge.module.scss";
import { BadgeColor, BadgePosition, BadgeType } from "./BadgeConstants";
import Indicator, { IndicatorProps } from "./Indicator/Indicator";
import Counter, { CounterProps } from "../Counter/Counter";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { camelCase } from "lodash-es";
import { IndicatorColor } from "./Indicator/IndicatorConstants";
import { CounterColor } from "../Counter/CounterConstants";

const BadgeColorToIndicatorColor = {
  [BadgeColor.PRIMARY]: IndicatorColor.PRIMARY,
  [BadgeColor.NOTIFICATION]: IndicatorColor.NOTIFICATION
};

const BadgeColorToCounterColor = {
  [BadgeColor.PRIMARY]: CounterColor.PRIMARY,
  [BadgeColor.NOTIFICATION]: CounterColor.NEGATIVE
};

export interface BadgeProps extends VibeComponentProps {
  type?: BadgeType;
  position?: BadgePosition;
  color?: BadgeColor;
  outbound?: boolean;
  circular?: boolean;
  border?: boolean;
  badgeProps?: Omit<CounterProps, "color"> | Omit<IndicatorProps, "color">;
  children: React.ReactNode;
}

const Badge: VibeComponent<BadgeProps> & {
  types?: typeof BadgeType;
  positions?: typeof BadgePosition;
  colors?: typeof BadgeColor;
} = forwardRef(
  (
    {
      type = Badge.types.INDICATOR,
      position = Badge.positions.TOP_END,
      color = Badge.colors.NOTIFICATION,
      outbound = false,
      circular = false,
      border = false,
      badgeProps,
      className,
      id,
      "data-testid": dataTestId,
      children
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const badgeClassNames = cx(styles.badge, getStyle(styles, camelCase(position as unknown as string)), {
      [styles.outbound]: outbound,
      [styles.circular]: circular,
      [styles.border]: border
    });

    return (
      <div ref={mergedRef} className={cx(styles.badgeWrapper, className)} id={id}>
        {children}
        <div className={badgeClassNames} data-testid={dataTestId || getTestId(ComponentDefaultTestId.BADGE, id)}>
          {type === BadgeType.INDICATOR ? (
            <Indicator color={BadgeColorToIndicatorColor[color]} {...badgeProps} />
          ) : (
            type === BadgeType.COUNTER && <Counter color={BadgeColorToCounterColor[color]} {...badgeProps} />
          )}
        </div>
      </div>
    );
  }
);

Badge.types = BadgeType;
Badge.positions = BadgePosition;
Badge.colors = BadgeColor;

export default Badge;
