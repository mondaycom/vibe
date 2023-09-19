import { camelCase } from "lodash-es";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import React, { FC, useMemo, useRef } from "react";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import Text from "../Text/Text";
import Leg from "./Leg";
import { LabelColor, LabelKind } from "./LabelConstants";
import { VibeComponentProps, withStaticProps } from "../../types";
import styles from "./Label.module.scss";
import useClickableProps from "../../hooks/useClickableProps/useClickableProps";

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
  onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const Label: FC<LabelProps> & {
  colors?: typeof LabelColor;
  kinds?: typeof LabelKind;
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
  "data-testid": dataTestId,
  onClick
}) => {
  const overrideClassName = backwardCompatibilityForProperties([className, wrapperClassName]) as string;
  const textColor = color === LabelColor.DARK ? Text.colors.ON_PRIMARY : Text.colors.ON_INVERTED;
  const isClickable = Boolean(onClick);
  const classNames = useMemo(
    () =>
      cx(
        styles.label,
        getStyle(styles, camelCase("kind" + "-" + kind)),
        getStyle(styles, camelCase("color" + "-" + color)),
        {
          [styles.withAnimation]: !isAnimationDisabled,
          [styles.withLeg]: isLegIncluded
        },
        labelClassName,
        { [styles.clickable]: isClickable }
      ),
    [kind, color, isAnimationDisabled, isLegIncluded, labelClassName, isClickable]
  );
  const labelRef = useRef<HTMLSpanElement>(null);
  const clickableProps = useClickableProps(
    {
      onClick,
      id,
      ariaHidden: false,
      ariaHasPopup: false,
      ariaExpanded: false
    },
    labelRef
  );

  return (
    <span
      {...(isClickable && clickableProps)}
      className={cx(overrideClassName)}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.LABEL, id)}
      ref={labelRef}
    >
      <Text type={Text.types.TEXT2} className={classNames} color={textColor}>
        <span>{text}</span>
        <span className={cx(styles.legWrapper)}>{isLegIncluded ? <Leg /> : null}</span>
      </Text>
    </span>
  );
};

export default withStaticProps(Label, {
  colors: LabelColor,
  kinds: LabelKind
});
