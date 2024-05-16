import { MutableRefObject } from "react";
import { ElementContent } from "../../types";
import useIsOverflowing from "../../hooks/useIsOverflowing/useIsOverflowing";
import { TooltipProps } from "../Tooltip/Tooltip";
import styles from "./Typography.module.scss";

export function useEllipsisClass(ref: MutableRefObject<HTMLElement>, ellipsis: boolean, maxLines: number) {
  let ellipsisClass;
  const overrideRef = (node: HTMLElement) => {
    node?.style.setProperty("--text-clamp-lines", maxLines.toString());
    ref.current = node;
  };

  // If component contains ellipsis return the fit ellipsis class
  if (ellipsis) {
    ellipsisClass = maxLines > 1 ? styles.multiLineEllipsis : styles.singleLineEllipsis;
  }

  return { ref: overrideRef, class: ellipsisClass };
}

export function useTooltipProps(
  ref: MutableRefObject<HTMLElement>,
  withoutTooltip: boolean,
  ellipsis: boolean,
  tooltipProps: Partial<TooltipProps>,
  children: ElementContent,
  ignoreHeightOverflow: boolean,
  overflowTolerance: number
) {
  const isOverflowing = useIsOverflowing({
    ref: ellipsis ? ref : null,
    ignoreHeightOverflow,
    tolerance: overflowTolerance
  });
  const isTooltipRendered = !withoutTooltip && ellipsis && isOverflowing && typeof children === "string";
  return isTooltipRendered ? { ...tooltipProps, content: children } : {};
}
