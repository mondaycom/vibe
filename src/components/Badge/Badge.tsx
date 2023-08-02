import React, { forwardRef, useRef } from "react";
import cx from "classnames";
import { useMergeRefs } from "../../hooks";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import styles from "./Badge.module.scss";
import { BadgePosition, BadgeType } from "./BadgeConstants";
import Indicator, { IndicatorProps } from "./Indicator/Indicator";
import Counter, { CounterProps } from "../Counter/Counter";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { camelCase } from "lodash-es";
import { IndicatorColor } from "./Indicator/IndicatorConstants";
import { CounterColor } from "../Counter/CounterConstants";

export interface BadgeBaseProps extends VibeComponentProps {
  position?: BadgePosition;
  outbound?: boolean;
  circular?: boolean;
  border?: boolean;
  children: React.ReactNode;
}

interface CounterBadgeProps extends CounterProps {
  type: BadgeType.COUNTER;
}

interface IndicatorBadgeProps extends IndicatorProps {
  type?: BadgeType.INDICATOR;
}

type BadgeProps = BadgeBaseProps & (CounterBadgeProps | IndicatorBadgeProps);

const Badge: VibeComponent<BadgeProps> & {
  types?: typeof BadgeType;
  positions?: typeof BadgePosition;
} = forwardRef(
  (
    {
      type = Badge.types.INDICATOR,
      position = Badge.positions.TOP_END,
      outbound = false,
      circular = false,
      border = false,
      className,
      id,
      "data-testid": dataTestId,
      children,
      ...badgeProps
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

    const color =
      badgeProps.color || type === BadgeType.INDICATOR ? Indicator.colors.NOTIFICATION : Counter.colors.NEGATIVE;

    return (
      <div ref={mergedRef} className={cx(styles.badgeWrapper, className)} id={id}>
        {children}
        <div className={badgeClassNames} data-testid={dataTestId || getTestId(ComponentDefaultTestId.BADGE, id)}>
          {type === BadgeType.INDICATOR ? (
            <Indicator color={color as IndicatorColor} {...(badgeProps as IndicatorBadgeProps)} />
          ) : (
            type === BadgeType.COUNTER && (
              <Counter color={color as CounterColor} {...(badgeProps as CounterBadgeProps)} />
            )
          )}
        </div>
      </div>
    );
  }
);

Badge.types = BadgeType;
Badge.positions = BadgePosition;

export default Badge;
