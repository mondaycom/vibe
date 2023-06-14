import React, { forwardRef, useEffect, useRef } from "react";
import cx from "classnames";
import { useMergeRefs } from "../../hooks";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import { ElementContent } from "../../types";
import { TextSize, TextWeight, TextColor } from "./TextConstants";
import { useEllipsisClass, useGlobalTextClass } from "./TextHooks";
import styles from "./Text.module.scss";
import useRefWithCallback from "../../hooks/useRefWithCallback";

export interface TextProps extends VibeComponentProps {
  /**
   * The element tag of the text component
   */
  element?: keyof JSX.IntrinsicElements | string;
  /**
   * The textual content
   */
  children: ElementContent;
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
  ellipsis?: boolean;
  maxLines?: number;
}

const Text: VibeComponent<TextProps, HTMLElement> & {
  sizes?: typeof TextSize;
  weights?: typeof TextWeight;
  colors?: typeof TextColor;
} = forwardRef(
  (
    {
      className,
      id,
      "data-testid": dataTestId = getTestId(ComponentDefaultTestId.TEXT, id),
      element = "span",
      children,
      size = TextSize.MEDIUM,
      weight = TextWeight.NORMAL,
      color = TextColor.PRIMARY,
      ellipsis = true,
      maxLines = 1
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    useEffect(() => {
      componentRef.current.style.setProperty("--text-clamp-lines", maxLines.toString());
    });

    const textGlobalClass = useGlobalTextClass(size, weight);
    const ellipsisClass = useEllipsisClass(componentRef, ellipsis, maxLines);

    return React.createElement(
      element,
      {
        id,
        "data-testid": dataTestId,
        className: cx(textGlobalClass, styles[color], ellipsisClass, className),
        ref: mergedRef
      },
      children
    );
  }
);

Object.assign(Text, {
  sizes: TextSize,
  weights: TextWeight,
  colors: TextColor
});
export default Text;
