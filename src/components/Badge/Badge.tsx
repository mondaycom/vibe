import React, { forwardRef, useRef } from "react";
import cx from "classnames";
import { useMergeRefs } from "../../hooks";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import styles from "./Badge.module.scss";
import { Direction } from "./BadgeConstants";
import Indicator, { IndicatorProps } from "../Indicator/Indicator";
import Counter, { CounterProps } from "../Counter/Counter";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { camelCase } from "lodash-es";

type Position = {
  vertical: Direction.TOP | Direction.BOTTOM;
  horizontal: Direction.LEFT | Direction.RIGHT;
};

type BadgeOptions = typeof Indicator | typeof Counter;

export interface BadgeProps extends VibeComponentProps, React.PropsWithChildren {
  badgeComponent?: BadgeOptions;
  position?: Position;
  gap?: boolean;
  circular?: boolean;
  show?: boolean;
  badgeComponentProps?: CounterProps | IndicatorProps;
}

const Badge: VibeComponent<BadgeProps> & {
  directions?: typeof Direction;
} = forwardRef(
  (
    {
      badgeComponent: BadgeComponent = Indicator,
      position = { vertical: Direction.TOP, horizontal: Direction.RIGHT } as Position,
      gap = false,
      circular = false,
      show = true,
      badgeComponentProps,
      className,
      id,
      "data-testid": dataTestId,
      children
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const badgeClassNames = cx(
      styles.badge,
      getStyle(styles, camelCase(`${position.vertical}-${position.horizontal}`)),
      { [styles.gap]: gap, [styles.circular]: circular, [styles.show]: show },
      className
    );

    return (
      <div ref={mergedRef} className={cx(styles.badgeWrapper)} id={id}>
        {children}
        <div className={badgeClassNames} data-testid={dataTestId || getTestId(ComponentDefaultTestId.BADGE, id)}>
          <BadgeComponent {...badgeComponentProps} />
        </div>
      </div>
    );
  }
);

Badge.directions = Direction;

export default Badge;
