import { camelCase } from "lodash-es";
import cx from "classnames";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import React, { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import Text from "../Text/Text";
import Leg from "./Leg";
import { LabelColor, LabelKind } from "./LabelConstants";
import { VibeComponent, VibeComponentProps, withStaticProps } from "../../types";
import useClickableProps from "../../hooks/useClickableProps/useClickableProps";
import useMergeRef from "../../hooks/useMergeRef";
import styles from "./Label.module.scss";
import LabelCelebrationAnimation from "./LabelCelebrationAnimation";

export interface LabelProps extends VibeComponentProps {
  /**
   * @deprecated - use className instead
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
  celebrationAnimation?: boolean;
}

const Label: VibeComponent<LabelProps> & {
  colors?: typeof LabelColor;
  kinds?: typeof LabelKind;
} = forwardRef<HTMLElement, LabelProps>(
  (
    {
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
      onClick,
      celebrationAnimation
    },
    ref
  ) => {
    const labelRef = useRef<HTMLSpanElement>(null);
    const mergedRef = useMergeRef(ref, labelRef);
    const [isCelebrationAnimation, setIsCelebrationAnimation] = useState(celebrationAnimation);

    const overrideClassName = backwardCompatibilityForProperties([className, wrapperClassName]) as string;
    const isClickable = Boolean(onClick);

    const classNames = useMemo(
      () =>
        cx(
          styles.label,
          getStyle(styles, camelCase("kind" + "-" + kind)),
          getStyle(styles, camelCase("color" + "-" + color)),
          {
            // When celebrationAnimation is active it wins over the default animation
            [styles.withAnimation]: !isAnimationDisabled && !isCelebrationAnimation,
            [styles.withLeg]: isLegIncluded,
            [styles.clickable]: isClickable
          },
          labelClassName
        ),
      [kind, color, isAnimationDisabled, isLegIncluded, labelClassName, isCelebrationAnimation, isClickable]
    );

    const onClickCallback = useCallback(
      (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        if (onClick) {
          event.preventDefault();
          onClick(event);
        }
      },
      [onClick]
    );

    const clickableProps = useClickableProps(
      {
        onClick: onClickCallback,
        id,
        ariaHidden: false,
        ariaHasPopup: false,
        ariaExpanded: false
      },
      labelRef
    );

    useEffect(() => {
      setIsCelebrationAnimation(celebrationAnimation);
    }, [celebrationAnimation]);

    const label = useMemo(() => {
      return (
        <span
          {...(isClickable && clickableProps)}
          className={cx({ [styles.clickableWrapper]: isClickable }, overrideClassName)}
          data-testid={dataTestId || getTestId(ComponentDefaultTestId.LABEL, id)}
          ref={mergedRef}
        >
          <Text
            element="span"
            type={Text.types.TEXT2}
            className={classNames}
            color={Text.colors.ON_INVERTED}
            data-celebration-text={isCelebrationAnimation}
          >
            <Text element="span" type={Text.types.TEXT2} color={Text.colors.INHERIT}>
              {text}
            </Text>
            <span className={cx(styles.legWrapper)}>{isLegIncluded ? <Leg /> : null}</span>
          </Text>
        </span>
      );
    }, [
      isClickable,
      clickableProps,
      overrideClassName,
      dataTestId,
      id,
      mergedRef,
      classNames,
      isCelebrationAnimation,
      text,
      isLegIncluded
    ]);

    // Celebration animation is applied only for line kind
    if (isCelebrationAnimation && kind === "line") {
      return (
        <LabelCelebrationAnimation onAnimationEnd={() => setIsCelebrationAnimation(false)}>
          {label}
        </LabelCelebrationAnimation>
      );
    }

    return label;
  }
);

export default withStaticProps(Label, {
  colors: LabelColor,
  kinds: LabelKind
});
