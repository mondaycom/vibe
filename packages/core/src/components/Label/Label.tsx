import { camelCase } from "lodash-es";
import cx from "classnames";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import React, { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Text from "../Text/Text";
import Leg from "./Leg";
import { LabelColor, LabelKind } from "./LabelConstants";
import { VibeComponent, VibeComponentProps, withStaticProps } from "../../types";
import useClickableProps from "../../hooks/useClickableProps/useClickableProps";
import useMergeRef from "../../hooks/useMergeRef";
import styles from "./Label.module.scss";
import LabelCelebrationAnimation from "./LabelCelebrationAnimation";
import { mapSizesToTextSize, Sizes } from "./Label.types";

export interface LabelProps extends VibeComponentProps {
  /**
   * Class name for an inner text wrapper
   */
  labelClassName?: string;
  kind?: LabelKind;
  color?: LabelColor;
  text?: string;
  isLegIncluded?: boolean;
  onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  celebrationAnimation?: boolean;
  size?: Sizes;
}

const Label: VibeComponent<LabelProps> & {
  colors?: typeof LabelColor;
  kinds?: typeof LabelKind;
} = forwardRef<HTMLElement, LabelProps>(
  (
    {
      className,
      labelClassName,
      kind = LabelKind.FILL,
      color = LabelColor.PRIMARY,
      text = "",
      isLegIncluded = false,
      id,
      "data-testid": dataTestId,
      onClick,
      celebrationAnimation,
      size = "medium"
    },
    ref
  ) => {
    const labelRef = useRef<HTMLSpanElement>(null);
    const mergedRef = useMergeRef(ref, labelRef);
    const [isCelebrationAnimation, setIsCelebrationAnimation] = useState(celebrationAnimation);

    const isClickable = Boolean(onClick);

    const classNames = useMemo(
      () =>
        cx(
          styles.label,
          getStyle(styles, camelCase("kind" + "-" + kind)),
          getStyle(styles, camelCase("color" + "-" + color)),
          {
            [styles.withLeg]: isLegIncluded,
            [styles.clickable]: isClickable,
            [styles.small]: size === "small"
          },
          labelClassName
        ),
      [kind, color, isLegIncluded, labelClassName, isClickable, size]
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
          className={cx({ [styles.clickableWrapper]: isClickable }, className)}
          data-testid={dataTestId || getTestId(ComponentDefaultTestId.LABEL, id)}
          ref={mergedRef}
        >
          <Text
            element="span"
            type={mapSizesToTextSize[size]}
            className={classNames}
            color={Text.colors.ON_INVERTED}
            data-celebration-text={isCelebrationAnimation}
          >
            <Text
              element="span"
              type={mapSizesToTextSize[size]}
              color={Text.colors.INHERIT}
              className={cx({ [styles.smallText]: size === "small" })}
            >
              {text}
            </Text>
            <span className={cx(styles.legWrapper)}>{isLegIncluded ? <Leg /> : null}</span>
          </Text>
        </span>
      );
    }, [
      isClickable,
      clickableProps,
      className,
      dataTestId,
      id,
      mergedRef,
      classNames,
      isCelebrationAnimation,
      text,
      isLegIncluded,
      size
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
