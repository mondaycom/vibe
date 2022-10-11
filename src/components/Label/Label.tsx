import React, { useMemo } from "react";
import cx from "classnames";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import Leg from "./Leg";
import "./Label.scss";
import VibeComponentProps from "src/types/VibeComponentProps";

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
  isLegIncluded = false
}: LabelProps) => {
  const overrideClassName = backwardCompatibilityForProperties([className, wrapperClassName]) as string;
  const classNames = useMemo(
    () =>
      cx("monday-style-label", `monday-style-label--kind-${kind}`, `monday-style-label--color-${color}`, {
        "monday-style-label--with-animation": !isAnimationDisabled,
        "monday-style-label--with-leg": isLegIncluded
      }),
    [kind, color, isAnimationDisabled, isLegIncluded]
  );
  return (
    <span className={overrideClassName}>
      <div className={classNames}>
        <span>{text}</span>
        <span className="monday-style-label__leg-wrapper">{isLegIncluded ? <Leg /> : null}</span>
      </div>
    </span>
  );
};

Label.colors = LABEL_COLORS;
Label.kinds = LABEL_TYPES;

export default Label;
