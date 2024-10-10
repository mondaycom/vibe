import { MutableRefObject, useMemo } from "react";
import { ElementContent } from "../../types";
import useIsOverflowing from "../../hooks/useIsOverflowing/useIsOverflowing";
import { TooltipProps } from "../Tooltip/Tooltip";
import styles from "./Typography.module.scss";

export function useEllipsisClass(ellipsis: boolean, maxLines = 1) {
  const result = useMemo(() => {
    let ellipsisClass: string;
    let style: Record<string, string>;
    // If component contains ellipsis return the fit ellipsis class
    if (ellipsis) {
      ellipsisClass = maxLines > 1 ? styles.multiLineEllipsis : styles.singleLineEllipsis;
      if (maxLines > 1) {
        // not relevant for single line ellipsis
        style = { "--text-clamp-lines": maxLines.toString() };
      }
    }

    return { class: ellipsisClass, style };
  }, [ellipsis, maxLines]);
  return result;
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
