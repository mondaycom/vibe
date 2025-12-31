import React, { forwardRef, useRef, type HTMLAttributes, useContext } from "react";
import cx from "classnames";
import {
  useMergeRef,
  type VibeComponentProps,
  getTestId,
  ComponentDefaultTestId,
  type ElementContent
} from "@vibe/shared";
import { type TypographyAlign, type TypographyColor } from "./Typography.types";
import { useEllipsisClass, useTooltipProps } from "./TypographyHooks";
import { Tooltip, type TooltipProps } from "@vibe/tooltip";
import { TypographyContext } from "./TypographyContext";
import styles from "./Typography.module.scss";

export interface TypographyProps extends VibeComponentProps, HTMLAttributes<HTMLElement> {
  /**
   * The HTML element tag used for the text component.
   */
  element?: string;
  /**
   * The content inside the typography component.
   */
  children: ElementContent;
  /**
   * The text color.
   */
  color?: TypographyColor;
  /**
   * The text alignment.
   */
  align?: TypographyAlign;
  /**
   * If true, truncates overflowing text with an ellipsis.
   */
  ellipsis?: boolean;
  /**
   * The maximum number of lines before truncating with an ellipsis.
   */
  maxLines?: number;
  /**
   * Props passed to the tooltip displayed when hovering over the text.
   */
  tooltipProps?: Partial<TooltipProps>;
  /**
   * If true, disables the tooltip that appears when text is truncated.
   */
  withoutTooltip?: boolean;
}

const Typography = forwardRef(
  (
    {
      className,
      id,
      children,
      tooltipProps,
      "data-testid": dataTestId = getTestId(ComponentDefaultTestId.TEXT, id),
      element = "span",
      color = "primary",
      align = "start",
      ellipsis = true,
      maxLines = 1,
      withoutTooltip = false,
      role,
      ...htmlAttributes
    }: TypographyProps,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    const { overflowTolerance } = useContext(TypographyContext);
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);
    const ignoreHeightOverflow = maxLines === 1;
    const { class: ellipsisClass, style: ellipsisStyle } = useEllipsisClass(ellipsis, maxLines);
    const overrideTooltipProps = useTooltipProps(
      componentRef,
      withoutTooltip,
      ellipsis,
      tooltipProps,
      children,
      ignoreHeightOverflow,
      overflowTolerance
    ) as TooltipProps;

    const overrideAlign = align === "inherit" ? "alignInherit" : align;

    return (
      <Tooltip {...overrideTooltipProps}>
        {React.createElement(
          element,
          {
            id,
            style: ellipsisStyle,
            "data-testid": dataTestId,
            className: cx(styles.typography, styles[color], styles[overrideAlign], ellipsisClass, className),
            ref: mergedRef,
            role,
            ...htmlAttributes
          },
          children
        )}
      </Tooltip>
    );
  }
);

export default Typography;
