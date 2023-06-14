import React, { forwardRef, useRef } from "react";
import cx from "classnames";
import { useMergeRefs } from "../../hooks";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import { ElementContent } from "../../types";
import { TextSize, TextWeight, TextColor } from "./TextConstants";
import { useEllipsisClass, useGlobalTextClass, useTooltipProps } from "./TextHooks";
import { DialogPosition } from "../../constants";
import Tooltip, { TooltipProps } from "../Tooltip/Tooltip";
import styles from "./Text.module.scss";

export interface TextProps extends VibeComponentProps {
  /**
   * The element tag of the text component
   */
  element?: string;
  /**
   * The textual content
   */
  children: ElementContent;
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
  ellipsis?: boolean;
  maxLines?: number;
  tooltipPosition?: DialogPosition;
  withoutTooltip?: boolean;
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
      children,
      tooltipPosition,
      "data-testid": dataTestId = getTestId(ComponentDefaultTestId.TEXT, id),
      element = "span",
      size = TextSize.MEDIUM,
      weight = TextWeight.NORMAL,
      color = TextColor.PRIMARY,
      ellipsis = true,
      maxLines = 1,
      withoutTooltip = false
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const textGlobalClass = useGlobalTextClass(size, weight);
    const { ref: overrideRef, class: ellipsisClass } = useEllipsisClass(mergedRef, ellipsis, maxLines);
    const tooltipProps = useTooltipProps(withoutTooltip, ellipsis, tooltipPosition, children) as TooltipProps;

    return (
      <Tooltip {...tooltipProps}>
        {React.createElement(
          element,
          {
            id,
            "data-testid": dataTestId,
            className: cx(textGlobalClass, styles[color], ellipsisClass, className),
            ref: overrideRef
          },
          children
        )}
      </Tooltip>
    );
  }
);

Object.assign(Text, {
  sizes: TextSize,
  weights: TextWeight,
  colors: TextColor
});
export default Text;
