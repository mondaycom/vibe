import React, { forwardRef, useRef } from "react";
import cx from "classnames";
import { camelCase } from "lodash-es";
import useMergeRef from "../../hooks/useMergeRef";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import {
  BadgeAlignments as BadgeAlignmentsEnum,
  BadgeAnchor as BadgeAnchorEnum,
  BadgeType as BadgeTypeEnum
} from "./BadgeConstants";
import { BadgeAlignments, BadgeAnchor, BadgeType } from "./Badge.types";
import Indicator, { IndicatorProps } from "./Indicator/Indicator";
import Counter, { CounterProps } from "../Counter/Counter";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { IndicatorColor } from "./Indicator/IndicatorConstants";
import { CounterColor } from "../Counter/CounterConstants";
import styles from "./Badge.module.scss";

export interface BadgeBaseProps extends VibeComponentProps {
  /**
   * The position of the badge relative to its parent.
   */
  anchor?: BadgeAnchor;
  /**
   * The alignment style of the badge.
   */
  alignment?: BadgeAlignments;
  /**
   * The content the badge is attached to.
   */
  children: React.ReactNode;
}

interface CounterBadgeProps extends CounterProps {
  /**
   * The type of badge, set to `"counter"` for numeric values.
   */
  type: Extract<BadgeType, "counter">;
}

interface IndicatorBadgeProps extends IndicatorProps {
  /**
   * The type of badge, set to `"indicator"` for a simple dot.
   */
  type?: Extract<BadgeType, "indicator">;
}

export type BadgeProps = BadgeBaseProps & (CounterBadgeProps | IndicatorBadgeProps);

const Badge: VibeComponent<BadgeProps> & {
  types?: typeof BadgeTypeEnum;
  alignments?: typeof BadgeAlignmentsEnum;
  anchors?: typeof BadgeAnchorEnum;
} = forwardRef(
  (
    {
      type = "indicator",
      anchor = "top-end",
      alignment = "rectangular",
      className,
      id,
      "data-testid": dataTestId,
      children,
      ...badgeProps
    }: BadgeProps,
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);
    const badgeClassNames = cx(
      styles.badge,
      getStyle(styles, camelCase(anchor as unknown as string)),
      getStyle(styles, alignment)
    );

    const color = badgeProps.color || type === "indicator" ? "notification" : "negative";

    return (
      <div ref={mergedRef} className={cx(styles.badgeWrapper, className)} id={id}>
        {children}
        <div className={badgeClassNames} data-testid={dataTestId || getTestId(ComponentDefaultTestId.BADGE, id)}>
          {type === "indicator" ? (
            <Indicator color={color as IndicatorColor} {...(badgeProps as IndicatorBadgeProps)} />
          ) : (
            type === "counter" && <Counter color={color as CounterColor} {...(badgeProps as CounterBadgeProps)} />
          )}
        </div>
      </div>
    );
  }
);

Badge.types = BadgeTypeEnum;
Badge.alignments = BadgeAlignmentsEnum;
Badge.anchors = BadgeAnchorEnum;

export default Badge;
