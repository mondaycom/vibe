import camelCase from "lodash/camelCase";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import cx from "classnames";
import React, { useMemo } from "react";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import Leg from "./Leg";
import VibeComponentProps from "src/types/VibeComponentProps";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
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

type LabelTypes = typeof LABEL_TYPES;
type LabelColors = typeof LABEL_COLORS;

interface LabelProps extends VibeComponentProps {
  wrapperClassName?: string;
  kind?: LabelTypes[keyof LabelTypes];
  color?: LabelColors[keyof LabelColors];
  text?: string;
  isAnimationDisabled?: boolean;
  isLegIncluded?: boolean;
}

const Label = ({
  className,
  wrapperClassName,
  kind = LABEL_TYPES.FILL,
  color = LABEL_COLORS.PRIMARY,
  text = "",
  isAnimationDisabled = false,
  isLegIncluded = false,
  "data-testid": dataTestId,
  id
}: LabelProps) => {
  const overrideClassName = backwardCompatibilityForProperties([className, wrapperClassName]) as string;
  const classNames = useMemo(
    () =>
      cx(
        styles.label,
        "monday-style-label",
        getStyle(styles, camelCase("kind-" + kind)),
        `monday-style-label--kind-${kind}`,
        getStyle(styles, camelCase("color-" + color)),
        `monday-style-label--color-${color}`,
        {
          [styles.withAnimation]: !isAnimationDisabled,
          ["monday-style-label--with-animation"]: !isAnimationDisabled,
          [styles.withLeg]: isLegIncluded,
          ["monday-style-label--with-leg"]: isLegIncluded
        }
      ),
    [kind, color, isAnimationDisabled, isLegIncluded]
  );
  return (
    <span className={overrideClassName} data-testid={dataTestId || getTestId(ELEMENT_TYPES.LABEL, id)}>
      <div className={classNames}>
        <span>{text}</span>
        <span className={cx(styles.legWrapper, "monday-style-label__leg-wrapper")}>
          {isLegIncluded ? <Leg /> : null}
        </span>
      </div>
    </span>
  );
};

Label.colors = LABEL_COLORS;
Label.kinds = LABEL_TYPES;

export default Label;
