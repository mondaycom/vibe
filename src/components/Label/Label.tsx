import { camelCase } from "lodash-es";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import React, { useMemo } from "react";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import Leg from "./Leg";
import VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./Label.module.scss";

const LABEL_TYPES = {
  FILL: "fill",
  LINE: "line"
} as const;

const LABEL_COLORS = {
  PRIMARY: "primary",
  DARK: "dark",
  NEGATIVE: "negative",
  POSITIVE: "positive"
} as const;

type LabelType = typeof LABEL_TYPES[keyof typeof LABEL_TYPES];
type LabelColor = typeof LABEL_COLORS[keyof typeof LABEL_COLORS];

interface LabelProps extends VibeComponentProps {
  /**
   * Backward compatibility for props naming - please use className instead
   */
  wrapperClassName?: string;
  /**
   * Class name for an inner text wrapper
   */
  labelClassName?: string;
  kind?: LabelType;
  color?: LabelColor;
  text?: string;
  isAnimationDisabled?: boolean;
  isLegIncluded?: boolean;
}

const Label = ({
  className,
  wrapperClassName,
  labelClassName,
  kind = LABEL_TYPES.FILL,
  color = LABEL_COLORS.PRIMARY,
  text = "",
  isAnimationDisabled = false,
  isLegIncluded = false,
  id,
  "data-testid": dataTestId
}: LabelProps) => {
  const overrideClassName = backwardCompatibilityForProperties([className, wrapperClassName]) as string;
  const classNames = useMemo(
    () =>
      cx(
        styles.label,
        "monday-style-label",
        styles[`${camelCase("kind" + kind)}`],
        `monday-style-label--kind-${kind}`,
        styles[`${camelCase("color" + color)}`],
        `monday-style-label--color-${color}`,
        {
          [styles.withAnimation]: !isAnimationDisabled,
          ["monday-style-label--with-animation"]: !isAnimationDisabled,
          [styles.withLeg]: isLegIncluded,
          ["monday-style-label--with-leg"]: isLegIncluded
        },
        labelClassName
      ),
    [kind, color, isAnimationDisabled, isLegIncluded, labelClassName]
  );
  return (
    <span className={cx(overrideClassName)} data-testid={dataTestId || getTestId(ComponentDefaultTestId.LABEL, id)}>
      <div className={classNames}>
        <span>{text}</span>
        <span className={cx(styles.legWrapper, "monday-style-label__leg-wrapper")}>
          {isLegIncluded ? <Leg /> : null}
        </span>
      </div>
    </span>
  );
};

Object.assign(Label, {
  colors: LABEL_COLORS,
  kinds: LABEL_TYPES,
  defaultTestId: ComponentDefaultTestId.LABEL
});

export default Label;
