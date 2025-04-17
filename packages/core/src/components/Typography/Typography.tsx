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
