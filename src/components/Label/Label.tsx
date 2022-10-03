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

interface LabelProps extends VibeComponentProps {
  wrapperClassName: string;
  kind: typeof LABEL_TYPES[keyof typeof LABEL_TYPES];
  color: typeof LABEL_COLORS[keyof typeof LABEL_COLORS];
  text: string;
  isAnimationDisabled: boolean;
  isLegIncluded: boolean;
}

const Label = ({
  className,
  wrapperClassName,
  kind = "fill",
  color = "primary",
  text = "",
  isAnimationDisabled = false,
  isLegIncluded = false
}: Partial<LabelProps>) => {
  const overrideClassName = backwardCompatibilityForProperties([className, wrapperClassName]);
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
