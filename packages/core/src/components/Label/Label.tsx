import { camelCase } from "lodash-es";
import cx from "classnames";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import React, { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Text from "../Text/Text";
import Leg from "./Leg";
import { LabelAllowedColor as LabelColorEnum, LabelKind as LabelKindEnum, mapSizesToTextSize } from "./LabelConstants";
import { type LabelColor, type LabelKind, type ContentColor } from "./Label.types";
import { contentColors } from "../../utils/colors-vars-map";
import { type VibeComponentProps, withStaticProps } from "../../types";
import useClickableProps from "../../hooks/useClickableProps/useClickableProps";
import useMergeRef from "../../hooks/useMergeRef";
import styles from "./Label.module.scss";
import LabelCelebrationAnimation from "./LabelCelebrationAnimation";
import { type LabelSizes } from "./Label.types";

export interface LabelProps extends VibeComponentProps {
  /**
   * Class name applied to the inner text wrapper.
   */
  labelClassName?: string;
  /**
   * The visual style of the label.
   */
  kind?: LabelKind;
  /**
   * The background color of the label.
   */
  color?: LabelColor;
  /**
   * The text content of the label.
   */
  text?: string;
  /**
   * If true, includes a leg (decorative extension).
   */
  isLegIncluded?: boolean;
  /**
   * Callback fired when the label is clicked.
   */
  onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  /**
   * If true, triggers a celebration animation.
   */
  celebrationAnimation?: boolean;
  /**
   * The size of the label.
   */
  size?: LabelSizes;
}

const Label = forwardRef<HTMLElement, LabelProps>(
  (
    {
      className,
      labelClassName,
      kind = "fill",
      color = "primary",
      text = "",
      isLegIncluded = false,
      id,
      "data-testid": dataTestId,
      onClick,
      celebrationAnimation,
      size = "medium"
    }: LabelProps,
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

    const backgroundColorStyle = useMemo(() => {
      if (contentColors.includes(color as ContentColor)) {
        return { backgroundColor: `var(--color-${color})` };
      }
    }, [color]);

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
            style={backgroundColorStyle}
            element="span"
            type={mapSizesToTextSize[size]}
            className={classNames}
            color="onInverted"
            data-celebration-text={isCelebrationAnimation}
          >
            <Text
              element="span"
              type={mapSizesToTextSize[size]}
              color="inherit"
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
      size,
      backgroundColorStyle
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

interface LabelStaticProps {
  colors: typeof LabelColorEnum;
  kinds: typeof LabelKindEnum;
}

export default withStaticProps<LabelProps, LabelStaticProps>(Label, {
  colors: LabelColorEnum,
  kinds: LabelKindEnum
});
