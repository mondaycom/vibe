import React, { forwardRef, useRef } from "react";
import cx from "classnames";
import { camelCase } from "lodash-es";
import useMergeRef from "../../hooks/useMergeRef";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import { BadgeAlignments, BadgeAnchor, BadgeType } from "./BadgeConstants";
import Indicator, { IndicatorProps } from "./Indicator/Indicator";
import Counter, { CounterProps } from "../Counter/Counter";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { IndicatorColor } from "./Indicator/IndicatorConstants";
import { CounterColor } from "../Counter/CounterConstants";
import styles from "./Badge.module.scss";

export interface BadgeBaseProps extends VibeComponentProps {
  anchor?: BadgeAnchor;
  alignment?: BadgeAlignments;
  children: React.ReactNode;
}

interface CounterBadgeProps extends CounterProps {
  type: BadgeType.COUNTER;
}

interface IndicatorBadgeProps extends IndicatorProps {
  type?: BadgeType.INDICATOR;
}

export type BadgeProps = BadgeBaseProps & (CounterBadgeProps | IndicatorBadgeProps);

const Badge: VibeComponent<BadgeProps> & {
  types?: typeof BadgeType;
  alignments?: typeof BadgeAlignments;
  anchors?: typeof BadgeAnchor;
} = forwardRef(
  (
    {
      type = Badge.types.INDICATOR,
      anchor = Badge.anchors.TOP_END,
      alignment = Badge.alignments.RECTANGULAR,
      className,
      id,
      "data-testid": dataTestId,
      children,
      ...badgeProps
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);
    const badgeClassNames = cx(
      styles.badge,
      getStyle(styles, camelCase(anchor as unknown as string)),
      getStyle(styles, alignment)
    );

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
Badge.alignments = BadgeAlignments;
Badge.anchors = BadgeAnchor;

export default Badge;
