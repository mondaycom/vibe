import { camelCase } from "lodash-es";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import React, { FC, useMemo } from "react";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import Leg from "./Leg";
import VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./Label.module.scss";

enum LabelKind {
  FILL = "fill",
  LINE = "line"
}

enum LabelColor {
  PRIMARY = "primary",
  DARK = "dark",
  NEGATIVE = "negative",
  POSITIVE = "positive"
}

interface LabelProps extends VibeComponentProps {
  /**
   * Backward compatibility for props naming - please use className instead
   */
  wrapperClassName?: string;
  /**
   * Class name for an inner text wrapper
   */
  labelClassName?: string;
  kind?: LabelKind;
  color?: LabelColor;
  text?: string;
  isAnimationDisabled?: boolean;
  isLegIncluded?: boolean;
}

const Label: FC<LabelProps> & {
  colors?: typeof LabelColor;
  kinds?: typeof LabelKind;
  defaultTestId?: typeof ComponentDefaultTestId;
} = ({
  className,
  wrapperClassName,
  labelClassName,
  kind = LabelKind.FILL,
  color = LabelColor.PRIMARY,
  text = "",
  isAnimationDisabled = false,
  isLegIncluded = false,
  id,
  "data-testid": dataTestId
}) => {
  const overrideClassName = backwardCompatibilityForProperties([className, wrapperClassName]) as string;
  const classNames = useMemo(
    () =>
      cx(
        styles.label,
        "monday-style-label",
        getStyle(styles, camelCase("kind" + "-" + kind)),
        getStyle(styles, camelCase("kind" + "-" + kind)),
        `monday-style-label--kind-${kind}`,
        getStyle(styles, camelCase("color" + "-" + color)),
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
  colors: LabelColor,
  kinds: LabelKind,
  defaultTestId: ComponentDefaultTestId.LABEL
});

export default Label;
