import React, { forwardRef, useRef, HTMLAttributes, useContext } from "react";
import cx from "classnames";
import useMergeRef from "../../hooks/useMergeRef";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import { ElementContent } from "../../types";
import { TypographyAlign, TypographyColor } from "./Typography.types";
import { useEllipsisClass, useTooltipProps } from "./TypographyHooks";
import Tooltip, { TooltipProps } from "../Tooltip/Tooltip";
import { TypographyContext } from "./utils/TypographyContext";
import styles from "./Typography.module.scss";

export interface TypographyProps extends VibeComponentProps, HTMLAttributes<HTMLElement> {
  /**
   * The element tag of the text component
   */
  element?: string;
  /**
   * The textual content
   */
  children: ElementContent;
  color?: TypographyColor;
  align?: TypographyAlign;
  /**
   * When the text is too long, cut the end of the text and display instead of it three dots (...)
   */
  ellipsis?: boolean;
  /**
   * Use this prop combined with the boolean ellipsis prop for truncate the text and add an ellipsis after a certain number of lines
   */
  maxLines?: number;
  /**
   * All props are passed to the tooltip displayed when hovering over the text. By default, the tooltip will display when text contains an ellipsis and will show the full text
   */
  tooltipProps?: Partial<TooltipProps>;
  /**
   * Hide tooltip when hovering the text, by default the tooltip swill display when text contains an ellipsis
   */
  withoutTooltip?: boolean;
}

const Typography: VibeComponent<TypographyProps, HTMLElement> = forwardRef(
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
    ref
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
