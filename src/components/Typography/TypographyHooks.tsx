import { MutableRefObject } from "react";
import { ElementContent } from "../../types";
import useIsOverflowing from "../../hooks/useIsOverflowing/useIsOverflowing";
import { TooltipProps } from "../Tooltip/Tooltip";
import styles from "./Text.module.scss";

export function useEllipsisClass(ref: (node: HTMLElement) => void, ellipsis: boolean, maxLines: number) {
  let ellipsisClass;
  const overrideRef = (node: HTMLElement) => {
    node?.style.setProperty("--text-clamp-lines", maxLines.toString());
    ref(node);
  };

  // If component contains ellipsis return the fit ellipsis class
  if (ellipsis) {
    ellipsisClass = maxLines > 1 ? styles.multiLineEllipsis : styles.singleLineEllipsis;
  }

  return { ref: overrideRef, class: ellipsisClass };
}

export function useTooltipProps(
  ref: MutableRefObject<any>,
  withoutTooltip: boolean,
  ellipsis: boolean,
  tooltipProps: TooltipProps,
  children: ElementContent
) {
  const isOverflowing = useIsOverflowing({ ref: ellipsis ? ref : null, ignoreHeightOverflow: true });
  const isTooltipRendered = !withoutTooltip && ellipsis && isOverflowing && typeof children === "string";
  return isTooltipRendered ? { ...tooltipProps, content: children } : {};
}
